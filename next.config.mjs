/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [{
            hostname: 'images.unsplash.com', // Specify the Unsplash hostname
          },
        ],
      },
      reactStrictMode: true,
      output: 'standalone',  // Ensure full static export
};

export default nextConfig;
