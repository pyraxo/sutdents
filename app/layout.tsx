import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: "SUTDents",
  description: "Quick links for SUTD students",
};

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
        </ThemeProvider>
      </body>
    </html>
  );
}
