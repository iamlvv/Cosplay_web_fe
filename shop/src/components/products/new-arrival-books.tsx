import { Element } from 'react-scroll';
import { ArrowNext } from '../icons';
import ProductGridHome from './grids/home';

interface Props {
  variables: any;
}

export default function NewArrivalBooksGrid({ variables }: Props) {
  return (
    <div className="mt-16 px-4 pb-8 lg:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-normal text-heading lg:text-4xl xl:text-5xl">
          Hàng mới
        </h2>
        <div className="flex">
          <span className="mr-2">See More</span> <ArrowNext />
        </div>
      </div>
      <Element name="grid" className="flex">
        <ProductGridHome
          variables={variables.products}
          gridClassName="gap-10"
        />
      </Element>
    </div>
  );
}
