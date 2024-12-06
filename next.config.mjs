/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
  
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001",
  },  
    
    async rewrites() {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://bank-app-server-69ir.onrender.com";
      return [
        {
          source: "/api/:path*",
          destination: `${apiUrl}/:path*`, // Ensure this is always a valid URL
        },
      ];
    },
  };
  
  export default nextConfig;
  