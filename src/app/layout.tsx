import type { Metadata } from "next";
import { Playfair_Display, Amiri, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  weight: ["400", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "The Faridpur Syeds | Historical Archive & Lineage",
  description: "A premium archive documenting the noble lineage, spiritual legacy, and geographical migrations of the Syed family of Faridpur. Tracing their ancestry to the Ahl al-Bayt (آلِ بیت).",
  keywords: [
    "Faridpur Syeds",
    "Syed family lineage",
    "Ahl al-Bayt descendants Bihar",
    "Haji Shubrati history",
    "Syed Mir Majid Ali",
    "Jehanabad history",
    "Islamic heritage archive"
  ],
  authors: [{ name: "The Faridpur Syeds Heritage Society" }],
  robots: "index, follow",
  openGraph: {
    title: "The Faridpur Syeds | Historical Archive & Lineage",
    description: "Explore the geographical journey, historical milestones, and unbroken lineage of the Faridpur Syeds.",
    type: "website",
    locale: "en_US",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${amiri.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-light text-stone-900 selection:bg-gold-base/30 selection:text-lapis-deep">
        {children}
      </body>
    </html>
  );
}
