import Link from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
import { useTranslation } from 'next-i18next';
import { Routes } from '@/config/routes';
import { productPlaceholder } from '@/lib/placeholders';

type PreKnowProps = {
  product: any;
  className?: string;
};

const PreKnow: React.FC<PreKnowProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  const { name, imageUrl, _id, author } = product ?? {};
  const { price, basePrice, discount } = usePrice({
    amount: product.price ? product.price : product.oldPrice!,
    baseAmount: product.oldPrice,
    currencyCode: 'VND',
  });

  return (
    <Link href={Routes.product(_id)}>
      <article
        className={cn(
          'product-card cart-type-krypton h-full cursor-pointer overflow-hidden rounded-xl border border-border-200 bg-light transition-shadow duration-200 hover:shadow-sm',
          className
        )}
      >
        <div className="relative flex h-48 w-auto items-center justify-center sm:h-64">
          <span className="sr-only">{t('text-product-image')}</span>
          <Image
            priority={true}
            src={imageUrl ?? productPlaceholder}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="product-image"
          />
          {discount && (
            <div className="absolute top-3 rounded-full bg-yellow-500 px-2 text-xs font-semibold leading-6 text-light ltr:right-3 rtl:left-3 md:top-4 md:px-2.5 ltr:md:right-4 rtl:md:left-4">
              {discount}
            </div>
          )}
        </div>
        {/* End of product image */}

        <header className="p-3 text-left md:p-6">
          <h3 className="mb-1 truncate text-sm font-semibold text-heading">
            {name}
          </h3>
          {/* <h2 className="mb-2 truncate text-xs font-semibold text-muted">
            by {author}
          </h2> */}
          {/* End of product title */}

          <div className="mt-2 flex items-center justify-between">
            <span className="text-xl font-semibold text-red-600">{price}</span>
            {basePrice && (
              <del className="text-xl text-muted ltr:ml-2 rtl:mr-2">
                {basePrice}
              </del>
            )}
          </div>
        </header>
      </article>
    </Link>
  );
};

export default PreKnow;
