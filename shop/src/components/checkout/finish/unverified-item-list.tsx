import EmptyCartIcon from '@/components/icons/empty-cart';
import Button from '@/components/ui/button';
import { Routes } from '@/config/routes';
import usePrice, { formatPriceVND } from '@/lib/use-price';
import { deliveryMethodList } from '@/pages/checkout';
import { deliveryMethodAtom, orderIdAtom } from '@/store/checkout';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import ItemCard from '../item/item-card';
import { ItemInfoRow } from '../item/item-info-row';

const UnverifiedItemList = ({ hideTitle = false }: { hideTitle?: boolean }) => {
  const router = useRouter();
  const { items, total, isEmpty, resetCart } = useCart();
  const [_, setOrderId] = useAtom(orderIdAtom);

  const { price: subtotal } = usePrice(
    items && {
      amount: total,
    }
  );

  const [deliveryMethod] = useAtom(deliveryMethodAtom);

  const calculateDeliveryPrice = () => {
    const deliveryItem = deliveryMethodList.find(
      (item) => item.value === deliveryMethod
    );

    if (!deliveryItem) return 0;

    return deliveryItem.price;
  };

  const handleContinue = () => {
    router.push(Routes.home);
    setOrderId('');
    resetCart();
  };

  return (
    <>
      <div className="w-full rounded bg-light p-4 shadow">
        {!hideTitle && (
          <div className="mb-5 flex justify-between">
            <h2 className="text-xl font-semibold text-slate-600">Đơn hàng</h2>
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
      <Button
        className="mt-6 w-full !border !border-accent bg-transparent text-sm font-semibold !text-accent transition duration-300 ease-in-out hover:bg-accent hover:!text-light focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700"
        size="small"
        onClick={handleContinue}
      >
        Tiếp tục mua hàng
      </Button>
    </>
  );
};
export default UnverifiedItemList;
