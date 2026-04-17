import type { Metadata } from "next";
import Script from 'next/script';
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceWorkerRegister from './components/ServiceWorkerRegister';
import { gameCollections, totalPuzzleCount } from './lib/gameData';

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JewelSliding - Free Online Gem Sliding Puzzle Game",
    template: "%s | JewelSliding",
  },
  manifest: '/favicon/site.webmanifest',
  description:
    `Play JewelSliding free online. Slide glittering gem blocks into open gaps, clear solid rows, and survive the faster waves across ${gameCollections.length} challenge tracks.`,
  keywords: [
    "JewelSliding",
    "gem puzzle game",
    "sliding block puzzle",
    "match row puzzle",
    "browser puzzle game",
    "free online puzzle game",
    "falling block puzzle",
    "jewel game",
    "brain game",
    "play JewelSliding online",
  ],
  authors: [{ name: "JewelSliding Team" }],
  creator: "JewelSliding",
  publisher: "JewelSliding",
  metadataBase: new URL("https://jewelsliding.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JewelSliding",
    title: "JewelSliding - Free Online Gem Sliding Puzzle Game",
    description:
      `Guide shimmering gems into open slots, complete solid rows, and hold your nerve as the pace speeds up in JewelSliding.`,
    url: "https://jewelsliding.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "JewelSliding - Free Online Gem Sliding Puzzle Game",
    description:
      `Play JewelSliding free online and clear glowing gem rows before the stack rises too high.`,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'JewelSliding',
    startupImage: ['/favicon/apple-touch-icon.png'],
  },
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
};

function getPublisherId() {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!raw) return '';
  return raw.startsWith('ca-pub-') ? raw : `ca-pub-${raw}`;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publisherId = getPublisherId();

  return (
    <html lang="en">
      <head>
        {publisherId ? (
          <Script
            id="adsense-script"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JewelSliding",
              url: "https://jewelsliding.com",
              description:
                `Free online gem sliding puzzle game with ${totalPuzzleCount}+ featured challenge boards across ${gameCollections.length} challenge tracks.`,
            }),
          }}
        />
      </head>
      <body className={`${nunito.variable} ${baloo.variable}`}>
        <ServiceWorkerRegister />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
