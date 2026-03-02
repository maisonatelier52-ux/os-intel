// /** @type {import('next').NextConfig} */
// const nextConfig = {
//  images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'i.pravatar.cc',
//       },
//       {
//         protocol: 'https',
//         hostname: 'encrypted-tbn0.gstatic.com',
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ── Image format optimization ─────────────────────────────────────────
    // Next.js will serve WebP/AVIF automatically — significantly smaller files = faster LCP
    formats: ["image/avif", "image/webp"],

    // ── Device sizes for responsive srcset ───────────────────────────────
    // Mobile: 375, 428 (iPhone) | Tablet: 768 | Desktop: 1080, 1200, 1920
    deviceSizes: [375, 428, 640, 768, 1024, 1080, 1200, 1920],

    // ── Image sizes used with `sizes` prop ────────────────────────────────
    imageSizes: [16, 32, 48, 64, 80, 96, 128, 256, 384],

    // ── Minimum cache TTL (1 week) ────────────────────────────────────────
    // Stops Next.js re-optimizing the same image on every request
    minimumCacheTTL: 604800,

    // ── Disable dangerouslyAllowSVG unless you need it ────────────────────
    dangerouslyAllowSVG: false,
  },

  // ── Compression ──────────────────────────────────────────────────────────
  compress: true,

  // ── Power header ─────────────────────────────────────────────────────────
  poweredByHeader: false,
};


export default nextConfig;

