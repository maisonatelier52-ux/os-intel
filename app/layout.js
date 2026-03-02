// import { Playfair_Display, Macondo } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const playfair = Playfair_Display({
//   variable: "--font-playfair",
//   subsets: ["latin"],
//   weight: ["400", "700", "900"],
// });

// const macondo = Macondo({
//   variable: "--font-macondo",
//   subsets: ["latin"],
//   weight: "400",
// });

// export const metadata = {
//   title: "PaperZilla",
//   description: "A modern news site",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${playfair.variable} ${macondo.variable} antialiased`}>
//         <Header/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }
import { Playfair_Display, Macondo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const macondo = Macondo({
  variable: "--font-macondo",
  subsets: ["latin"],
  weight: "400",
});

const SITE_URL = "https://os-intel-bice.vercel.app";

export const metadata = {
  // ── Title ──────────────────────────────────────────────────────────────────
  // 55–66 chars, keyword-rich, brand at end
  title: {
    default: "OS-Intel — World News, Conflict, Cybersecurity & Investigation",
    template: "%s | OS-Intel",
  },

  // ── Meta Description ───────────────────────────────────────────────────────
  // 120–155 chars, actionable, keyword-rich
  description:
    "Discover sharp, independent reporting on world affairs, war & conflict, geo-politics, cybersecurity, dark web investigations, and breaking global news — updated daily.",

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    "world news",
    "conflict news",
    "cybersecurity news",
    "dark web investigation",
    "geo-politics",
    "war news",
    "breaking news",
    "OS-Intel",
    "independent news",
    "global affairs",
  ],

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Favicon ────────────────────────────────────────────────────────────────
  // Place favicon.ico in /public — Next.js picks it up automatically from /app/favicon.ico
  // If you have it in /public, reference it here:
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // optional: add a 180x180 PNG to /public
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    title: "OS-Intel — World News, Conflict, Cybersecurity & Investigation",
    description:
      "Sharp, independent reporting on world affairs, war & conflict, geo-politics, cybersecurity, dark web investigations, and breaking global news.",
    url: SITE_URL,
    siteName: "OS-Intel",
    images: [
      {
        url: `${SITE_URL}/images/os-intel-og-image.webp`, // create a 1200×630 OG image and place in /public/images/
        width: 1200,
        height: 630,
        alt: "OS-Intel — Independent News & Investigation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ── Twitter Card ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "OS-Intel — World News, Conflict, Cybersecurity & Investigation",
    description:
      "Sharp, independent reporting on world affairs, war & conflict, geo-politics, cybersecurity, dark web investigations, and breaking global news.",
    images: [`${SITE_URL}/images/os-intel-og-image.webp`],
    creator: "@osintel",
    site: "@osintel",
  },

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification (add when you connect Google Search Console) ──────────────
  // verification: {
  //   google: "your-google-site-verification-token",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${macondo.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}