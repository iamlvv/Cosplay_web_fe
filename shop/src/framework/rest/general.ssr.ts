import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery(
  //   [API_ENDPOINTS.SETTINGS, { language: locale }],
  //   ({ queryKey }) => client.settings.all(queryKey[1] as SettingsQueryOptions)
  // );
  // await queryClient.prefetchQuery(
  //   [API_ENDPOINTS.TYPES, { limit: TYPES_PER_PAGE, language: locale }],
  //   ({ queryKey }) => client.types.all(queryKey[1] as TypeQueryOptions)
  // );
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      // dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
