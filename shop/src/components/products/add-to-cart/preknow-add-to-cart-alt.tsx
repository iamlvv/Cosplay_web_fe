import Button from '@/components/ui/button';
import Counter from '@/components/ui/counter';
import { cartAnimation } from '@/lib/cart-animation';
import { useCart } from '@/store/quick-cart/cart.context';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { HeartFillIcon } from '@/components/icons/heart-fill';
import { HeartOutlineIcon } from '@/components/icons/heart-outline';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useUser } from '@/framework/user';
import { useInWishlist, useToggleWishlist } from '@/framework/wishlist';
import classNames from 'classnames';
import { generateCartItem } from '@/store/quick-cart/preknow-generate-cart-item';

function FavoriteButton({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const { isAuthorized } = useUser();
  const { toggleWishlist, isLoading: adding } = useToggleWishlist(productId);
  const { inWishlist, isLoading: checking } = useInWishlist({
    enabled: isAuthorized,
    product_id: productId,
  });

  const { openModal } = useModalAction();
  function toggle() {
    if (!isAuthorized) {
      openModal('LOGIN_VIEW');
      return;
    }
    toggleWishlist({ product_id: productId });
  }
  const isLoading = adding || checking;
  if (isLoading) {
    return (
      <div
        className={classNames(
          'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300',
          className
        )}
      >
        <Spinner simple={true} className="flex h-5 w-5" />
      </div>
    );
  }
  return (
    <button
      type="button"
      className={classNames(
        'mt-0.5 flex h-10 shrink-0 items-center justify-center rounded-md border border-gray-300 px-3 font-semibold text-accent transition-colors',
        {
          '!border-accent': inWishlist,
        },
        className
      )}
      onClick={toggle}
    >
      {inWishlist ? (
        <HeartFillIcon className="mr-2 h-5 w-5" />
      ) : (
        <HeartOutlineIcon className="mr-2 h-5 w-5" />
      )}
      Favourite
    </button>
  );
}

interface Props {
  data: any;
  variant?:
    | 'helium'
    | 'neon'
    | 'argon'
    | 'oganesson'
    | 'single'
    | 'big'
    | 'bordered';
  counterVariant?:
    | 'helium'
    | 'neon'
    | 'argon'
    | 'oganesson'
    | 'single'
    | 'details'
    | 'bordered';
  counterClass?: string;
  variation?: any;
  disabled?: boolean;
  favouriteId?: string;
}

export const AddToCartAlt = ({
  data,
  variant = 'helium',
  counterVariant,
  counterClass,
  variation,
  disabled,
  favouriteId = '',
}: Props) => {
  const { t } = useTranslation('common');
  const { addItemToCart, isInStock, isInCart, items } = useCart();
  const item = generateCartItem(data, variation);

  const [quantity, setQuantity] = useState<number>(1);
  const increment = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
  };
  const handleAddClick = (
    e: React.MouseEvent<HTMLButtonElement | MouseEvent>
  ) => {
    e.stopPropagation();
    addItemToCart(item, quantity);
    setQuantity(1);
    if (!isInCart(item.id)) {
      cartAnimation(e);
    }
  };
  const decrement = (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) => {
    e.stopPropagation();
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };
  const outOfStock = isInCart(item?.id) && !isInStock(item.id);
  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <Counter
        value={quantity}
        onDecrement={decrement}
        onIncrement={increment}
        variant={counterVariant || variant}
        className={counterClass}
        disabled={outOfStock}
      />
      <Button
        className="!h-10 w-full max-w-sm !shrink"
        onClick={handleAddClick}
        disabled={disabled || outOfStock}
      >
        Thêm vào giỏ hàng
      </Button>
      <FavoriteButton productId={favouriteId} />
    </div>
  );
};
