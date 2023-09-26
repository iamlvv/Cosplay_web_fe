import CartCheckBagIcon from '@/components/icons/cart-check-bag';
import { CloseIcon } from '@/components/icons/close-icon';
import EmptyCartIcon from '@/components/icons/empty-cart';
import HomeLayout from '@/components/layouts/_home';
import Seo from '@/components/seo/seo';
import { Routes } from '@/config/routes';
import { useUser } from '@/framework/user';
import { fadeInOut } from '@/lib/motion/fade-in-out';
import usePrice from '@/lib/use-price';
import { useCart } from '@/store/quick-cart/cart.context';
import type { NextPageWithLayout } from '@/types';
import { AnimateSharedLayout, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const CartItem = dynamic(() => import('@/components/cart/preknow-cart-item'));

const CartPage: NextPageWithLayout = () => {
  const { items, totalUniqueItems, total, resetCart } = useCart();

  const { me } = useUser();

  const { price: totalPrice } = usePrice({
    amount: total,
  });

  const router = useRouter();
  function handleCheckout() {
    router.push(Routes.checkout);
  }

  return (
    <>
      <Seo title="Cart" url="cart" />
      <div className="mx-auto flex w-full max-w-1920 gap-x-4 bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        {/* left component */}
        <div className="flex h-fit w-full max-w-4xl flex-col gap-y-4">
          <header className="flex w-full items-center justify-between rounded border bg-light p-4">
            <div className="flex font-semibold text-accent">
              <CartCheckBagIcon className="shrink-0" width={24} height={22} />
              <span className="flex ltr:ml-2 rtl:mr-2">
                {totalUniqueItems} sản phẩm
              </span>
            </div>
            <button
              onClick={() => resetCart()}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-muted transition-all duration-200 hover:bg-accent hover:text-light focus:bg-accent focus:text-light focus:outline-none ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2"
            >
              <span className="sr-only">Đóng</span>
              <CloseIcon className="h-3 w-3" />
            </button>
          </header>
          {/* End of cart header */}
          <AnimateSharedLayout>
            <motion.div
              layout
              className="flex-grow rounded border bg-light p-4 shadow"
            >
              {items.length > 0 ? (
                items?.map((item) => <CartItem item={item} key={item.id} />)
              ) : (
                <motion.div
                  layout
                  initial="from"
                  animate="to"
                  exit="from"
                  variants={fadeInOut(0.25)}
                  className="flex h-full flex-col items-center justify-center"
                >
                  <EmptyCartIcon width={140} height={176} />
                  <h4 className="mt-6 text-base font-semibold">
                    Không tìm thấy sản phẩm
                  </h4>
                </motion.div>
              )}
            </motion.div>
          </AnimateSharedLayout>
          {/* End of cart items */}
        </div>

        {/* right component */}
        <div className="flex w-full max-w-sm flex-col gap-y-6">
          <div className="w-full rounded border bg-light p-4 shadow">
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

          <div className="w-full rounded border bg-light p-4 shadow">
            <h2 className="text-xl font-semibold text-accent">Thanh toán</h2>
            <div className="flex justify-between border-b py-5 text-base text-body">
              <span>Tạm tính</span>
              <span>{totalPrice}</span>
            </div>
            <div className="flex justify-between py-5 text-base text-body">
              <span>Tổng tiền</span>
              <div className="flex flex-col justify-end">
                <p className="text-right text-2xl text-red-600">{totalPrice}</p>
                <p className="text-xs">(Đã bao gồm VAT nếu có)</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-full rounded bg-accent py-2 font-semibold text-light"
            onClick={handleCheckout}
          >
            Mua hàng
          </button>
        </div>
      </div>
    </>
  );
};

CartPage.getLayout = function getLayout(page) {
  return (
    <HomeLayout layout={page.props.layout}>
      {page as React.ReactNode}
    </HomeLayout>
  );
};

export default CartPage;
