import ProfileAddressGrid from '@/components/profile/profile-address';
import Card from '@/components/ui/cards/card';
import { useTranslation } from 'next-i18next';
import ProfileForm from '@/components/profile/profile-form';
import ProfileContact from '@/components/profile/profile-contact';
import Seo from '@/components/seo/seo';
import { useUser } from '@/framework/user';
import DashboardLayout from '@/layouts/_dashboard';
export { getStaticProps } from '@/framework/general.ssr';

const ProfilePage = () => {
  const { t } = useTranslation('common');
  const { me }: any = useUser();
  if (!me) return null;
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="mx-auto flex w-full max-w-1920 flex-col gap-x-4 bg-gray-100 lg:px-8 xl:px-16 2xl:px-20">
        <ProfileForm user={me} />
        <ProfileContact userId={me?._id} contact={me?.contact!} />
        <Card className="w-full">
          <ProfileAddressGrid
            userId={me._id}
            //@ts-ignore
            address={me?.address}
            label={t('text-addresses')}
          />
        </Card>
      </div>
    </>
  );
};

ProfilePage.authenticationRequired = true;

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default ProfilePage;
