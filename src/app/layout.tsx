import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "SchooLnyx - Smart School Management ERP System",
  description: "SchooLnyx is a powerful, all-in-one school management ERP system that streamlines academics, administration, finance, attendance, communication, and more.",
  keywords: "school management, education ERP, student management system, school administration software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <Suspense fallback={<Loading />}>
          <main>
            {children}
          </main>
        </Suspense>
      </body>
    </html>
  );
} 