import Button from '@/components/ui/button';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { useTranslation } from 'next-i18next';

export default function SignupButton() {
  const { t } = useTranslation('common');
  const { openModal } = useModalAction();
  function handleRegister() {
    return openModal('REGISTER');
  }
  return (
    <Button
      className="!border !border-accent bg-transparent text-sm font-semibold !text-accent transition duration-300 ease-in-out hover:bg-accent hover:!text-light focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700"
      size="small"
      onClick={handleRegister}
    >
      {t('text-register')}
    </Button>
  );
}
