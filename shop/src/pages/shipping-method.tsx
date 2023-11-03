import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ShippingMethodPage() {
  return (
    <>
      <Seo title="Privacy" url="privacy" />
      <section className="mx-auto mb-10 w-full max-w-7xl rounded bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <h1 className="mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl">
          Phương thức vận chuyển
        </h1>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Hiện tại PreKnow có các hình thức giao hàng như sau:
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Sự chấp thuận
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Bằng việc trao cho chúng tôi thông tin cá nhân của bạn, PreKnow cam
          kết rằng thông tin cá nhân của bạn sẽ được thu thập, sử dụng như được
          nêu trong Chính sách này. Nếu bạn không đồng ý với Chính sách này, bạn
          có thể dừng cung cấp cho chúng tôi bất cứ thông tin cá nhân nào
          và/hoặc sử dụng các quyền như được nêu tại Mục 7 dưới đây. Chúng tôi
          bảo lưu quyền sửa đổi, bổ sung nhằm hoàn thiện đối với Chính Sách này
          vào bất kỳ thời điểm nào. Và với mọi thay đổi về Chính sách bảo mật
          của mình, chúng tôi sẽ thông báo đến khách hàng thông qua các nền tảng
          thông tin chính thức.
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Giao hàng tiết kiệm
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Áp dụng cho tất cả các tỉnh thành trên Việt Nam với thời gian giao
          hàng từ 2 - 6 ngày
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Giao hàng nhanh
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Áp dụng cho tất cả các tỉnh thành trên Việt Nam với thời gian giao
          hàng từ 1 - 4 ngày
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Hoả tốc
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Chỉ áp dụng cho khu vực thành phố Hồ Chí Minh và Hà Nội với thời gian
          giao hàng từ 2 - 10 tiếng
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Bản Cập nhật ngày 10/12/2022
        </h2>
        <p className="px-0.5 text-sm italic text-body-dark md:text-base 2xl:text-lg">
          Phiên bản này có hiệu lực vào ngày 19/11/2022.
        </p>
      </section>
    </>
  );
}

ShippingMethodPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'policy'])),
    },
  };
};
