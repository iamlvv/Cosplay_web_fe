import { useUser } from '@/framework/user';
import { verifiedResponseAtom } from '@/store/checkout';
import { useAtom } from 'jotai';
import isEmpty from 'lodash/isEmpty';
import dynamic from 'next/dynamic';
const UnverifiedItemList = dynamic(
  () => import('@/components/checkout/preknow/unverified-item-list')
);
const VerifiedItemList = dynamic(
  () => import('@/components/checkout/preknow/verified-item-list')
);

export const RightSideView = ({
  hideTitle = false,
}: {
  hideTitle?: boolean;
}) => {
  const { me } = useUser();

  const [verifiedResponse] = useAtom(verifiedResponseAtom);
  if (isEmpty(verifiedResponse)) {
    return (
      <>
        <div className="mb-6 w-full rounded border bg-light p-4 shadow">
          <div className="mb-5 flex justify-between">
            <h2 className="text-xl font-semibold text-slate-600">Giao tới</h2>
            <button className="text-accent">Thay đổi</button>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-base font-semibold text-heading">
              <span>{me?.name || 'Your name'}</span>
              <span>{me?.contact || '0123456789'}</span>
            </div>
            <p className="text-base text-body">
              {me?.delivery_address ||
                'KTX Khu A - ĐHQG HCM, phường Linh Trung, thành phố Thủ Đức, TP.HCM'}
            </p>
          </div>
        </div>
        <UnverifiedItemList hideTitle={hideTitle} />
      </>
    );
  }
  return <VerifiedItemList />;
};

export default RightSideView;
