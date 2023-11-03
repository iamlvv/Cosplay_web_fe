/* eslint-disable react-hooks/rules-of-hooks */
import Banner from '@/assets/preknow/banner-checkout-finish.png';
import CheckIcon from '@/components/icons/preknow-check-icon';
import ShippingIcon from '@/components/icons/shipping-icon';
import HomeLayout from '@/components/layouts/_home';
import Seo from '@/components/seo/seo';
import { useUser } from '@/framework/user';
import { useOrder } from '@/hooks/order';
import { orderIdAtom } from '@/store/checkout';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import Image from 'next/image';
export { getStaticProps } from '@/framework/general.ssr';

const RightSideView = dynamic(
  () => import('@/components/checkout/finish/right-side-view'),
  { ssr: false }
);

export default function CheckoutPage() {
  const { me } = useUser();
  const [orderId] = useAtom(orderIdAtom);

  const { order } = useOrder({
    orderId: orderId as string,
  });

  console.log('order: ', order);

  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className="m-auto flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
          <div className="w-full space-y-6 lg:max-w-2xl">
            <Image src={Banner} alt="banner-checkout-preknow" />
            <div className="w-full rounded border bg-light p-4 shadow">
              <h2 className="mb-8 text-xl font-semibold text-slate-600">
                Cảm ơn bạn đã lựa chọn mua hàng tại PreKnow
              </h2>
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center">
                  <CheckIcon />
                  <span className="ml-2 text-xl text-accent">
                    Đặt hàng thành công
                  </span>
                </div>
                <div>
                  <p className="mb-1 text-sm text-body">
                    Mã số đơn hàng của bạn:
                  </p>
                  <div className="min-w-[268px] rounded bg-accent py-1 text-center text-xl font-semibold text-white">
                    {order?.transactionId || '311745646'}
                  </div>
                </div>
              </div>
              <div className="grid gap-y-4">
                <p>
                  Bạn có thể xem lại{' '}
                  <span className="text-accent">đơn hàng của tôi</span>
                </p>
                <p className="text-accent">Quản lý đơn hàng</p>
                <div className="flex">
                  <ShippingIcon className="mr-2" />
                  Thời gian dự kiến giao hàng vào Thứ 7, 19/11/2022 - Chủ nhật,
                  20/11/2022
                </div>
                <p>
                  Thông tin chi tiết về đơn hàng đã được gửi đến địa chỉ mail{' '}
                  <span className="text-accent">
                    {me?.email || 'nhiepbaochau@gmail.com'}
                  </span>{' '}
                  Nếu không tìm thấy vui lòng kiểm tra trong hộp thư{' '}
                  <span className="font-semibold">Spam</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10 w-full sm:mb-12 lg:mb-0 lg:w-96">
            <RightSideView />
          </div>
        </div>
      </div>
    </>
  );
}
CheckoutPage.authenticationRequired = true;

CheckoutPage.getLayout = function getLayout(page: any) {
  return (
    <HomeLayout layout={page.props.layout}>
      {page as React.ReactNode}
    </HomeLayout>
  );
};
