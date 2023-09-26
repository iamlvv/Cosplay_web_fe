import Button from '@/components/ui/button';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useTranslation } from 'next-i18next';

export default function JoinButton() {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();
  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }
  return (
    <Button className="!border !border-accent bg-transparent hover:bg-accent text-sm font-semibold !text-accent hover:!text-light transition duration-300 ease-in-out focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700" size="small" onClick={handleJoin}>
      {t('join-button')}
    </Button>
  );
}
