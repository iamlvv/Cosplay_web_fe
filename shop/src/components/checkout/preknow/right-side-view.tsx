import { Routes } from '@/config/routes';
import { useUser } from '@/framework/user';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const UnverifiedItemList = dynamic(
  () => import('@/components/checkout/preknow/unverified-item-list')
);

export const RightSideView = ({
  hideTitle = false,
}: {
  hideTitle?: boolean;
}) => {
  const { me } = useUser();

  return (
    <>
      <div className="mb-6 w-full rounded border bg-light p-4 shadow">
        <div className="mb-5 flex justify-between">
          <h2 className="text-xl font-semibold text-slate-600">Giao tới</h2>
          <Link href={Routes.profile}>
            <a className="text-accent">Thay đổi</a>
          </Link>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-base font-semibold text-heading">
            <span>{me?.name || 'Your name'}</span>
            <span>+{me?.contact || '84123456789'}</span>
          </div>
          <p className="text-base text-body">
            {me?.address ||
              'KTX Khu A - ĐHQG HCM, phường Linh Trung, thành phố Thủ Đức, TP.HCM'}
          </p>
        </div>
      </div>
      <UnverifiedItemList hideTitle={hideTitle} />
    </>
  );
};

export default RightSideView;
