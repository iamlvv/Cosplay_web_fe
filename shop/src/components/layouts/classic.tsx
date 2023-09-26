import Banner from '@/components/banners/banner';
import type { HomePageProps } from '@/types';
import Categories from '../categories/categories';
import NewArrivalBooksGrid from '../products/new-arrival-books';
import PopularBooksGrid from '../products/popular-books';
import FilterBar from './filter-bar';

export default function ClassicLayout({ variables }: HomePageProps) {
  return (
    <>
      <Banner layout="classic" variables={variables.types} />
      {/* <PromotionSliders variables={variables.types} /> */}
      {/* <FilterBar variables={variables.categories} /> */}
      {/* Popular books section */}
      <PopularBooksGrid variables={variables.popularProducts} />
      {/* New arrival books section */}
      <NewArrivalBooksGrid variables={variables} />
      {/* <Categories layout="classic" variables={variables.categories} /> */}
      <FilterBar variables={variables.categories} />
    </>
  );
}
