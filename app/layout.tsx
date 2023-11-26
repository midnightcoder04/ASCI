
import React from "react";
import { Inter, Space_Grotesk,Roboto_Mono } from "next/font/google";
import type { Metadata } from "next";
import { useState, useEffect, Suspense } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});
const robotomono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "TinkerHub CEP",
  description:
    "TinkerHub CEP is a community of students, developers, designers, and all-around makers from across the globe. We are a non-profit technological community based in Kerala, India.",  
  icons: {
    icon: "public/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${robotomono.variable}`}>
        {children}
      </body>
    </html>
  )
}