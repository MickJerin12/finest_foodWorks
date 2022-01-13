module.exports = {
  reactStrictMode: true,
  async redirect() {
    return [
      {
        source: "/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
