import Scrollbar from '@/components/ui/scrollbar';
import Select from '@/components/ui/select/select';
import { useIsRTL } from '@/lib/locals';
import { RadioGroup } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
interface Plan {
  id: number | string;
  key: string;
  label: string;
  value: string;
  orderBy: string;
}
const plans: Plan[] = [
  {
    id: '1',
    key: 'sorting',
    label: 'Hàng mới',
    value: 'created_at',
    orderBy: 'created_at',
  },
  {
    id: '2',
    key: 'sorting',
    label: 'Giá thấp đến cao',
    value: 'min_price',
    orderBy: 'min_price',
  },
  {
    id: '3',
    key: 'sorting',
    label: 'Giá cao đến thấp',
    value: 'max_price',
    orderBy: 'max_price',
  },
];

type Props = {
  variant?: 'radio' | 'dropdown';
};

const Sorting: React.FC<Props> = ({ variant = 'radio' }) => {
  const router = useRouter();
  const { isRTL } = useIsRTL();
  const [selected, setSelected] = useState(
    () =>
      plans.find((plan) => plan.orderBy === router.query.orderBy) ?? plans[0]
  );

  useEffect(() => {
    if (!router.query.orderBy) {
      setSelected(plans[0]);
    } else {
      setSelected(
        plans.find((plan) => plan.orderBy === router.query.orderBy) ?? plans[0]
      );
    }
  }, [router.query.orderBy]);

  function handleChange(values: Plan) {
    const { orderBy } = values;
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        orderBy,
      },
    });
    setSelected(values);
  }

  return (
    <>
      {variant === 'dropdown' && (
        <Select
          defaultValue={selected}
          isRtl={isRTL}
          options={plans}
          isSearchable={false}
          // @ts-ignore
          onChange={handleChange}
        />
      )}
      {variant === 'radio' && (
        <Scrollbar style={{ maxHeight: '400px' }}>
          <RadioGroup value={selected} onChange={handleChange}>
            <RadioGroup.Label className="sr-only">Sắp xếp</RadioGroup.Label>
            <div className="space-y-4">
              {plans.map((plan) => (
                <RadioGroup.Option key={plan.id} value={plan}>
                  {({ checked }) => (
                    <>
                      <div className="flex w-full cursor-pointer items-center">
                        <span
                          className={`h-[18px] w-[18px] rounded-full bg-white ltr:mr-3 rtl:ml-3 ${
                            checked
                              ? 'border-[5px] border-accent'
                              : 'border border-accent-300'
                          }`}
                        />
                        <RadioGroup.Label as="p" className="text-sm text-body">
                          {plan.label}
                        </RadioGroup.Label>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </Scrollbar>
      )}
    </>
  );
};

export default Sorting;
