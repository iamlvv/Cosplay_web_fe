export const CART_KEY = 'preknow-cart';
export const TOKEN = 'token';
export const AUTH_TOKEN_KEY = 'auth_token';
export const AUTH_PERMISSIONS = 'auth_permissions';
export const LIMIT = 10;
export const SUPER_ADMIN = 'super_admin';
export const CUSTOMER = 'customer';
export const CHECKOUT = 'preknow-checkout';
export const SHOPS_LIMIT = 20;
export const RTL_LANGUAGES: ReadonlyArray<string> = ['ar', 'he'];
export const PRODUCT_INITIAL_FETCH_LIMIT = 30;
export const DEFAULT_LANGUAGE =
  process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE ?? 'en';

export function getDirection(language: string | undefined) {
  if (!language) return 'ltr';
  return RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
}

export const SETTINGS = {
  id: 1,
  options: {
    seo: {
      ogImage: null,
      ogTitle: null,
      metaTags: null,
      metaTitle: null,
      canonicalUrl: null,
      ogDescription: null,
      twitterHandle: null,
      metaDescription: null,
      twitterCardType: null,
    },
    logo: {
      id: '862',
      original:
        'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/860/PickBazar.png',
      thumbnail:
        'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/860/conversions/PickBazar-thumbnail.jpg',
    },
    useOtp: false,
    currency: 'VND',
    taxClass: 1,
    siteTitle: 'PreKnow',
    deliveryTime: [
      {
        title: 'Express Delivery',
        description: '90 min express delivery',
      },
      {
        title: 'Morning',
        description: '8.00 AM - 11.00 AM',
      },
      {
        title: 'Noon',
        description: '11.00 AM - 2.00 PM',
      },
      {
        title: 'Afternoon',
        description: '2.00 PM - 5.00 PM',
      },
      {
        title: 'Evening',
        description: '5.00 PM - 8.00 PM',
      },
    ],
    signupPoints: 100,
    siteSubtitle: 'Your next ecommerce',
    shippingClass: 1,
    contactDetails: {
      contact: '+129290122122',
      socials: [
        {
          url: 'https://www.facebook.com/',
          icon: 'FacebookIcon',
        },
        {
          url: 'https://twitter.com/home',
          icon: 'TwitterIcon',
        },
        {
          url: 'https://www.instagram.com/',
          icon: 'InstagramIcon',
        },
      ],
      website: 'https://redq.io',
      location: {
        lat: 42.9585979,
        lng: -76.90872019999999,
        zip: null,
        city: null,
        state: 'NY',
        country: 'United States',
        formattedAddress: 'NY State Thruway, New York, USA',
      },
    },
    minimumOrderAmount: 0,
    maximumQuestionLimit: 5,
    currencyToWalletRatio: 3,
  },
  language: 'vi',
  created_at: '2021-03-24T15:30:18.000000Z',
  updated_at: '2022-01-15T19:02:50.000000Z',
};
