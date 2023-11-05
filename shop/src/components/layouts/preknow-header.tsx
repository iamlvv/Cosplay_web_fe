import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { authorizationAtom } from '@/store/authorization-atom';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import cn from 'classnames';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PreknowLogo from '../icons/preknow-logo';
import { useModalAction } from '../ui/modal/modal.context';
import Search from '../ui/search/search';
import StaticMenu from './menu/static-menu';
import SignupButton from './signup-button';

const CartCounterIconButton = dynamic(
  () => import('@/components/cart/cart-counter-icon-button'),
  { ssr: false }
);
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const PreknowHeader = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const { openModal } = useModalAction();

  const handleCartClick = () => {
    if (!isAuthorize) {
      openModal('LOGIN_VIEW');
      return;
    }

    router.push(Routes.cart);
  };

  return (
    <header className={cn('site-header-with-search h-14 md:h-16 lg:h-22')}>
      <div
        className={cn(
          'fixed z-50 flex h-14 w-full items-center justify-between border-b border-border-200 bg-light px-4 py-5  shadow-sm transition-transform duration-300 md:h-16 lg:h-22 ltr:lg:pl-12 ltr:lg:pr-8 rtl:lg:pr-12 rtl:lg:pl-8',
          {
            'px-5 lg:!px-12 xl:px-16': true,
          }
        )}
      >
        <div className="flex w-full items-center lg:w-auto">
          <Link href="/">
            <PreknowLogo className="mx-auto lg:mx-0" />
          </Link>
        </div>

        {displayMobileHeaderSearch && (
          <div className="absolute top-0 block h-full w-full bg-light px-5 pt-1.5 ltr:left-0 rtl:right-0 md:pt-2 lg:hidden">
            <Search
              label={t('text-search-label')}
              variant="minimal"
              isGlobalSearch={true}
            />
          </div>
        )}

        <div className="mx-auto hidden w-full px-8 xl:flex xl:w-6/12 xl:px-10 xl:rtl:w-4/12 2xl:rtl:w-5/12">
          <Search
            label={t('text-search-label')}
            variant="minimal"
            isGlobalSearch={true}
          />
        </div>

        <div className="hidden shrink-0 items-center space-x-9 rtl:space-x-reverse lg:flex">
          <ul className="hidden shrink-0 items-center space-x-7 ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto rtl:space-x-reverse lg:flex 2xl:space-x-10">
            <li>
              <p
                onClick={handleCartClick}
                className="flex cursor-pointer items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
              >
                <CartCounterIconButton />
                <span className="ml-2">Giỏ hàng</span>
              </p>
            </li>
            <StaticMenu />
            <li className="hidden lg:inline-block xl:hidden">
              <Link
                href={`${router.asPath}search`}
                className="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
              >
                {t('text-search')}
              </Link>
            </li>
          </ul>
          {/* <CartCounterIconButton /> */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* <a
              href="/"
              className="inline-flex h-9 shrink-0 items-center justify-center rounded border border-accent px-3 py-0 text-sm font-semibold leading-none text-accent outline-none transition duration-300 ease-in-out hover:bg-accent hover:text-light focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700"
            >
              {t('text-become-seller')}
            </a> */}
            {isAuthorize ? null : <SignupButton />}
            {isAuthorize ? <AuthorizedMenu /> : <JoinButton />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PreknowHeader;
