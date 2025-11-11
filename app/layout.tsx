import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";  // Import Head
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Techvalion - Elevate Your Tech Solutions",
  description: "Techvalion is your trusted partner for innovative technology solutions, delivering excellence and driving success in the digital age.",
  other: [
    {
      name: "google-site-verification",
      content: "6eqCpENKb12jsMX5YxcXqN-nnUbMcDtmhF_h-s",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="6eqCpENKb12jsMX5YxcXqN-nnUbMcDtmhF_h-s" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
         <Analytics />
      </body>
    </html>
  );
}
