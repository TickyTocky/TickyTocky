/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: '@import "@/styles/main.scss";',
  },
  images: {
    domains: ['sprint-fe-project.s3.ap-northeast-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
