import ProductGridHome from '@/components/products/grids/home';
import SectionBlock from '@/components/ui/section-block';
import type { HomePageProps } from '@/types';
import dynamic from 'next/dynamic';
import PreknowPopularProductsGrid from '../products/preknow-popular-products';

const PreknowBanner = dynamic(
  () => import('@/components/banners/preknow-banner')
);

const PreknowCategories = dynamic(
  () => import('@/components/categories/preknow-category')
);

export default function PreknowLayout({ variables }: HomePageProps) {
  return (
    <>
      <PreknowBanner />
      <main className="mt-6 block w-full xl:overflow-hidden">
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
        <PreknowCategories variables={variables.categories} />
      </main>
    </>
  );
}
