import ProductGridHome from '@/components/products/grids/home';
import SectionBlock from '@/components/ui/section-block';
import type { HomePageProps } from '@/types';
import dynamic from 'next/dynamic';
import PreknowPopularProductsGrid from '../products/preknow-popular-products';
import { useRef } from 'react';
import Button from '../ui/button';
import { ArrowNext } from '../icons';
import { Navigation, Swiper, SwiperSlide } from '@/components/ui/slider';
import { Image } from '@/components/ui/image';
import bannerImage from '@/assets/costume/banner.png';
import { ArrowDownIcon } from '../icons/arrow-down';
import { useRouter } from 'next/router';

// const PreknowBanner = dynamic(
//   () => import('@/components/banners/preknow-banner')
// );

const PreknowCategories = dynamic(
  () => import('@/components/categories/preknow-category')
);

export default function PreknowLayout({ variables }: HomePageProps) {
  const router = useRouter();
  return (
    <>
      <div className="">
        {/* <PreknowBanner /> */}
        <div className="relative hidden lg:block">
          <div className="-z-1 overflow-hidden">
            <div className="relative">
              <Swiper
                // id="banner"
                loop={true}
                modules={[Navigation]}
                resizeObserver={true}
                allowTouchMove={false}
                slidesPerView={1}
              >
                <SwiperSlide>
                  <div
                    className="relative h-[536px] w-full"
                    style={{
                      boxShadow: '0px 18px 36px rgba(166, 175, 186, 0.15)',
                      backgroundColor: '#F8E0E0',
                    }}
                  >
                    <Image
                      className="!w-full"
                      src={bannerImage}
                      alt="preknow-banner"
                    />
                    <div className="absolute inset-0 mt-8 flex w-full flex-col items-start justify-center p-5 text-center md:px-20 lg:space-y-10">
                      <h1 className="text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl">
                        Every Costume
                      </h1>
                      <h1 className="!mt-1 text-2xl font-bold tracking-tight text-accent lg:text-4xl xl:text-5xl">
                        Every Occasion.
                      </h1>
                      <p className="max-w-3xl text-left text-sm text-heading lg:text-base xl:text-lg">
                        At{' '}
                        <span style={{ color: '#F68383', fontWeight: 'bold' }}>
                          Costume
                        </span>
                        <span style={{ color: '#21717A', fontWeight: 'bold' }}>
                          Haven
                        </span>
                        , we&apos;re your go-to for custom costumes designed to
                        match your unique vision. Whether you&apos;re a
                        cosplayer, party enthusiast, or event-goer, we turn your
                        ideas into costume reality. Explore a world of limitless
                        imagination, where we create your perfect custom
                        costume.
                      </p>
                      <Button
                        className="col-span-2"
                        onClick={() => router.push('/search')}
                      >
                        <span className="mr-3">Explore</span> <ArrowNext />
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <main className="block w-full xl:overflow-hidden">
        <div className="">
          <PreknowCategories variables={variables.categories} />
        </div>
        <div className="pt-6">
          <PreknowPopularProductsGrid variables={variables.popularProducts} />
          <SectionBlock title="Hàng mới">
            <ProductGridHome
              column="five"
              variables={{
                ...variables.products,
                sortedBy: 'DESC',
                orderBy: 'created_at',
              }}
            />
          </SectionBlock>
        </div>
      </main>
    </>
  );
}
