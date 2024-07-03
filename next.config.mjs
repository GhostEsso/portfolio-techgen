/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-techgen/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-techgen' : '',
  output: 'export', // Ajout de l'option pour l'exportation statique
};

export default nextConfig;
