import CheckboxGroup from './checkbox-group';
import { useState, useEffect, useMemo } from 'react';
import Checkbox from '@/components/ui/forms/checkbox/checkbox';
import { useRouter } from 'next/router';
import Scrollbar from '@/components/ui/scrollbar';
import { useTranslation } from 'react-i18next';
import ErrorMessage from '@/components/ui/error-message';
import Spinner from '@/components/ui/loaders/spinner/spinner';
import { useCategories, useSubCategories } from '@/hooks/category';

interface Props {
  categories: any[];
  type?: any;
}

const CategoryFilterView = ({ categories, type }: Props) => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const { query } = router;

  const selectedValues = useMemo(() => {
    if (query.subcategory && type === 'Subcategories') {
      return query.subcategory.toString().split(',');
    }
    if (query.types && type === 'ClothingType') {
      return query.types.toString().split(',');
    }
    return [];
  }, [query]);

  const [state, setState] = useState<string[]>(() => selectedValues);
  useEffect(() => {
    setState(selectedValues);
  }, [selectedValues]);

  function handleChange(values: string[]) {
    // router.push({
    //   pathname: router.pathname,
    //   query: {
    //     ...router.query,
    //     category: values.join(','),
    //   },
    // });
    if (values.length === 0) {
      if (type === 'Subcategories') {
        router.push({
          pathname: router.pathname,
          query: {
            ...router.query,
            subcategory: undefined,
          },
        });
      } else {
        router.push({
          pathname: router.pathname,
          query: {
            ...router.query,
            types: undefined,
          },
        });
      }
    } else {
      // If users check subcategories, we need to add the param 'subcategory' to the url
      // If users check clothing types, we need to add the param 'types' to the url
      if (type === 'Subcategories') {
        router.push({
          pathname: router.pathname,
          query: {
            ...router.query,
            subcategory: values.join(','),
          },
        });
      } else {
        router.push({
          pathname: router.pathname,
          query: {
            ...router.query,
            types: values.join(','),
          },
        });
      }
    }
  }

  return (
    <div className="relative -mb-5 after:absolute after:bottom-0 after:flex after:h-6 after:w-full after:bg-gradient-to-t after:from-white ltr:after:left-0 rtl:after:right-0">
      <Scrollbar style={{ maxHeight: '400px' }} className="pb-6">
        <span className="sr-only">{t('text-categories')}</span>
        <div className="grid grid-cols-1 gap-4">
          <CheckboxGroup values={state} onChange={handleChange}>
            {categories.map((plan) => (
              <Checkbox
                key={plan.id}
                label={plan.name}
                name={plan.slug}
                value={plan.slug}
                theme="primary"
              />
            ))}
          </CheckboxGroup>
        </div>
      </Scrollbar>
    </div>
  );
};

const CategoryFilter: React.FC<{ type?: any }> = ({ type }) => {
  // const { categories, isLoading, error } = useCategories({
  //   limit: 1000,
  // });
  const [categories, setCategories] = useState([]);

  const router = useRouter();
  const { query } = router;

  const { isLoading, error } = useSubCategories({
    limit: 1000,
    query: query.category as string,
  });

  const getSubCategories = async (category: any) => {
    fetch(
      'http://localhost:5001/store/products/subcategoryof?category=' + category,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) =>
        res.json().then((data) => {
          setCategories(data);
        })
      )
      .catch((err) => console.log(err));
  };

  const getClothingType = async () => {
    fetch('http://localhost:5001/store/products/sharedSubcategories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) =>
        res.json().then((data) => {
          setCategories(data);
        })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (query.category && type === 'Subcategories') {
      getSubCategories(query.category);
    }
    if (query.category && type === 'ClothingType') {
      getClothingType();
    }
  }, [query]);

  if (error) return <ErrorMessage message={error.message} />;
  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center py-5">
        <Spinner className="h-6 w-6" simple={true} />
      </div>
    );
  return <CategoryFilterView categories={categories} type={type} />;
};

export default CategoryFilter;
