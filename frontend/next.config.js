module.exports = {
  i18n: {
    locales: ['en', 'ko-KR'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/resources/perspectives',
        destination: '/under-construction',
        permanent: false,
      },
      {
        source: '/resources/seminars',
        destination: '/under-construction',
        permanent: false,
      },
      {
        source: '/resources/senior-missions',
        destination: '/under-construction',
        permanent: false,
      },
      {
        source: '/resources/short-term',
        destination: '/under-construction',
        permanent: false,
      },
    ];
  },
};
