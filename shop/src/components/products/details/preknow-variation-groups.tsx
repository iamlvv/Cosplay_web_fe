import Attribute from '@/components/ui/attribute';
import { useAttributes } from './attributes.context';
import Scrollbar from '@/components/ui/scrollbar';
interface Props {
  variations: any;
  variant?: 'normal' | 'outline';
}
const PreknowVariationGroups: React.FC<Props> = ({ variations, variant }) => {
  const { attributes, setAttributes } = useAttributes();

  const replaceHyphens = (str: string) => {
    switch (str) {
      case 'bookCovers':
        return 'Loại bìa';

      case 'conditions':
        return 'Tình trạng';

      default:
        return str.replace(/-/g, ' ');
    }
  };

  return (
    <>
      {Object.keys(variations).map((variationName, index) => (
        <div className="py-4 first:pt-0" key={index}>
          <span className="mb-2 inline-block min-w-[60px] whitespace-nowrap text-sm font-semibold capitalize leading-none text-heading">
            {replaceHyphens(variationName)}:
          </span>
          <div className="-mb-5 w-full overflow-hidden">
            <Scrollbar
              className="w-full pb-5"
              options={{
                scrollbars: {
                  autoHide: 'never',
                },
              }}
            >
              <div className="-mb-1.5 flex w-full space-x-3">
                {variations[variationName].map((attribute: any) => (
                  <Attribute
                    className="capitalize"
                    type={variationName}
                    color={attribute.meta ? attribute.meta : attribute?.name}
                    isActive={attributes[variationName]?._id === attribute._id}
                    value={attribute.name}
                    key={attribute._id}
                    variant={variant}
                    onClick={() =>
                      setAttributes((prev: any) => ({
                        ...prev,
                        [variationName]: {
                          name: attribute.name,
                          _id: attribute._id,
                        },
                      }))
                    }
                  />
                ))}
              </div>
            </Scrollbar>
          </div>
        </div>
      ))}
    </>
  );
};

export default PreknowVariationGroups;
