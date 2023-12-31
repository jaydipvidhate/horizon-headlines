"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import { AuthContextProvider } from "@/components/AuthProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
