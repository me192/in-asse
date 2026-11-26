import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Inter({ variable: "--font-sans-face", subsets: ["latin"] });
const serif = Playfair_Display({ variable: "--font-serif-face", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leonardo Leone · Sapere è Potere",
  description:
    "Soldi, lavoro e attualità spiegati senza giri di parole. Il regalo gratuito, la Leone Master School e tutti i link di Leonardo Leone.",
  openGraph: {
    title: "Leonardo Leone · Sapere è Potere",
    description: "Il regalo gratuito, la Leone Master School e tutti i link di Leonardo Leone.",
    type: "website",
    locale: "it_IT",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0b09",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>{children}</body>
    </html>
  );
}
