import { useModalAction } from '@/components/ui/modal/modal.context';
import AddressCard from '@/components/address/address-card';
import { AddressHeader } from '@/components/address/address-header';
import { useTranslation } from 'next-i18next';
import { AddressType } from '@/framework/utils/constants';

interface AddressesProps {
  addresses?: any[] | undefined;
  address: string;
  label: string;
  className?: string;
  userId: string;
}

export const ProfileAddressGrid: React.FC<AddressesProps> = ({
  address,
  label,
  className,
  userId,
}) => {
  const { openModal } = useModalAction();
  const { t } = useTranslation('common');

  //TODO: no address found
  function onAdd() {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      address,
    });
  }
  return (
    <div className={className}>
      <AddressHeader
        onAdd={onAdd}
        count={false}
        label={label}
        isAdd={!address}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {!address ? (
          <span className="relative rounded border border-border-200 bg-gray-100 px-5 py-6 text-left text-base">
            {t('text-no-address')}
          </span>
        ) : (
          <AddressCard checked={false} address={address} userId={userId} />
        )}
      </div>
    </div>
  );
};
export default ProfileAddressGrid;
