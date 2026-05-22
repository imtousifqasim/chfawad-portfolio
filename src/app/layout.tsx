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
  metadataBase: new URL("https://fawad-portfolio.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: "Fawad Ky Vlogs | Mini Vlogger & Content Creator",
  description: "I'm Fawad, known as Fawad Ky Vlogs – a 17-year-old mini vlogger and TikTok influencer from Hujra Shah Muqeem, helping local businesses grow online through engaging video content.",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    { name: "Fawad", url: "https://www.tiktok.com/@fawadkyvlogs" }
  ],
  openGraph: {
    title: "Fawad Ky Vlogs | Mini Vlogger & Content Creator",
    description: "I'm Fawad, known as Fawad Ky Vlogs – a 17-year-old mini vlogger and TikTok influencer from Hujra Shah Muqeem, helping local businesses grow online through engaging video content.",
    url: "https://fawad-portfolio.vercel.app/",
    siteName: "Fawad Ky Vlogs",
    images: [
      {
        url: "https://i.ibb.co/VphcCGMG/fawad.png",
        width: 1200,
        height: 630,
        alt: "Fawad Ky Vlogs – Mini Vlogger & Content Creator"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fawad Ky Vlogs | Mini Vlogger & Content Creator",
    description: "I'm Fawad, known as Fawad Ky Vlogs – a 17-year-old mini vlogger and TikTok influencer from Hujra Shah Muqeem, helping local businesses grow online through engaging video content.",
    images: ["https://i.ibb.co/VphcCGMG/fawad.png"],
    creator: "@fawadkyvlogs"
  }
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fawad",
              givenName: "Fawad",
              alternateName: "Fawad Ky Vlogs",
              jobTitle: "Mini Vlogger & Content Creator",
              url: "https://www.tiktok.com/@fawadkyvlogs",
              image: "https://i.ibb.co/VphcCGMG/fawad.png",
              sameAs: [
                "https://www.tiktok.com/@fawadkyvlogs"
              ]
            })
          }}
        />
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
