
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

export const metadata = {
  metadataBase: new URL("https://os-intel-bice.vercel.app"),
  title: {
    default: "OS-Intel — World News, Conflict, Cybersecurity & Investigation",
    template: "%s | OS-Intel",
  },
  description:
    "Discover sharp, independent reporting on world affairs, war & conflict, geo-politics, cybersecurity, dark web investigations, and breaking global news — updated daily.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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