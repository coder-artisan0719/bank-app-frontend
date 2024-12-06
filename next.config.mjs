const nextConfig = {
  reactStrictMode: false,
  env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async rewrites() {
      return [
          {
              source: '/api/:path*',
              destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
          },
      ];
  },
};

export default nextConfig;
