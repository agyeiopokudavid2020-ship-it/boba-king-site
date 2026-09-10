/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    // Only remaining remote image is the WhatsApp QR code. Menu photos,
    // hero, avatars, and favicon are all self-hosted in /public.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.qrserver.com",
      },
    ],
  },
};

export default nextConfig;
