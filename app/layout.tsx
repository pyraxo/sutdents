import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'SUTDents',
  description: 'Bulletin board of quick links, useful for SUTD students.',
  keywords: 'SUTD, quicklinks, useful',
  openGraph: {
    title: 'SUTDents',
    description: 'Bulletin board of quick links, useful for SUTD students.',
    url: 'https://sutdents.com',
    siteName: 'SUTDents',
    // images: [
    //   {
    //     url: 'https://sutdents.com/favicon.ico',
    //     width: 1200,
    //     height: 630,
    //     alt: 'AI Chat History Bulletin Board',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'SUTDents',
    description: 'Bulletin board of quick links, useful for SUTD students.',
    images: ['https://sutdents.com/favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
