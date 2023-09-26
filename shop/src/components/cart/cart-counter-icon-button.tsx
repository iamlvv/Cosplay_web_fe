import PreKnowCartIcon from '@/components/icons/preknow-cart';
import { drawerAtom } from '@/store/drawer-atom';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';

const CartCounterIconButton = () => {
  const { totalUniqueItems } = useCart();
  const [_, setDisplayCart] = useAtom(drawerAtom);
  function handleCartSidebar() {
    // setDisplayCart({ display: true, view: 'cart' });
  }
  return (
    <button
      className="product-cart relative hidden lg:flex"
      onClick={handleCartSidebar}
    >
      <PreKnowCartIcon className="h-5 w-5" />
      {totalUniqueItems > 0 && (
        <span className="absolute -top-1/2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent text-[10px] text-light ltr:-right-1/2 rtl:-left-1/2">
          {totalUniqueItems}
        </span>
      )}
    </button>
  );
};

export default CartCounterIconButton;
