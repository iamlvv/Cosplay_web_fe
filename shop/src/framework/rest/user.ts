import { useModalAction } from '@/components/ui/modal/modal.context';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { toast } from 'react-toastify';
import client from './client';
import preknowClient from './client/preknow';
import { authorizationAtom } from '@/store/authorization-atom';
import { useAtom } from 'jotai';
import { signOut as socialLoginSignOut } from 'next-auth/react';
import { useToken } from '@/lib/hooks/use-token';
import { API_ENDPOINTS } from './client/api-endpoints';
import { useEffect, useState } from 'react';
import type {
  RegisterUserInput,
  ChangePasswordUserInput,
  OtpLoginInputType,
} from '@/types';
import { initialOtpState, optAtom } from '@/components/otp/atom';
import { useStateMachine } from 'little-state-machine';
import {
  initialState,
  updateFormState,
} from '@/components/auth/forgot-password';
import { clearCheckoutAtom } from '@/store/checkout';

export function useUser() {
  const [isAuthorized] = useAtom(authorizationAtom);
  const [userId, setUserId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [mutate, setMutate] = useState<any>(null);
  useEffect(() => {
    setUserId(localStorage.getItem('userId'));
    setAccessToken(localStorage.getItem('accessToken'));
  }, [isAuthorized]);
  // const { data, isLoading, error } = useQuery(
  //   [API_ENDPOINTS.USERS_ME],
  //   preknowClient.users.me(userId),
  //   {
  //     enabled: isAuthorized,
  //     onError: (err) => {
  //       console.log(err);
  //     },
  //   }
  // );

  const handleVerifyMe = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5001/auth/me',
        {
          userId: localStorage.getItem('userId'),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setMutate(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  useEffect(() => {
    handleVerifyMe();
  }, [isAuthorized]);

  const { isLoading, error } = useMutation(preknowClient.users.me, {
    onSuccess: (data) => {
      console.log('data: ', data);
    },
    onError: (error) => {
      console.log('error: ', error);
    },
  });
  console.log('isAuthorized: ', isAuthorized);
  console.log('userId: ', userId);
  console.log('me: ', mutate);
  //TODO: do some improvement here
  return { me: mutate, isLoading, error, isAuthorized };
}

export const useDeleteAddress = () => {
  const { closeModal } = useModalAction();
  const queryClient = useQueryClient();
  return useMutation(client.users.deleteAddress, {
    onSuccess: (data) => {
      if (data) {
        toast.success('successfully-address-deleted');
        closeModal();
        return;
      }
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};

      toast.error(data?.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.USERS_ME);
    },
  });
};

export const useUpdateUser = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { closeModal } = useModalAction();
  return useMutation(client.users.update, {
    onSuccess: (data) => {
      if (data?.id) {
        toast.success(t('profile-update-successful'));
        closeModal();
      }
    },
    onError: (error) => {
      toast.error(t('error-something-wrong'));
    },
    onSettled: () => {
      queryClient.invalidateQueries(API_ENDPOINTS.USERS_ME);
    },
  });
};

export const useContact = () => {
  const { t } = useTranslation('common');

  return useMutation(client.users.contactUs, {
    onSuccess: (data) => {
      if (data.success) {
        toast.success(t(data.message));
      } else {
        toast.error(t(data.message));
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export function useLogin() {
  const { t } = useTranslation('common');
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  const { setToken } = useToken();
  let [serverError, setServerError] = useState<string | null>(null);

  const { mutate, isLoading } = useMutation(preknowClient.users.login, {
    onSuccess: (data) => {
      if (!data.access_token) {
        setServerError('error-credential-wrong');
        return;
      }
      setToken(data.access_token);
      setAuthorized(true);
      console.log('data: ', data);
      closeModal();
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('accessToken', data.access_token);
    },
    onError: (error: Error) => {
      console.log(error.message);
      toast.error(t('error-something-wrong'));
    },
  });
  console.log(mutate);

  return { mutate, isLoading, serverError, setServerError };
}

export function useSocialLogin() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);

  return useMutation(preknowClient.users.socialLogin, {
    onSuccess: (data) => {
      if (data?.access_token) {
        setToken(data?.access_token);
        setAuthorized(true);
        return;
      }
      if (!data.access_token) {
        toast.error(t('error-credential-wrong'));
      }
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
}

export function useSendOtpCode({
  verifyOnly,
}: Partial<{ verifyOnly: boolean }> = {}) {
  let [serverError, setServerError] = useState<string | null>(null);
  const [otpState, setOtpState] = useAtom(optAtom);

  const { mutate, isLoading } = useMutation(client.users.sendOtpCode, {
    onSuccess: (data) => {
      if (!data.success) {
        setServerError(data.message!);
        return;
      }
      setOtpState({
        ...otpState,
        otpId: data?.id!,
        isContactExist: data?.is_contact_exist!,
        phoneNumber: data?.phone_number!,
        step: data?.is_contact_exist! ? 'OtpForm' : 'RegisterForm',
        ...(verifyOnly && { step: 'OtpForm' }),
      });
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
  });

  return { mutate, isLoading, serverError, setServerError };
}

export function useVerifyOtpCode({
  onVerifySuccess,
}: {
  onVerifySuccess: Function;
}) {
  const [otpState, setOtpState] = useAtom(optAtom);
  let [serverError, setServerError] = useState<string | null>(null);
  const { mutate, isLoading } = useMutation(client.users.verifyOtpCode, {
    onSuccess: (data) => {
      if (!data.success) {
        setServerError(data?.message!);
        return;
      }
      if (onVerifySuccess) {
        onVerifySuccess({
          phone_number: otpState.phoneNumber,
        });
      }
      setOtpState({
        ...initialOtpState,
      });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isLoading, serverError, setServerError };
}

export function useOtpLogin() {
  const [otpState, setOtpState] = useAtom(optAtom);
  const { t } = useTranslation('common');
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  const { setToken } = useToken();
  const queryClient = new QueryClient();
  let [serverError, setServerError] = useState<string | null>(null);

  const { mutate: otpLogin, isLoading } = useMutation(client.users.OtpLogin, {
    onSuccess: (data) => {
      if (!data.token) {
        setServerError('text-otp-verify-failed');
        return;
      }
      setToken(data.token!);
      setAuthorized(true);
      setOtpState({
        ...initialOtpState,
      });
      closeModal();
    },
    onError: (error: Error) => {
      console.log(error.message);
    },
    onSettled: () => {
      queryClient.clear();
    },
  });

  function handleSubmit(input: OtpLoginInputType) {
    otpLogin({
      ...input,
      phone_number: otpState.phoneNumber,
      otp_id: otpState.otpId!,
    });
  }

  return { mutate: handleSubmit, isLoading, serverError, setServerError };
}

export function useRegister() {
  const { t } = useTranslation('common');
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const { closeModal } = useModalAction();
  let [serverError, setServerError] = useState<string | null>(null);
  // let [formError, setFormError] = useState<Partial<RegisterUserInput> | null>(
  //   null
  // );

  const { mutate, isLoading, error } = useMutation(
    preknowClient.users.register,
    {
      onSuccess: (data) => {
        // if (!data.access_token) {
        //   setServerError('error-credential-wrong');
        //   toast.error(t('error-credential-wrong'));
        //   return;
        // }
        setToken(data.access_token);
        setAuthorized(true);
        localStorage.setItem('userId', data.userId);
        closeModal();
      },
      onError: (error: Error) => {
        // const {
        //   response: { data },
        // }: any = error ?? {};

        // setFormError(data);
        console.log(error.message);
        toast.error(t('error-something-wrong'));
      },
    }
  );

  return { mutate, isLoading, serverError, setServerError };
}

export function useLogout() {
  const queryClient = useQueryClient();
  const { setToken } = useToken();
  const [_, setAuthorized] = useAtom(authorizationAtom);
  const [_r, resetCheckout] = useAtom(clearCheckoutAtom);

  const { mutate: signOut } = useMutation(client.users.logout, {
    onSuccess: (data) => {
      if (data) {
        setToken('');
        setAuthorized(false);
        resetCheckout();
        queryClient.refetchQueries(API_ENDPOINTS.USERS_ME);
      }
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
  function handleLogout() {
    socialLoginSignOut({ redirect: false });
    signOut();
  }
  return {
    mutate: handleLogout,
  };
}

export function useChangePassword() {
  const { t } = useTranslation('common');
  let [formError, setFormError] =
    useState<Partial<ChangePasswordUserInput> | null>(null);

  const { mutate, isLoading } = useMutation(client.users.changePassword, {
    onSuccess: (data) => {
      if (!data.success) {
        setFormError({
          oldPassword: data?.message ?? '',
        });
        return;
      }
      toast.success(t('password-successful'));
    },
    onError: (error) => {
      const {
        response: { data },
      }: any = error ?? {};
      setFormError(data);
    },
  });

  return { mutate, isLoading, formError, setFormError };
}

export function useForgotPassword() {
  const { actions } = useStateMachine({ updateFormState });
  let [message, setMessage] = useState<string | null>(null);
  let [formError, setFormError] = useState<any>(null);
  const { t } = useTranslation();

  const { mutate, isLoading } = useMutation(client.users.forgotPassword, {
    onSuccess: (data, variables) => {
      if (!data.success) {
        setFormError({
          email: data?.message ?? '',
        });
        return;
      }
      setMessage(data?.message!);
      actions.updateFormState({
        email: variables.email,
        step: 'Token',
      });
    },
  });

  return { mutate, isLoading, message, formError, setFormError, setMessage };
}

export function useResetPassword() {
  const queryClient = useQueryClient();
  const { openModal } = useModalAction();
  const { actions } = useStateMachine({ updateFormState });

  return useMutation(client.users.resetPassword, {
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Successfully Reset Password!');
        actions.updateFormState({
          ...initialState,
        });
        openModal('LOGIN_VIEW');
        return;
      }
    },
    onSettled: () => {
      queryClient.clear();
    },
  });
}

export function useVerifyForgotPasswordToken() {
  const { actions } = useStateMachine({ updateFormState });
  const queryClient = useQueryClient();
  let [formError, setFormError] = useState<any>(null);

  const { mutate, isLoading } = useMutation(
    client.users.verifyForgotPasswordToken,
    {
      onSuccess: (data, variables) => {
        if (!data.success) {
          setFormError({
            token: data?.message ?? '',
          });
          return;
        }
        actions.updateFormState({
          step: 'Password',
          token: variables.token as string,
        });
      },
      onSettled: () => {
        queryClient.clear();
      },
    }
  );

  return { mutate, isLoading, formError, setFormError };
}
