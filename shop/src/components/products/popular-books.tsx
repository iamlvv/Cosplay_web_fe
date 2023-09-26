import ErrorMessage from '@/components/ui/error-message';
import NotFound from '@/components/ui/not-found';
import { usePopularProducts } from '@/framework/product';
import rangeMap from '@/lib/range-map';
import classNames from 'classnames';
import { ArrowNext } from '../icons';
import ProductLoader from '../ui/loaders/product-loader';
import ProductCard from './cards/card';

function SectionBlock({ children }: React.PropsWithChildren) {
  return (
    <div className="mt-9 px-4 pb-8 lg:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-normal text-heading lg:text-4xl xl:text-5xl">
          Tìm kiếm hàng đầu
        </h2>
        <div className="flex">
          <span className="mr-2">See All</span> <ArrowNext />
        </div>
      </div>
      {children}
    </div>
  );
}

interface Props {
  className?: string;
  limit?: number;
  variables: any;
}

export default function PopularBooksGrid({
  className,
  limit = 10,
  variables,
}: Props) {
  const { products, isLoading, error } = usePopularProducts(variables);

  if (error) return <ErrorMessage message={error.message} />;
  if (!isLoading && !products.length) {
    return (
      <SectionBlock>
        <NotFound text="text-not-found" className="mx-auto w-7/12" />
      </SectionBlock>
    );
  }

  return (
    <SectionBlock>
      <div className={classNames(className, 'w-full')}>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
          {isLoading && !products.length
            ? rangeMap(limit, (i) => (
                <ProductLoader key={i} uniqueKey={`product-${i}`} />
              ))
            : products.map((product: any) => (
                <ProductCard product={product} key={product?.id} />
              ))}
        </div>
      </div>
    </SectionBlock>
  );
}
