import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chfawad.pk"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Fawad Ky Vlogs | Mini Vlogger & TikTok Content Creator in Okara",
    template: "%s | Fawad Ky Vlogs",
  },
  description:
    "I'm Fawad (CH Fawad) — a 17-year-old mini vlogger and TikTok influencer from Hujra Shah Muqeem, Okara. I help local businesses grow through viral video promotions, food reviews, and TikTok reels.",
  keywords: [
    "Fawad Ky Vlogs",
    "CH Fawad",
    "TikTok influencer Okara",
    "mini vlogger Pakistan",
    "business promotion Okara",
    "food reviewer Okara",
    "TikTok marketing Pakistan",
    "video promotion services",
    "Hujra Shah Muqeem vlogger",
    "Pakistani TikToker",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    { name: "Fawad", url: "https://www.tiktok.com/@fawadkyvlogs" },
  ],
  creator: "Fawad Ky Vlogs",
  publisher: "Fawad Ky Vlogs",
  category: "entertainment",
  classification: "Content Creator",
  openGraph: {
    title: "Fawad Ky Vlogs | Mini Vlogger & TikTok Content Creator",
    description:
      "I'm Fawad — a 17-year-old mini vlogger from Hujra Shah Muqeem, Okara. Helping local businesses go viral on TikTok. Food reviews, business promotions & mini vlogs.",
    url: "https://chfawad.pk",
    siteName: "Fawad Ky Vlogs",
    images: [
      {
        url: "https://i.ibb.co/VphcCGMG/fawad.png",
        width: 1200,
        height: 630,
        alt: "Fawad Ky Vlogs – Mini Vlogger & Content Creator from Okara",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawad Ky Vlogs | Mini Vlogger & TikTok Content Creator",
    description:
      "I'm Fawad — a 17-year-old mini vlogger from Hujra Shah Muqeem, Okara. Helping local businesses go viral on TikTok.",
    images: ["https://i.ibb.co/VphcCGMG/fawad.png"],
    creator: "@fawadkyvlogs",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fawad",
  givenName: "Fawad",
  alternateName: "Fawad Ky Vlogs",
  additionalName: "CH Fawad",
  jobTitle: "Mini Vlogger & Content Creator",
  description:
    "17-year-old TikTok mini vlogger from Hujra Shah Muqeem, Okara, Pakistan. Creates food reviews, business promotions, and mini vlogs for local businesses.",
  url: "https://chfawad.pk",
  image: "https://i.ibb.co/VphcCGMG/fawad.png",
  sameAs: ["https://www.tiktok.com/@fawadkyvlogs"],
  knowsAbout: ["TikTok Marketing", "Video Promotion", "Content Creation", "Food Reviewing", "Business Promotion"],
  nationality: {
    "@type": "Country",
    name: "Pakistan",
  },
  homeLocation: {
    "@type": "Place",
    name: "Hujra Shah Muqeem, District Okara, Pakistan",
  },
  age: "17",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Hujra Shah Muqeem, Okara" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="6fc49cd7-a913-4ebe-b2d7-68dbf65f40f2"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
