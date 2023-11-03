import PreKnowCartIcon from '@/components/icons/preknow-cart';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';

const headerLinks = [
  { href: Routes.help, label: 'nav-menu-faq' },
  { href: Routes.contactUs, label: 'nav-menu-contact' },
];

const StaticMenu = () => {
  const { t } = useTranslation('common');

  return (
    <>
      {headerLinks.map(({ href, label }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
          >
            {label === 'nav-menu-faq' ? 'FAQ' : 'Liên hệ'}
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
