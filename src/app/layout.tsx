import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Treasure Coast Realty Group - Brand Guidelines",
  description: "Treasure Coast Realty Group visual identity and design system for professional real estate services",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Treasure Coast Realty Group - Brand Guidelines",
    description: "Treasure Coast Realty Group visual identity and design system for professional real estate services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Treasure Coast Realty Group Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treasure Coast Realty Group - Brand Guidelines",
    description: "Treasure Coast Realty Group visual identity and design system for professional real estate services",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
