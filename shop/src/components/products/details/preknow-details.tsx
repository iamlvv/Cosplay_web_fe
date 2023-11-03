/* eslint-disable react/no-unescaped-entities */
import PreKnowTagIcon from '@/components/icons/preknow-tag';
import PreknowRatingStar from '@/components/reviews/preknow-rating-star';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { isVariationSelected } from '@/lib/is-variation-selected';
import { productPlaceholder } from '@/lib/placeholders';
import usePrice from '@/lib/use-price';
import { Product } from '@/types/preknow';
import isEmpty from 'lodash/isEmpty';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Element } from 'react-scroll';
import { AddToCartAlt } from '../add-to-cart/preknow-add-to-cart-alt';
import { useAttributes } from './attributes.context';
import PreknowVariationGroups from './preknow-variation-groups';

function randomRating(numberOfReview: number) {
  if (numberOfReview === 0) return 0;

  let sum = 0;

  for (let i = 1; i <= numberOfReview; i++) {
    sum += Math.floor(Math.random() * 6);
  }

  return Math.round((sum / numberOfReview) * 100) / 100;
}

type Props = {
  product: Product;
  backBtn?: boolean;
};
const PreknowDetails: React.FC<Props> = ({ product }) => {
  const {
    _id,
    name,
    imageUrl,
    description,
    category,
    author,
    manufacturer,
    manufacture_at,
    dimension,
    numberOfPage,
    shop,
  } = product ?? {};

  const { t } = useTranslation('common');

  const { attributes } = useAttributes();

  const { price, basePrice, discount } = usePrice({
    amount: product?.price ? product?.price : product?.oldPrice,
    baseAmount: product?.oldPrice ?? 0,
  });

  const variations = product.variations;

  const isSelected = isVariationSelected(variations, attributes);

  const hasVariations = !isEmpty(variations);
  const numberOfReview = Math.floor(Math.random() * 101);

  return (
    <article className="mx-auto max-w-screen-xl rounded-lg px-5 py-16 xl:px-0">
      <div className="mb-6 flex flex-col rounded-md bg-light px-5 pb-14 pt-5 shadow lg:flex-row">
        <div className="lg:w-5/12">
          <div className="product-gallery flex h-full items-center justify-center bg-light py-3 md:py-10">
            <Image
              src={imageUrl ?? productPlaceholder}
              alt={`${name}`}
              width={450}
              height={450}
              className="ml-auto"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start lg:mt-0 lg:w-1/2 lg:pr-10 xl:pr-16">
          <div className="w-full">
            <div className="flex w-full items-start justify-between space-x-5 lg:space-x-8">
              <div className="flex flex-col items-start gap-y-1">
                {name && (
                  <h1 className="mb-5 text-2xl font-semibold tracking-tight text-heading lg:text-3xl xl:text-4xl">
                    {name}
                  </h1>
                )}
                {/* {author && (
                  <div className="flex items-center space-x-5">
                    <p className="flex items-center text-sm font-normal text-slate-400">
                      Tác giả:
                      <Link
                        href="/"
                        className="text-sm text-accent transition-colors hover:text-accent ltr:ml-2 rtl:mr-2"
                      >
                        {author}
                      </Link>
                    </p>
                  </div>
                )} */}
                <PreknowRatingStar
                  rating={randomRating(numberOfReview)}
                  numberOfReview={numberOfReview}
                />
              </div>
            </div>

            {/* Tag section */}
            {/* <div className="mt-4 flex">
              {category?.name && (
                <Link
                  href={category?.slug || '/'}
                  className="mr-3 rounded bg-gray-200 p-2 text-sm text-heading transition-colors hover:text-accent focus:bg-opacity-100 focus:outline-none"
                >
                  <>
                    <PreKnowTagIcon className="mr-1 inline" />
                    {category.name}
                  </>
                </Link>
              )}
              {attributes.bookCovers && (
                <Link
                  href="/"
                  className="mr-3 rounded bg-gray-200 p-2 text-sm text-heading transition-colors hover:text-accent focus:bg-opacity-100 focus:outline-none"
                >
                  <PreKnowTagIcon className="mr-1 inline" />
                  {attributes.bookCovers.name}
                </Link>
              )}
              {attributes.conditions && (
                <Link
                  href="/"
                  className="mr-3 rounded bg-gray-200 p-2 text-sm text-heading transition-colors hover:text-accent focus:bg-opacity-100 focus:outline-none"
                >
                  <PreKnowTagIcon className="mr-1 inline" />
                  {attributes.conditions.name}
                </Link>
              )}
            </div> */}

            {/* Price section */}
            <span className="mt-5 mb-7 inline-block items-center space-x-4 rounded-lg px-5 py-3 shadow">
              <ins className="text-2xl font-bold text-red-600 no-underline md:text-3xl">
                {price}
              </ins>
              {basePrice && (
                <del className="text-base font-normal text-muted md:text-base">
                  {basePrice}
                </del>
              )}

              {discount && (
                <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-semibold uppercase leading-6 text-red-600">
                  -{discount}
                </span>
              )}
            </span>

            {/* Variation section */}
            {hasVariations && (
              <PreknowVariationGroups
                variations={variations}
                variant="normal"
              />
            )}

            <div className="mt-4 flex flex-col items-center pb-5 md:mt-6 md:pb-8 lg:flex-row">
              <div className="mb-3 w-full lg:mb-0">
                <AddToCartAlt
                  data={product}
                  variant="bordered"
                  variation={attributes}
                  disabled={!isSelected}
                  counterClass="!h-10"
                  favouriteId={_id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Element
        name="details"
        className="mb-7 rounded-md bg-light px-5 pt-5 pb-14"
      >
        <div className="flex flex-wrap justify-between">
          <div className="w-full max-w-lg">
            <h2 className="mb-4 text-xl font-bold tracking-tight text-heading md:mb-6 lg:text-3xl">
              Thông tin chi tiết
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li>
                <span
                  style={{ maxWidth: '200px' }}
                  className="inline-block w-full text-body"
                >
                  Người bán
                </span>
                <span className="text-heading">
                  {shop?.name || 'IDK Bookstore'}
                </span>
              </li>
              <li>
                <span
                  style={{ maxWidth: '200px' }}
                  className="inline-block w-full text-body"
                >
                  Nhà xuất bản
                </span>
                <span className="text-heading">{manufacturer}</span>
              </li>
              <li>
                <span
                  style={{ maxWidth: '200px' }}
                  className="inline-block w-full text-body"
                >
                  Ngày xuất bản
                </span>
                <span className="text-heading">{manufacture_at}</span>
              </li>
              <li>
                <span
                  style={{ maxWidth: '200px' }}
                  className="inline-block w-full text-body"
                >
                  Kích thước
                </span>
                <span className="text-heading">{dimension}</span>
              </li>
              <li>
                <span
                  style={{ maxWidth: '200px' }}
                  className="inline-block w-full text-body"
                >
                  Số trang
                </span>
                <span className="text-heading">{numberOfPage}</span>
              </li>
            </ul>
          </div>
          <div className="m-12 flex w-full max-w-xs flex-col items-center rounded border py-6 px-4 shadow">
            <h2 className="mb-1 text-xl font-bold tracking-tight text-accent">
              {shop?.name || 'IDK Bookstore'}
            </h2>
            <p className="mb-4 text-center text-xs text-body-dark md:mb-6">
              {shop?.description ||
                'We offer a wide variety of books including fiction and non-fiction titles.'}
            </p>
            <button
              type="button"
              className="mb-4 w-full rounded border border-accent p-1 text-accent"
            >
              Visit Seller's Storefront
            </button>
            <button
              type="button"
              className="mb-4 w-full rounded border border-accent p-1 text-accent"
            >
              Ask Seller a Question
            </button>
            <button
              type="button"
              className="w-full rounded border border-accent p-1 text-accent"
            >
              List this Seller's book
            </button>
          </div>
        </div>
      </Element> */}

      <Element
        name="descriptions"
        className="rounded-md bg-light px-5 pt-5 pb-14"
      >
        <h2 className="mb-4 text-xl font-bold tracking-tight text-heading md:mb-6 lg:text-3xl">
          Mô tả sản phẩm
        </h2>
        <p className="text-sm leading-relaxed text-body">{description}</p>

        <div className="mt-7 flex flex-col space-y-3">
          {name && (
            <p className="text-sm text-body">
              <span className="font-semibold text-heading ltr:pr-1 rtl:pl-1">
                {t('text-title')} :
              </span>
              {name}
            </p>
          )}
          {author && (
            <p className="flex items-center text-sm text-body">
              <span className="order-1 font-semibold text-heading ltr:pr-1 rtl:pl-1">
                {t('text-author')} :
              </span>
              <Link
                href={Routes.author(author)}
                className="order-2 hover:text-accent"
              >
                {author}
              </Link>
            </p>
          )}
          {manufacturer && (
            <p className="flex items-center text-sm text-body">
              <span className="order-1 font-semibold text-heading ltr:pr-1 rtl:pl-1">
                {t('text-publisher')} :
              </span>
              <Link
                href={Routes.manufacturer(manufacturer)}
                className="order-2 hover:text-accent"
              >
                {manufacturer}
              </Link>
            </p>
          )}
        </div>
      </Element>
    </article>
  );
};

export default PreknowDetails;
