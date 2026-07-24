import { Cormorant_Garamond, Poppins, Sacramento, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "600"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata = {
  title: "Manchester Gita Festival 2026 | GIEO Gita",
  description:
    "Manchester Gita Festival — August 25th to 30th, 2026. Spiritual wisdom, timeless values, global harmony. A five-day gathering of Satsang, Conference, Cultural Programs, and Devotional Gatherings, graced by Shri Krishan Kripa. Organised by GIEO Gita.",
  keywords: [
    "Manchester Gita Festival",
    "GIEO Gita",
    "Bhagavad Gita",
    "Shri Krishan Kripa",
    "Satsang Manchester",
    "Gita Mahotsav UK",
  ],
  openGraph: {
    title: "Manchester Gita Festival 2026",
    description: "Spiritual Wisdom. Timeless Values. Global Harmony. August 25–29, 2026.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable} ${sacramento.variable} ${devanagari.variable}`}>
      <Header/>
      <body className="font-body antialiased">{children}</body>
      <Footer/>
    </html>
  );
}
