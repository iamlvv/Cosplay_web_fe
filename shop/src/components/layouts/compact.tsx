import SectionBlock from '@/components/ui/section-block';
import FilterBar from './filter-bar';
import Categories from '@/components/categories/categories';
import CallToAction from '@/components/cta/call-to-action';
import GroupProducts from '@/components/products/group-products';
import PopularProductsGrid from '@/components/products/popular-products';
import TopAuthorsGrid from '@/components/author/top-authors-grid';
import Banner from '@/components/banners/banner';
import TopManufacturersGrid from '@/components/manufacturer/top-manufacturers-grid';
import { useTranslation } from 'next-i18next';
import type { HomePageProps } from '@/types';
import ProductGridHome from '@/components/products/grids/home';

export default function CompactLayout({ variables }: HomePageProps) {
  const { t } = useTranslation('common');
  return (
    <>
      <Banner layout="classic" variables={variables.types} />
      <main className="mt-6 block w-full xl:overflow-hidden">
        <PopularProductsGrid variables={variables.popularProducts} />
        <GroupProducts />
        <SectionBlock title={t('text-new-arrival')}>
          <ProductGridHome
            column="five"
            variables={{
              ...variables.products,
              sortedBy: 'DESC',
              orderBy: 'created_at',
            }}
          />
        </SectionBlock>
        <Categories layout="preknow" variables={variables.categories} />
        <TopAuthorsGrid />
        <TopManufacturersGrid />
        <CallToAction />
      </main>
    </>
  );
}
