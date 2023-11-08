import { useRouter } from 'next/router';
import React, { useMemo } from 'react';

type Props = {};

const styles = {
  item: {
    width: '150px',
    fontSize: '20px',
  },
};
const categories = [
  { name: 'Lễ hội', slug: 'le-hoi' },
  { name: 'Sự kiện', slug: 'su-kien' },
  { name: 'Hoá trang', slug: 'hoa-trang' },
  { name: 'Nghệ thuật', slug: 'nghe-thuat' },
];

const NavbarCategory = (props: Props) => {
  const [activeItem, setActiveItem] = React.useState('');

  const router = useRouter();
  // if change the category, delete the subcategory params
  React.useEffect(() => {
    if (router.query.category) {
      setActiveItem(router.query.category as string);
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          subcategory: undefined,
        },
      });
    }
  }, [router.query.category]);

  return (
    <div className="flex items-center justify-center bg-white py-5 font-bold">
      <div style={styles.item} className="py-5">
        Danh mục:
      </div>
      <div className="flex items-center gap-x-5">
        {categories.map((category) => (
          <div
            key={category.slug}
            style={styles.item}
            className={
              activeItem === category.slug
                ? 'select-none rounded-md border border-teal-600 bg-teal-600 py-2 text-center text-white'
                : 'cursor-pointer rounded-md border border-teal-600 py-2 text-center text-teal-600 transition ease-in-out hover:bg-teal-600 hover:text-white'
            }
            onClick={() => {
              setActiveItem(category.slug);
              // if activeitem is empty, direct to /search with no params
              if (!category.slug) {
                router.push({
                  pathname: router.pathname,
                  query: {},
                });
                return;
              }
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
