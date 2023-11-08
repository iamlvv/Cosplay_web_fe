import Link from '@/components/ui/link';
import { siteSettings } from '@/config/site';
import { useTranslation } from 'next-i18next';
import PreknowAddressIcon from '../icons/preknow-address';
import PreknowFooterLogo from '../icons/preknow-footer-logo';
import PreknowLogo from '../icons/preknow-logo';
import PreknowMailIcon from '../icons/preknow-mail';
import PreknowPhoneIcon from '../icons/preknow-phone';

const PreknowFooter = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <div className="flex w-full flex-col border-gray-800 bg-white px-5 pb-14 pt-10 md:px-10 lg:px-[50px] xl:px-16">
        {/* Top */}
        <div className="mb-10 flex flex-row justify-center gap-x-32">
          {siteSettings.footer.menus.map((menu, idx) => (
            <div className="flex flex-col" key={`${menu.title}-${idx}`}>
              <h3 className="mt-3 mb-4 text-xl font-semibold text-accent lg:mb-7">
                {menu.title}
              </h3>

              <ul className="space-y-3">
                {menu.links.map((link, index) => (
                  <li key={`${link.href}-${index}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-heading transition-colors hover:text-orange-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle */}
        <div className="flex flex-col items-center">
          <div className="flexitems-start mb-[2px]">
            <PreknowLogo />
          </div>
          <p className="text-xl">Every costume. Every occasion.</p>
        </div>
      </div>
      {/* Bottom */}
      <div className="mt-8 flex w-full flex-col items-center justify-center border-t border-gray-200 bg-[#324552] px-2 pt-12 pb-12 text-light lg:mt-0 lg:flex-row lg:justify-between lg:border-t-0">
        <div className="relative flex">
          {/* <div className="absolute -left-11 top-0 h-[44px] -rotate-90">
            &copy; {t('text-copyright')} {new Date().getFullYear()}
          </div> */}

          <PreknowFooterLogo className="ml-11 h-full" />
        </div>

        <address>
          <PreknowMailIcon className="mr-1 inline" />
          {siteSettings.footer.email}
        </address>

        <address>
          <PreknowPhoneIcon className="mr-1 inline" />
          {siteSettings.footer.phone}
        </address>

        <address>
          <PreknowAddressIcon className="mr-1 inline" />
          {siteSettings.footer.address}
        </address>
      </div>
    </>
  );
};

export default PreknowFooter;
