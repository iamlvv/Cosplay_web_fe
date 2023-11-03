import LanguageSwitcher from '@/components/ui/language-switcher';
import Logo from '@/components/ui/logo';
import { useSettings } from '@/framework/settings';
import { useHeaderSearch } from '@/layouts/headers/header-search-atom';
import { useIsHomePage } from '@/lib/use-is-homepage';
import { authorizationAtom } from '@/store/authorization-atom';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import cn from 'classnames';
import { useAtom } from 'jotai';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useEffect, useMemo } from 'react';
import StaticMenu from './menu/static-menu';
import PreknowLogo from '../icons/preknow-logo';
import Link from '../ui/link';

const Search = dynamic(() => import('@/components/ui/search/search'));
const AuthorizedMenu = dynamic(() => import('./menu/authorized-menu'), {
  ssr: false,
});
const JoinButton = dynamic(() => import('./menu/join-button'), { ssr: false });

const Header = ({ layout }: { layout?: string }) => {
  const { t } = useTranslation('common');
  const { show, hideHeaderSearch } = useHeaderSearch();
  const [displayMobileHeaderSearch] = useAtom(displayMobileHeaderSearchAtom);
  const [isAuthorize] = useAtom(authorizationAtom);
  const isHomePage = useIsHomePage();

  useEffect(() => {
    if (!isHomePage) {
      hideHeaderSearch();
    }
  }, [isHomePage]);

  const isFlattenHeader = useMemo(
    () => !show && isHomePage && layout !== 'modern',
    [show, isHomePage, layout]
  );
  return (
    <header
      className={cn('site-header-with-search h-14 md:h-16 lg:h-22', {
        'lg:!h-auto': isFlattenHeader,
      })}
    >
      <div
        className={cn(
          'fixed z-50 flex h-14 w-full transform-gpu items-center justify-between border-b border-border-200 bg-light px-4 py-5 shadow-sm transition-transform duration-300 md:h-16 lg:h-22 lg:px-8',
          {
            'lg:absolute lg:border-0 lg:bg-transparent lg:shadow-none':
              isFlattenHeader,
          }
        )}
      >
        <div className="flex w-full items-center lg:w-auto">
          <Link href="/">
            <PreknowLogo className="mx-auto lg:mx-0" />
          </Link>
          {/* <div className="hidden ltr:ml-10 ltr:mr-auto rtl:mr-10 rtl:ml-auto xl:block">
            <GroupsDropdownMenu />
          </div> */}
        </div>
        {isHomePage ? (
          <>
            {/* {(show || layout === 'modern') && (
              <div className="mx-auto hidden w-full overflow-hidden px-10 lg:block xl:w-11/12 2xl:w-10/12">
                <Search label={t('text-search-label')} variant="minimal" />
              </div>
            )} */}

            <div className="mx-auto hidden w-full overflow-hidden px-10 lg:block xl:w-11/12 2xl:w-10/12">
              <Search label={t('text-search-label')} />
            </div>

            {displayMobileHeaderSearch && (
              <div className="absolute top-0 block h-full w-full bg-light px-5 pt-1.5 ltr:left-0 rtl:right-0 md:pt-2 lg:hidden">
                <Search label={t('text-search-label')} variant="minimal" />
              </div>
            )}
          </>
        ) : null}
        <ul className="hidden shrink-0 items-center space-x-7 rtl:space-x-reverse lg:flex 2xl:space-x-10">
          <StaticMenu />
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* <a
              href={`${process.env.NEXT_PUBLIC_ADMIN_URL}/register`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 shrink-0 items-center justify-center rounded border border-accent px-3 py-0 text-sm font-semibold leading-none text-accent outline-none transition duration-300 ease-in-out hover:bg-accent hover:text-light focus:shadow focus:outline-none focus:ring-1 focus:ring-accent-700"
            >
              {t('text-become-seller')}
            </a> */}
            <li>{isAuthorize ? <AuthorizedMenu /> : <JoinButton />}</li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
