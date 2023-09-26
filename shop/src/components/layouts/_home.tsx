import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useAtom } from 'jotai';
import Header from './header';
import HeaderMinimal from './header-minimal';
import MobileNavigation from './mobile-navigation';
import Footer from './footer';
import { SearchIcon } from '@/components/icons/search-icon';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import PreknowHeader from './preknow-header';
import PreknowFooter from './preknow-footer';

export default function HomeLayout({
  children,
  layout,
}: React.PropsWithChildren<{ layout: string }>) {
  const { t } = useTranslation('common');
  const [, setDisplayMobileHeaderSearch] = useAtom(
    displayMobileHeaderSearchAtom
  );
  const isPreknow = true;

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
      {['minimal', 'compact'].includes(layout) ? (
        <HeaderMinimal layout={layout} />
      ) : (
        <Header layout={layout} />
      )}
      <div className="min-h-screen">{children}</div>
      {['compact'].includes(layout) && <Footer />}
      <MobileNavigation>
        <motion.button
          whileTap={{ scale: 0.88 }}
          onClick={() => setDisplayMobileHeaderSearch((prev) => !prev)}
          className="flex h-full items-center justify-center p-2 focus:text-accent focus:outline-none"
        >
          <span className="sr-only">{t('text-search')}</span>
          <SearchIcon width="17.05" height="18" />
        </motion.button>
      </MobileNavigation>
    </div>
  );
}
