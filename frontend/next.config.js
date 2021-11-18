module.exports = {
  i18n: {
    locales: ['en', 'ko-KR'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/(.*)/resources/perspectives',
        destination: '/under-construction',
        permanent: true,
      },
      {
        source: '/(.*)/resources/seminars',
        destination: '/under-construction',
        permanent: true,
      },
      {
        source: '/(.*)/resources/senior-missions',
        destination: '/under-construction',
        permanent: true,
      },
      {
        source: '/(.*)/resources/short-term-training',
        destination: '/under-construction',
        permanent: true,
      },
    ];
  },
};
