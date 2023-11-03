/* eslint-disable react-hooks/rules-of-hooks */
import CashIcon from '@/assets/preknow/cash-icon.svg';
import MomoIcon from '@/assets/preknow/momo-icon.svg';
import VNpayIcon from '@/assets/preknow/vnpay-icon.svg';
import ZalopayIcon from '@/assets/preknow/zalopay-icon.svg';
import HomeLayout from '@/components/layouts/_home';
import Seo from '@/components/seo/seo';
import usePrice from '@/lib/use-price';
import { deliveryMethodAtom, paymentGatewayAtom } from '@/store/checkout';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import Image from 'next/image';
export { getStaticProps } from '@/framework/general.ssr';

const RightSideView = dynamic(
  () => import('@/components/checkout/preknow/right-side-view'),
  { ssr: false }
);

enum deliveryMethod {
  SAVE = 'SAVE',
  FAST = 'FAST',
  EXPRESS = 'EXPRESS',
}

enum paymentGateway {
  CASH_ON_DELIVERY = 'CASH_ON_DELIVERY',
  MOMO = 'MOMO',
  ZALOPAY = 'ZALOPAY',
  VNPAY = 'VNPAY',
}

const deliveryMethodList: any[] = [
  {
    id: 1,
    value: deliveryMethod.SAVE,
    price: 16000,
    title: 'Giao hàng tiết kiệm',
    desc: 'Giao từ 3 đến 4 ngày',
  },
  {
    id: 2,
    value: deliveryMethod.FAST,
    price: 44000,
    title: 'Giao hàng nhanh',
    desc: 'Giao từ 1 đến 2 ngày',
  },
  {
    id: 3,
    value: deliveryMethod.EXPRESS,
    price: 212000,
    title: 'Hỏa tốc',
    desc: 'Giao trong ngày',
  },
];

const paymentGatewayList: any[] = [
  {
    id: 1,
    value: paymentGateway.CASH_ON_DELIVERY,
    title: (
      <>
        <Image src={CashIcon} alt="cash-icon" />
        <span className="ml-1">Thanh toán tiền mặt khi nhận hàng</span>
      </>
    ),
  },
  {
    id: 2,
    value: paymentGateway.MOMO,
    title: (
      <>
        <Image src={MomoIcon} alt="momo-icon" />
        <span className="ml-1">Thanh toán tiền bằng ví MoMo</span>
      </>
    ),
  },
  {
    id: 3,
    value: paymentGateway.ZALOPAY,
    title: (
      <>
        <Image src={ZalopayIcon} alt="zalopay-icon" />
        <span className="ml-1">Thanh toán tiền bằng ví ZaloPay</span>
      </>
    ),
  },
  {
    id: 4,
    value: paymentGateway.VNPAY,
    title: (
      <>
        <Image src={VNpayIcon} alt="vnpay-icon" />
        <span className="ml-1">Thanh toán tiền bằng ví VNPay</span>
      </>
    ),
  },
];

export default function CheckoutPage() {
  const [gateway, setGateway] = useAtom(paymentGatewayAtom);

  const [deliveryMethod, setDeliveryMethod] = useAtom(deliveryMethodAtom);

  const handleDeliveryMethodChange = (e: any) => {
    setDeliveryMethod(e.target.value);
  };

  const handleGatewayChange = (e: any) => {
    setGateway(e.target.value);
  };
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <div className="bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <div className="m-auto flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
          <div className="w-full space-y-6 lg:max-w-2xl">
            <div className="w-full rounded border bg-light p-4 shadow">
              <h2 className="mb-5 text-xl font-semibold text-slate-600">
                Chọn hình thức giao hàng
              </h2>
              <div>
                <ul className="w-full rounded-lg border border-gray-200 bg-white text-sm font-medium">
                  {deliveryMethodList.map((m) => {
                    const { price } = usePrice({
                      amount: m.price,
                    });

                    return (
                      <li
                        key={m.id}
                        className="w-full rounded-t-lg border-b border-gray-200"
                      >
                        <div className="flex items-center p-3">
                          <input
                            id={m.value}
                            type="radio"
                            name="deliveryMethod"
                            value={m.value}
                            checked={m.value === deliveryMethod}
                            onChange={handleDeliveryMethodChange}
                            className="h-4 w-4 border-gray-300 text-accent focus:ring-2 focus:ring-accent"
                          />
                          <label
                            htmlFor={m.value}
                            className="ml-3 flex w-full items-center justify-between py-3 text-sm font-medium"
                          >
                            <div>
                              <h6 className="text-base">{m.title}</h6>
                              <p className="text-xs text-muted">{m.desc}</p>
                            </div>
                            <div>{price}</div>
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="w-full rounded border bg-light p-4 shadow">
              <h2 className="mb-5 text-xl font-semibold text-slate-600">
                Chọn hình thức thanh toán
              </h2>
              <div>
                <ul className="w-full rounded-lg border border-gray-200 bg-white text-sm font-medium">
                  {paymentGatewayList.map((g) => (
                    <li
                      key={g.id}
                      className="w-full rounded-t-lg border-b border-gray-200"
                    >
                      <div className="flex items-center p-3">
                        <input
                          id={g.value}
                          type="radio"
                          name="paymentGateway"
                          value={g.value}
                          checked={g.value === gateway}
                          onChange={handleGatewayChange}
                          className="h-4 w-4 border-gray-300 text-accent focus:ring-2 focus:ring-accent"
                        />
                        <label
                          htmlFor={g.value}
                          className="ml-2 flex w-full items-center py-3 text-sm font-medium"
                        >
                          {g.title}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
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
