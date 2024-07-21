module.exports = {
  async redirects() {
    return [
      {
        source: "/backend",
        destination: "https://owen-eportfolio-backend.vercel.app/api/admin/",
        permanent: true,
      },
      {
        source: "/legal/fruit-force-privacy",
        destination: "/projects/fruit-force/privacy",
        permanent: true,
      },
      {
        source: "/legal/fruit-force-terms",
        destination: "/projects/fruit-force/terms",
        permanent: true,
      },
      {
        source: "/legal/lost-flame-privacy",
        destination: "/projects/lost-flame/privacy",
        permanent: true,
      },
      {
        source: "/legal/lost-flame-terms",
        destination: "/projects/lost-flame/terms",
        permanent: true,
      },
    ];
  },
};
