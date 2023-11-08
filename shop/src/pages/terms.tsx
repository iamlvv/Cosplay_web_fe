import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function TermsPage() {
  return (
    <>
      <Seo title="Terms" url="terms" />
      <section className="mx-auto mb-10 w-full max-w-7xl rounded bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <h1 className="mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl">
          Điều khoản sử dụng
        </h1>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Cảm ơn quý khách đã lựa chọn mua sách cùng CostumeHaven. Sau khi truy
          cập vào website CostumeHaven để tham khảo, quý khách đã đồng ý tuân
          thủ các ràng buộc và quy định của chúng tôi. Vui lòng xem kỹ các quy
          định và hợp tác với chúng tôi để xây dựng một nền tảng mua bán sách
          ngày càng thân thiện và phục vụ tốt những yêu cầu của chính quý khách.
          Ngoài ra, nếu có bất cứ câu hỏi nào về những thỏa thuận trên đây, vui
          lòng email cho chúng tôi qua địa chỉ contact.CostumeHaven@gmail.com
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Tài khoản của khách hàng
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Khi sử dụng dịch vụ CostumeHaven, quý khách sẽ cung cấp cho chúng tôi
          thông tin về địa chỉ email, mật khẩu và họ tên để có được một tài
          khoản tại đây. Việc sử dụng và bảo mật thông tin tài khoản là trách
          nhiệm và quyền lợi của cả quý khách và chúng tôi. Ngoài ra, những
          thông tin khác trong tài khoản như tên tuổi, địa chỉ.... là những
          thông tin sẽ giúp CostumeHaven phục vụ quý khách tốt nhất. Trong
          trường hợp thông tin do quý khách cung cấp không đầy đủ hoặc sai dẫn
          đến việc không thể giao hàng cho quý khách, chúng tôi có quyền đình
          chỉ hoặc từ chối phục vụ, giao hàng mà không phải chịu bất cứ trách
          nhiệm nào đối với quý khách. Khi có những thay đổi về thông tin của
          quý khách, vui lòng cập nhật lại thông tin trong tài khoản tại
          CostumeHaven. Quý khách phải giữ kín mật khẩu và tài khoản, hoàn toàn
          chịu trách nhiệm đối với tất cả các hoạt động diễn ra thông qua việc
          sử dụng mật khẩu hoặc tài khoản của mình.
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Quyền lợi bảo mật thông tin của khách hàng
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Khi sử dụng dịch vụ tại CostumeHaven, quý khách được đảm bảo rằng
          những thông tin cung cấp cho chúng tôi sẽ chỉ được dùng để nâng cao
          chất lượng dịch vụ dành cho khách hàng của CostumeHaven và sẽ không
          được chuyển giao cho một bên thứ ba nào khác vì mục đích thương mại.
          Thông tin của quý khách tại CostumeHaven sẽ được chúng tôi bảo mật và
          chỉ trong trường hợp pháp luật yêu cầu, chúng tôi sẽ buộc phải cung
          cấp những thông tin này cho các cơ quan pháp luật.
        </p>

        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Trách nhiệm của khách hàng
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Quý khách tuyệt đối không được sử dụng bất kỳ công cụ, phương pháp nào
          để can thiệp, xâm nhập bất hợp pháp vào hệ thống hay làm thay đổi cấu
          trúc dữ liệu tại website CostumeHaven. Quý khách không được có những
          hành động can thiệp, xâm nhập dữ liệu của CostumeHaven cũng như hệ
          thống máy chủ của chúng tôi. Ngoài ra, xin vui lòng thông báo cho quản
          trị web của CostumeHaven ngay khi quý khách phát hiện ra lỗi hệ thống
          theo số điện thoại (+84) 917112245 hoặc email contact@costumehaven.com
        </p>
        <p className="my-4 px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Quý khách không được đưa ra những nhận xét, đánh giá có ý xúc phạm,
          quấy rối, làm phiền hoặc có bất cứ hành vi nào thiếu văn hóa đối với
          người khác. Không nêu ra những nhận xét có tính chính trị (tuyên
          truyền, chống phá, xuyên tạc chính quyền), kỳ thị tôn giáo, giới tính,
          sắc tộc... Tuyệt đối cấm mọi hành vi mạo nhận, cố ý tạo sự nhầm lẫn
          mình là một khách hàng khác hoặc là thành viên Ban Quản Trị
          CostumeHaven.
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Trách nhiệm và quyền lợi của CostumeHaven
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Trong trường hợp có những phát sinh ngoài ý muốn hoặc trách nhiệm của
          mình, CostumeHaven sẽ không chịu trách nhiệm về mọi tổn thất phát
          sinh. Các thỏa thuận và quy định trong Điều khoản sử dụng có thể thay
          đổi vào bất cứ lúc nào nhưng sẽ được CostumeHaven thông báo cụ thể
          trên website CostumeHaven.
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Bản Cập nhật ngày 10/12/2022
        </h2>
        <p className="px-0.5 text-sm italic text-body-dark md:text-base 2xl:text-lg">
          Phiên bản này có hiệu lực vào ngày 17/05/2019.
        </p>
      </section>
    </>
  );
}

TermsPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'terms'])),
    },
  };
};
