import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

type Props = {};

const styles = {
  item: {
    width: '197px',
    fontSize: '20px',
  },
};
const categories = [
  { name: 'Festivals', slug: 'van-hoc' },
  { name: 'Events', slug: 'events' },
  { name: 'Cosplay', slug: 'cosplay' },
  { name: 'Art', slug: 'art' },
];

const NavbarCategory = (props: Props) => {
  const router = useRouter();
  const selectedValues = useMemo(
    () =>
      router.query.category ? (router.query.category as string).split(',') : [],
    [router.query.category]
  );

  return (
    <div className="flex items-center justify-center bg-white py-5 font-bold">
      <div style={styles.item} className="py-5">
        Categories:
      </div>
      <div className="flex items-center gap-x-5">
        {categories.map((category) => (
          <div
            key={category.slug}
            style={styles.item}
            className="rounded-md border border-teal-600 py-5 text-center text-teal-600 transition ease-in-out hover:cursor-pointer hover:bg-teal-600 hover:text-white"
            onClick={() => {
              router.push({
                pathname: router.pathname,
                query: {
                  ...router.query,
                  category: category.slug,
                },
              });
            }}
          >
            <h1>{category.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarCategory;
