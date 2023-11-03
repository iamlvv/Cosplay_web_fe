import Header from './header';
import MobileNavigation from './mobile-navigation';
import PreknowFooter from './preknow-footer';
import PreknowHeader from './preknow-header';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import { SearchIcon } from '../icons/search-icon';

export default function GeneralLayout({
  children,
  layout,
}: React.PropsWithChildren<{ layout?: string }>) {
  const isPreknow = true;
  const [, setDisplayMobileHeaderSearch] = useAtom(
    displayMobileHeaderSearchAtom
  );

  if (isPreknow)
    return (
      <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
        <PreknowHeader />
        <div className="min-h-screen">{children}</div>
        <PreknowFooter />
        <MobileNavigation>
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={() => setDisplayMobileHeaderSearch((prev) => !prev)}
            className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
          >
            <span className="sr-only">Tìm kiếm</span>
            <SearchIcon width="17.05" height="18" />
          </motion.button>
        </MobileNavigation>
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
      <Header layout={layout} />
      {children}
      <MobileNavigation />
    </div>
  );
}

export const getGeneralLayout = (page: React.ReactElement) => (
  <GeneralLayout layout={page.props.layout}>
    {page}
    <MobileNavigation />
  </GeneralLayout>
);
