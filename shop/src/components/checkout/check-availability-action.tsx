import Button from '@/components/ui/button';
import { useCreateOrder } from '@/hooks/order';
import { deliveryMethodList } from '@/pages/checkout';
import { deliveryMethodAtom, paymentGatewayAtom } from '@/store/checkout';
import { useCart } from '@/store/quick-cart/cart.context';
import classNames from 'classnames';
import { useAtom } from 'jotai';

export const CheckAvailabilityAction: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = (props) => {
  //   const [billing_address] = useAtom(billingAddressAtom);
  //   const [shipping_address] = useAtom(shippingAddressAtom);
  const [paymentMethod] = useAtom(paymentGatewayAtom);
  const [deliveryMethod] = useAtom(deliveryMethodAtom);

  const calculateDeliveryPrice = () => {
    const deliveryItem = deliveryMethodList.find(
      (item) => item.value === deliveryMethod
    );

    if (!deliveryItem) return 0;

    return deliveryItem.price;
  };

  const { items, total, isEmpty } = useCart();

  // const { mutate: verifyCheckout, isLoading: loading }: any = useVerifyOrder();

  const { createOrder, isLoading: loading } = useCreateOrder();

  function handleVerifyCheckout() {
    // verifyCheckout({
    //   amount: total,
    //   products: items?.map((item) => formatOrderedProduct(item)),
    //   billing_address: {
    //     ...(billing_address?.address &&
    //       omit(billing_address.address, ['__typename'])),
    //   },
    //   shipping_address: {
    //     ...(shipping_address?.address &&
    //       omit(shipping_address.address, ['__typename'])),
    //   },
    // });
    createOrder({
      paymentMethod,
      items: items,
      amount: total + calculateDeliveryPrice(),
    });
  }

  return (
    <>
      <Button
        loading={loading}
        className={classNames('mt-5 w-full', props.className)}
        onClick={handleVerifyCheckout}
        disabled={isEmpty}
        {...props}
      />
    </>
  );
};
