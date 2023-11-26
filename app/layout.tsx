
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
  title: "ASCI CEP",
  description:
    "ASCI CEP is a community of students, developers, designers. We are a community based on CEP.",  
  icons: {
    icon: "public/asci.svg",
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
