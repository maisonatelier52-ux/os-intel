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
  title: "PaperZilla",
  description: "A modern news site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${macondo.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}