import Button from '@/components/ui/button';
import Card from '@/components/ui/cards/card';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import { useUpdateUser } from '@/hooks/user';
import { UpdateUserInput, User } from '@/types/preknow';
import pick from 'lodash/pick';
import { useTranslation } from 'next-i18next';

const ProfileForm = ({ user }: { user: User }) => {
  const { t } = useTranslation('common');
  const { mutate: updateProfile, isLoading } = useUpdateUser();

  function onSubmit(values: UpdateUserInput) {
    if (!user) {
      return false;
    }
    updateProfile({
      _id: user._id,
      name: values.name,
      bio: values?.bio ?? '',
      // profile: {
      //   id: user?.profile?.id,
      //   bio: values?.profile?.bio ?? '',
      //   //@ts-ignore
      //   avatar: values?.profile?.avatar?.[0],
      // },
    });
  }

  return (
    <Form<UpdateUserInput>
      onSubmit={onSubmit}
      useFormProps={{
        ...(user && {
          defaultValues: pick(user, ['name', 'bio']),
        }),
      }}
    >
      {({ register, control }) => (
        <>
          <div className="mb-8 flex">
            <Card className="w-full">
              {/* <div className="mb-8">
                <FileInput control={control} name="profile.avatar" />
              </div> */}

              <div className="mb-6 flex flex-row">
                <Input
                  className="flex-1"
                  label={t('text-name')}
                  {...register('name')}
                  variant="outline"
                />
              </div>

              <TextArea
                label={t('text-bio')}
                //@ts-ignore
                {...register('bio')}
                variant="outline"
                className="mb-6"
              />

              <div className="flex">
                <Button
                  className="ltr:ml-auto rtl:mr-auto"
                  loading={isLoading}
                  disabled={isLoading}
                >
                  {t('text-save')}
                </Button>
              </div>
            </Card>
          </div>
        </>
      )}
    </Form>
  );
};

export default ProfileForm;
