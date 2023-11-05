import { CheckAvailabilityAction } from '@/components/checkout/check-availability-action';
import EmptyCartIcon from '@/components/icons/empty-cart';
import { Routes } from '@/config/routes';
import usePrice, { formatPriceVND } from '@/lib/use-price';
import { deliveryMethodList } from '@/pages/checkout';
import { deliveryMethodAtom } from '@/store/checkout';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';
import Link from 'next/link';
import ItemCard from '../item/item-card';
import { ItemInfoRow } from '../item/item-info-row';

const UnverifiedItemList = ({ hideTitle = false }: { hideTitle?: boolean }) => {
  const [deliveryMethod] = useAtom(deliveryMethodAtom);
  const { items, total, isEmpty } = useCart();
  const { price: subtotal } = usePrice(
    items && {
      amount: total,
    }
  );

  const calculateDeliveryPrice = () => {
    const deliveryItem = deliveryMethodList.find(
      (item) => item.value === deliveryMethod
    );

    if (!deliveryItem) return 0;

    return deliveryItem.price;
  };

  return (
    <>
      <div className="w-full rounded bg-light p-4 shadow">
        {!hideTitle && (
          <div className="mb-5 flex justify-between">
            <h2 className="text-xl font-semibold text-slate-600">Đơn hàng</h2>
            <Link href={Routes.home}>
              <a className="text-accent">Thay đổi</a>
            </Link>
          </div>
        )}
        <div className="flex flex-col border-b border-border-200 py-3">
          {isEmpty ? (
            <div className="mb-4 flex h-full flex-col items-center justify-center">
              <EmptyCartIcon width={140} height={176} />
              <h4 className="mt-6 text-base font-semibold">
                Không tìm thấy sản phẩm
              </h4>
            </div>
          ) : (
            items?.map((item) => <ItemCard item={item} key={item.id} />)
          )}
        </div>
        <div className="mt-4 space-y-2 border-b border-border-200 py-3">
          <ItemInfoRow title="Tạm tính" value={subtotal} />
          <ItemInfoRow
            title="Phí vận chuyển"
            value={formatPriceVND(calculateDeliveryPrice())}
          />
        </div>
        <div className="flex justify-between py-5 text-base text-body">
          <span>Tổng tiền</span>
          <div className="flex flex-col justify-end">
            <p className="text-right text-2xl text-red-600">
              {formatPriceVND(total + calculateDeliveryPrice())}
            </p>
            <p className="text-xs">(Đã bao gồm VAT nếu có)</p>
          </div>
        </div>
      </div>
      <CheckAvailabilityAction>Đặt hàng</CheckAvailabilityAction>
    </>
  );
};
export default UnverifiedItemList;
