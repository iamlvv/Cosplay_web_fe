import { optAtom } from '@/components/otp/atom';
import PhoneNumberForm from '@/components/otp/phone-number-form';
import { useAtom } from 'jotai';

interface OtpFormProps {
  phoneNumber: string | undefined;
  onVerifySuccess?: (values: { phone_number: string }) => void;
  onContactUpdate: (values: { phone_number: string }) => void;
}
export default function OtpForm({
  phoneNumber,
  onContactUpdate,
}: OtpFormProps) {
  const [otpState] = useAtom(optAtom);

  // const { mutate: verifyOtpCode, isLoading: otpVerifyLoading } =
  //   useVerifyOtpCode({ onVerifySuccess });
  // const {
  //   mutate: sendOtpCode,
  //   isLoading,
  //   serverError,
  //   setServerError,
  // } = useSendOtpCode({
  //   verifyOnly: true,
  // });

  function onSendCodeSubmission({ phone_number }: { phone_number: string }) {
    onContactUpdate({ phone_number });
  }

  // function onVerifyCodeSubmission({ code }: { code: string }) {
  //   verifyOtpCode({
  //     code,
  //     phone_number: otpState.phoneNumber,
  //     otp_id: otpState.otpId!,
  //   });
  // }

  return (
    <>
      {otpState.step === 'PhoneNumber' && (
        <>
          {/* <Alert
            variant="error"
            message={serverError && t(serverError)}
            className="mb-4"
            closeable={true}
            onClose={() => setServerError(null)}
          /> */}
          <PhoneNumberForm
            onSubmit={onSendCodeSubmission}
            // isLoading={isLoading}
            phoneNumber={phoneNumber}
          />
        </>
      )}

      {/* {otpState.step === 'OtpForm' && (
        <OtpCodeForm
          onSubmit={onVerifyCodeSubmission}
          isLoading={otpVerifyLoading}
        />
      )} */}
    </>
  );
}
