import { Image } from '@/components/ui/image';
import { Navigation, Swiper, SwiperSlide } from '@/components/ui/slider';
import { useHeaderSearch } from '@/layouts/headers/header-search-atom';
import { productPlaceholder } from '@/lib/placeholders';
import type { Banner } from '@/types';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { ArrowNext } from '../icons';
import Button from '../ui/button';
import bannerImage from '@/assets/costume/banner.png';

const PreknowBanner: React.FC = () => {
  const { showHeaderSearch, hideHeaderSearch } = useHeaderSearch();
  const intersectionRef = useRef(null);
  const router = useRouter();

  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });
  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      hideHeaderSearch();
      return;
    }
    if (intersection && !intersection.isIntersecting) {
      showHeaderSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersection]);

  const handleClick = () => {
    router.push('/search');
  };

  return (
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
                }}
              >
                <Image
                  className="!w-full"
                  src={bannerImage}
                  alt="preknow-banner"
                />
                <div className="absolute inset-0 mt-8 flex w-full flex-col items-start justify-center p-5 text-center md:px-20 lg:space-y-10">
                  <h1 className="text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl">
                    Every costume,
                  </h1>
                  <h1 className="!mt-1 text-2xl font-bold tracking-tight text-accent lg:text-4xl xl:text-5xl">
                    Every occasion.
                  </h1>
                  <p className="max-w-2xl text-left text-sm text-heading lg:text-base xl:text-lg">
                    At{' '}
                    <span style={{ color: '#F68383' }} className="font-bold">
                      Costume
                    </span>
                    <span style={{ color: '#21717A' }} className="font-bold">
                      Haven
                    </span>
                    , we&apos;re your go-to for custom costumes designed to
                    match your unique vision. Whether you&apos;re a cosplayer,
                    party enthusiast, or event-goer, we turn your ideas into
                    costume reality. Explore a world of limitless imagination,
                    where we create your perfect custom costume.
                  </p>
                  <Button className="col-span-2" onClick={handleClick}>
                    <span className="mr-3">Khám phá</span> <ArrowNext />
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PreknowBanner;
