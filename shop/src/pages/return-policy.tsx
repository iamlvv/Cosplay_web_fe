import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ReturnPolicyPage() {
  return (
    <>
      <Seo title="Privacy" url="privacy" />
      <section className="mx-auto mb-10 w-full max-w-7xl rounded bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <h1 className="mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl">
          Chính sách Đổi trả
        </h1>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Chúng tôi luôn trân trọng sự tin tưởng và ủng hộ của quý khách hàng
          khi lựa chọn mua sách tại PreKnow. Chúng tôi cam kết bảo vệ khách hàng
          bằng chính sách Đổi trả/Hoàn tiền trên tinh thần bảo vệ quyền lợi
          người tiêu dùng nhằm cam kết với quý khách về chất lượng sản phẩm và
          dịch vụ tại PreKnow.
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Thời gian để gửi yêu cầu Đổi trả/Hoàn tiền cho PreKnow
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Thời gian tối đa để PreKnow tiếp nhận yêu cầu đổi trả là: 7 ngày từ
          lúc đơn hàng được cập nhật trạng thái Lấy hàng thành công
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Lý do Đổi trả/Hoàn tiền
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Bạn có thể yêu cầu Đổi trả/Hoàn tiền trong các trường hợp sau:
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>
            Hàng nhận được bị thiếu/khác với mô tả người bán cung cấp/hàng giả
            nhái/hư hại do vận chuyển.
          </li>
          <li>
            Chưa nhận được hàng nhưng Shipper đã cập nhật giao hàng thành công.
          </li>
          <li>Chưa nhận được hàng sau thời gian giao hàng dự kiến</li>
        </ul>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Bằng chứng cần cung cấp
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Bạn cần cung cấp hình ảnh và/hoặc video thể hiện rõ tình trạng sản
          phẩm nhận được.
        </p>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          PreKnow có thể yêu cầu bổ sung bằng chứng nếu:
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>
            Bằng chứng bạn cung cấp bị mờ, nhòe, không thể hiện được tình trạng
            sản phẩm nhận được,...
          </li>
          <li>
            Người bán khiếu nại yêu cầu của bạn và PreKnow cần thêm bằng chứng
            để xem xét
          </li>
        </ul>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Tình trạng của hàng trả lại
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Sau khi đã gửi yêu cầu Đổi trả/Hoàn tiền, nếu PreKnow và Người bán
          đồng ý cho bạn trả hàng, bạn cần gửi trả hàng Người bán theo hướng dẫn
          qua email.
        </p>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Để hạn chế các rắc rối phát sinh liên quan đến trả hàng, bạn lưu ý:
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>Đóng gói sản phẩm như hiện trạng khi nhận hàng ban đầu</li>
          <li>
            Gửi trả toàn bộ sản phẩm (bao gồm hóa đơn VAT, tem phiếu... nếu có)
          </li>
          <li>Sản phẩm gửi trả phải trong tình trạng như khi nhận hàng</li>
        </ul>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Sau khi nhận được sản phẩm bạn gửi về, PreKnow sẽ phản hồi và cập nhật
          thông tin trên từng giai đoạn xử lý đến bạn qua email.
        </p>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Khuyến khích bạn chuẩn bị thêm các bằng chứng sau để làm bằng chứng
          đối chiếu/khiếu nại về sau nếu cần:
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>Video clip quay lại quá trình đóng gói hàng gửi trả</li>
          <li>
            Các bằng chứng khác thể hiện thỏa thuận gửi trả hàng giữa bạn và
            Người bán (nếu có)
          </li>
        </ul>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Phí gửi trả hàng
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Miễn phí trả hàng khi yêu cầu trả hàng được chấp thuận bởi PreKnow.
        </p>

        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Thời gian hoàn tiền
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Thời gian hoàn tiền được bắt đầu tính kể từ thời điểm PreKnow nhận
          được hàng hoàn trả từ bạn và xác nhận với bạn về việc hàng hoàn trả
          đáp ứng đủ các điều kiện trả hàng. Thời gian cụ thể sẽ được thông báo
          đến bạn qua email.
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Bản Cập nhật ngày 31/07/2022
        </h2>
        <p className="px-0.5 text-sm italic text-body-dark md:text-base 2xl:text-lg">
          Phiên bản này có hiệu lực vào ngày 01/08/2022.
        </p>
      </section>
    </>
  );
}

ReturnPolicyPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'policy'])),
    },
  };
};
