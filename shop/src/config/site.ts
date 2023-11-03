import { Routes } from '@/config/routes';

export const siteSettings = {
  name: 'PreKnow',
  description: '',
  logo: {
    url: '/logo.svg',
    alt: 'PreKnow',
    href: '/grocery',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  product: {
    placeholderImage: '/product-placeholder.svg',
    cardMaps: {
      grocery: 'Krypton',
      furniture: 'Radon',
      bag: 'Oganesson',
      makeup: 'Neon',
      book: 'Xenon',
      medicine: 'Helium',
      default: 'Argon',
    },
  },
  authorizedLinks: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    // { href: Routes.orders, label: 'auth-menu-my-orders' },
    // { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
  ],
  authorizedLinksMobile: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    // { href: Routes.orders, label: 'auth-menu-my-orders' },
    // { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    // { href: Routes.refunds, label: 'text-my-refunds' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
    { href: Routes.changePassword, label: 'profile-sidebar-password' },
  ],
  dashboardSidebarMenu: [
    {
      href: Routes.profile,
      label: 'Profile',
    },
    {
      href: Routes.changePassword,
      label: 'Thay đổi mật khẩu',
    },
    // {
    //   href: Routes.orders,
    //   label: 'profile-sidebar-orders',
    // },
    // {
    //   href: Routes.downloads,
    //   label: 'profile-sidebar-downloads',
    // },
    // {
    //   href: Routes.wishlists,
    //   label: 'profile-sidebar-my-wishlist',
    // },
    // {
    //   href: Routes.questions,
    //   label: 'profile-sidebar-my-questions',
    // },
    // {
    //   href: Routes.refunds,
    //   label: 'text-my-refunds',
    // },
    // {
    //   href: Routes.reports,
    //   label: 'profile-sidebar-my-reports',
    // },
    {
      href: Routes.help,
      label: 'Trợ giúp',
    },
    {
      href: Routes.logout,
      label: 'profile-sidebar-logout',
    },
  ],
  sellingAdvertisement: {
    image: {
      src: '/selling.png',
      alt: 'Selling Advertisement',
    },
  },
  cta: {
    mockup_img_src: '/mockup-img.png',
    play_store_link: '/',
    app_store_link: '/',
  },
  footer: {
    copyright: {
      name: 'RedQ, Inc',
      href: 'https://redq.io/',
    },
    address: 'KTX Khu A - ĐHQG HCM',
    email: 'contact.preknow@gmail.com',
    phone: '(917) 112-245',
    menus: [
      {
        title: 'Tài khoản của tôi',
        links: [
          {
            name: 'Đăng nhập / Đăng ký',
            href: '/',
          },
          {
            name: 'Thay đổi địa chỉ',
            href: Routes.profile,
          },
          {
            name: 'Chi tiết tài khoản',
            href: Routes.profile,
          },
          {
            name: 'Lịch sử mua hàng',
            href: '/',
          },
        ],
      },
      {
        title: 'Kênh người bán',
        links: [
          {
            name: 'Trở thành người bán',
            href: '/',
          },
          {
            name: 'Quy định đăng bán',
            href: '/',
          },
        ],
      },
      {
        title: 'Về PreKnow',
        links: [
          {
            name: 'Giới thiệu về PreKnow',
            href: '/',
          },
          {
            name: 'Chính sách bảo mật',
            href: Routes.privacy,
          },
          {
            name: 'Điều khoản sử dụng',
            href: Routes.terms,
          },
        ],
      },
      {
        title: 'Hỗ trợ',
        links: [
          {
            name: 'Các câu hỏi thường gặp',
            href: Routes.help,
          },
          {
            name: 'Liên hệ hỗ trợ',
            href: Routes.help,
          },
          {
            name: 'Chính sách đổi trả',
            href: Routes.refunds,
          },
          {
            name: 'Phương thức vận chuyển',
            href: Routes.shipping,
          },
        ],
      },
      {
        title: 'Theo dõi',
        links: [
          {
            name: 'Facebook',
            href: 'https://www.facebook.com',
          },
          {
            name: 'Instagram',
            href: 'https://www.instagram.com',
          },
          {
            name: 'YouTube',
            href: 'https://www.instagram.com',
          },
        ],
      },
    ],
    payment_methods: [
      {
        img: '/payment/master.png',
        url: '/',
      },
      {
        img: '/payment/skrill.png',
        url: '/',
      },
      {
        img: '/payment/paypal.png',
        url: '/',
      },
      {
        img: '/payment/visa.png',
        url: '/',
      },
      {
        img: '/payment/discover.png',
        url: '/',
      },
    ],
  },
};
