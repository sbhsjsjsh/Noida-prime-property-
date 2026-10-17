import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Open Land in Sector 62 Noida | Noida Prime Property',
  description: 'Looking for open land in Sector 62, Noida? Noida Prime Property helps you explore available land and plot options for investment and real estate opportunities with professional property assistance.',
  openGraph: {
    title: 'Open Land in Sector 62 Noida | Noida Prime Property',
    description: 'Looking for open land in Sector 62, Noida? Noida Prime Property helps you explore available land and plot options for investment and real estate opportunities with professional property assistance.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Land in Sector 62 Noida | Noida Prime Property',
    description: 'Looking for open land in Sector 62, Noida? Noida Prime Property helps you explore available land and plot options for investment and real estate opportunities with professional property assistance.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Noida Prime Property",
    "description": "Looking for open land in Sector 62, Noida? Noida Prime Property helps you explore available land and plot options for investment and real estate opportunities with professional property assistance.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "url": process.env.APP_URL || "https://noidaprime.com"
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
