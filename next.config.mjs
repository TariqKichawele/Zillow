/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                hostname: 'https',
                hostname: 'us-east-1-shared-usea1-02.graphassets.com'
            }
        ]
    }
};

export default nextConfig;
