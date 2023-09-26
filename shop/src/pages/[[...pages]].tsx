import HomeLayout from '@/components/layouts/_home';
import Seo from '@/components/seo/seo';
import { getStaticPaths, getStaticProps } from '@/framework/home-pages.ssr';
import type { NextPageWithLayout } from '@/types';
import type { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

export { getStaticPaths, getStaticProps };

const CartCounterButton = dynamic(
  () => import('@/components/cart/cart-counter-button'),
  { ssr: false }
);
const Layout = dynamic(() => import('@/components/layouts/preknow'));

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ variables }) => {
  const { query } = useRouter();

  useEffect(() => {
    if (query.text || query.category) {
      scroller.scrollTo('grid', {
        smooth: true,
        offset: -110,
      });
    }
  }, [query.text, query.category]);

  return (
    <>
      <Seo title="Home" url="/" images={undefined} />
      <Layout variables={variables} locale={undefined} layout={''} />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return (
    <HomeLayout layout={page.props.layout}>
      {page as React.ReactNode}
    </HomeLayout>
  );
};

export default Home;
