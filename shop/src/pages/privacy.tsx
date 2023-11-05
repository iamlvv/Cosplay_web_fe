import { getLayout } from '@/components/layouts/layout';
import Seo from '@/components/seo/seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function PrivacyPage() {
  return (
    <>
      <Seo title="Privacy" url="privacy" />
      <section className="mx-auto mb-10 w-full max-w-7xl rounded bg-light py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
        <h1 className="mb-4 text-xl font-bold text-heading sm:mb-5 sm:text-3xl md:text-2xl 2xl:mb-7 2xl:text-4xl">
          Chính sách bảo mật
        </h1>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Trong suốt quá trình hình thành và phát triển, PreKnow luôn nỗ lực đem
          lại trải nghiệm mua sách cũ trực tuyến tin cậy, tiết kiệm và thấu hiểu
          người dùng. Chúng tôi tôn trọng quyền riêng tư của khách hàng và cam
          kết bảo mật thông tin cá nhân của khách hàng. Dưới đây là các nguyên
          tắc khi tiếp cận quyền riêng tư, thông tin cá nhân của PreKnow.
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
          Mục đích thu thập
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Chúng tôi có thể thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá
          nhân của bạn cho các mục đích sau đây:
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>
            Đơn hàng: để xử lý các vấn đề liên quan đến đơn đặt hàng của bạn.
          </li>
          <li>
            Duy trì tài khoản: để tạo và duy trì tài khoản của bạn cùng với các
            dịch vụ và nền tảng của chúng tôi (bao gồm các sở thích của bạn),
            cũng như quan hệ và tài khoản người dùng của bạn với chúng tôi.
          </li>
          <li>
            Dịch vụ Người tiêu dùng, dịch vụ Chăm sóc Khách hàng: bao gồm các
            phản hồi cho các yêu cầu, khiếu nại và phản hồi của bạn.
          </li>
          <li>
            Cá nhân hoá: Chúng tôi có thể tổ hợp dữ liệu được thu thập để có một
            cái nhìn hoàn chỉnh hơn về người tiêu dùng và từ đó cho phép chúng
            tôi phục vụ tốt hơn ở các khía cạnh, cụ thể: (i) để cải thiện và cá
            nhân hóa trải nghiệm của bạn trên PreKNow (ii) để cải thiện các tiện
            ích, dịch vụ, điều chỉnh chúng phù hợp với các nhu cầu được cá thể
            hóa và đi đến những ý tưởng dịch vụ mới (iii) để phục vụ bạn với
            những giới thiệu, quảng cáo được điều chỉnh phù hợp với sự quan tâm
            của bạn.
          </li>
          <li>
            An Ninh: cho các mục đích ngăn ngừa các hoạt động phá hủy tài khoản
            người dùng của khách hàng hoặc các hoạt động giả mạo khách hàng.
          </li>
          <li>
            Theo yêu cầu của pháp luật: tùy quy định của pháp luật vào từng thời
            điểm, chúng tôi có thể thu thập, lưu trữ và cung cấp theo yêu cầu
            của cơ quan nhà nước có thẩm quyền.
          </li>
        </ul>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Phạm vi thu thập
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Chúng tôi thu thập thông tin cá nhân của bạn khi:
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>Bạn trực tiếp cung cấp cho chúng tôi.</li>
        </ul>
        <p className="mb-4 px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Đó là các thông tin cá nhân bạn cung cấp cho chúng tôi được thực hiện
          chủ yếu trên website PreKnow bao gồm: họ tên, email, số điện thoại,
          địa chỉ, thông tin đăng nhập tài khoản bao gồm thông tin bất kỳ cần
          thiết để thiết lập tài khoản ví dụ như tên đăng nhập, mật khẩu đăng
          nhập, ID/địa chỉ đăng nhập và câu hỏi/trả lời an ninh.
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>Bạn tương tác với chúng tôi.</li>
        </ul>
        <p className="mb-4 px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Chúng tôi sử dụng cookies và công nghệ theo dấu khác để thu thập một
          số thông tin khi bạn tương tác trên website PreKnow.
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>Từ những nguồn hợp pháp khác.</li>
        </ul>
        <p className="mb-4 px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Chúng tôi có thể sẽ thu thập thông tin cá nhân từ các nguồn hợp pháp
          khác.
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Thời gian lưu trữ
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Thông tin cá nhân của khách hàng sẽ được lưu trữ cho đến khi khách
          hàng có yêu cầu hủy bỏ hoặc khách hàng tự đăng nhập và thực hiện hủy
          bỏ. Trong mọi trường hợp thông tin cá nhân của khách hàng sẽ được bảo
          mật trên máy chủ của PreKnow.
        </p>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Không chia sẻ thông tin cá nhân khách hàng
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Chúng tôi sẽ không cung cấp thông tin cá nhân của bạn cho bất kỳ bên
          thứ ba nào, trừ một số hoạt động cần thiết dưới đây:
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>
            Các đối tác là bên cung cấp dịch vụ liên quan đến thực hiện đơn hàng
            và chỉ giới hạn trong phạm vi thông tin cần thiết cũng như áp dụng
            các quy định đảm bảo an ninh, bảo mật các thông tin cá nhân.
          </li>
          <li>
            Các chương trình có tính liên kết, đồng thực hiện, thuê ngoài cho
            các mục địch được nêu tại Mục 2 và luôn áp dụng các yêu cầu bảo mật
            thông tin cá nhân.
          </li>
          <li>
            Yêu cầu pháp lý: Chúng tôi có thể tiết lộ các thông tin cá nhân nếu
            điều đó do luật pháp yêu cầu và việc tiết lộ như vậy là cần thiết
            một cách hợp lý để tuân thủ các quy trình pháp lý.
          </li>
          <li>
            Chuyển giao kinh doanh (nếu có): trong trường hợp sáp nhập, hợp nhất
            toàn bộ hoặc một phần với công ty khác, người mua sẽ có quyền truy
            cập thông tin được chúng tôi lưu trữ, duy trì trong đó bao gồm cả
            thông tin cá nhân.
          </li>
        </ul>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          An toàn dữ liệu
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Chúng tôi đã và đang thực hiện nhiều biện pháp an toàn để đảm bảo an
          toàn dữ liệu, bao gồm:
        </p>
        <ul className="list-disc px-8 text-sm text-body-dark md:text-base 2xl:text-lg">
          <li>
            Bảo đảm an toàn trong môi trường vận hành: chúng tôi lưu trữ không
            tin cá nhân khách hàng trong môi trường vận hành an toàn và chỉ có
            nhân viên, đại diện và nhà cung cấp dịch vụ có thể truy cập trên cơ
            sở cần phải biết. Chúng tôi tuân theo các tiêu chuẩn ngành, pháp
            luật trong việc bảo mật thông tin cá nhân khách hàng.
          </li>
          <li>
            Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn
            đến mất mát dữ liệu cá nhân khách hàng, chúng tôi sẽ có trách nhiệm
            thông báo vụ việc cho cơ quan chức năng để điều tra xử lý kịp thời
            và thông báo cho khách hàng được biết.
          </li>
          <li>Các thông tin thanh toán: được bảo mật theo tiêu chuẩn ngành.</li>
        </ul>
        <h2 className="my-4 text-base font-semibold text-heading sm:mb-5 sm:text-xl md:text-lg 2xl:mb-7 2xl:text-2xl">
          Quyền của khách hàng đối với thông tin cá nhân
        </h2>
        <p className="px-0.5 text-sm text-body-dark md:text-base 2xl:text-lg">
          Khách hàng có quyền cung cấp thông tin cá nhân cho chúng tôi và có thể
          thay đổi quyết định đó vào bất cứ lúc nào. Khách hàng có quyền tự kiểm
          tra, cập nhật, điều chỉnh thông tin cá nhân của mình bằng cách đăng
          nhập vào tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu cầu chúng
          tôi thực hiện việc này.
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

PrivacyPage.getLayout = getLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common', 'policy'])),
    },
  };
};
