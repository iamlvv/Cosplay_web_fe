import BakeryCategoryLoader from '@/components/ui/loaders/bakery-categories-loader';
import NotFound from '@/components/ui/not-found';
import { useCategories } from '@/hooks/category';
import { productPlaceholder } from '@/lib/placeholders';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowNextIcon } from '../icons/arrow-next';
import { ArrowPrevIcon } from '../icons/arrow-prev';
import ErrorMessage from '../ui/error-message';
import Link from '../ui/link';

interface CategoryItemProps {
  item: any;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden text-center">
      <Link href={`/search/?category=${item.slug}`}>
        <div className="relative px-11">
          {productPlaceholder && (
            <Image
              src={item?.image! ?? productPlaceholder}
              alt={item?.name!}
              width={180}
              height={180}
              className="z-10 rounded-sm"
            />
          )}
          {/* <div className="absolute bottom-0 right-0 h-1/2 w-full rounded-lg bg-slate-100"></div> */}
        </div>
      </Link>
      <span className="mt-2 block text-center text-base font-semibold text-heading transition-colors group-hover:text-orange-500">
        {item.name}
      </span>
    </div>
  );
};

const PreknowCategories: React.FC<{ variables: any }> = ({ variables }) => {
  const { t } = useTranslation('common');
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const {
    categories: items,
    isLoading: loading,
    error,
  } = useCategories(variables);

  const notFound = !Boolean(items.length);

  if (error) return <ErrorMessage message={error.message} />;

  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    540: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    820: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  };

  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="mt-8 flex h-52 w-full justify-center px-2">
          <BakeryCategoryLoader />
        </div>
      </div>
    );
  }
  return (
    <div className="relative flex w-full flex-col bg-white py-5 px-7 pb-[40px] xl:px-16 xl:pb-[54px] 3xl:pb-[60px]">
      <div className="mb-7 flex items-center justify-between border-b pb-4">
        <div
          ref={(node) => setPrevEl(node)}
          className="banner-slider-prev flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light text-heading shadow-300 outline-none transition-colors hover:text-orange-500 focus:outline-none"
        >
          <span className="sr-only">{t('text-previous')}</span>
          <ArrowPrevIcon />
        </div>
        <h3 className="text-2xl font-semibold md:text-4xl">Categories</h3>
        <div
          ref={(node) => setNextEl(node)}
          className="banner-slider-next flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light text-heading shadow-300 outline-none transition-colors hover:text-orange-500 focus:outline-none"
        >
          <span className="sr-only">{t('text-next')}</span>
          <ArrowNextIcon />
        </div>
      </div>
      {!notFound ? (
        <div>
          <Swiper
            id="category-card-menu"
            modules={[Navigation]}
            loop
            navigation={{
              prevEl,
              nextEl,
              disabledClass: 'swiper-button-disabled',
              hiddenClass: 'swiper-button-hidden',
            }}
            breakpoints={breakpoints}
          >
            {items?.map((category: any, idx: number) => (
              <SwiperSlide key={idx}>
                <CategoryItem item={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="min-h-full">
          <NotFound text="text-no-category" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default PreknowCategories;
