import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/comp/Navbar";
import img1 from '../comp/images/MacBook Air - 2.png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Aswin Portfolio",
  description: "A minimal portfolio of Aswin M",
  openGraph: {
    title: "Aswin Portfolio",
    images: ["https://aswindevs.vercel.app/og-image.png"], 
  },
   twitter: {
    
    title: "Aswin Portfolio",
    description: "A minimal portfolio of Aswin M",
    images: ["https://aswindevs.vercel.app/og-image.png"],
  
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
         
       <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
