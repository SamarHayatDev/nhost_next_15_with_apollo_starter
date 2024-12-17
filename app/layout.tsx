import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NhostProviderContext from "@/provider/NhostProviderContext";
import ApolloProviderContext from "@/provider/ApolloProviderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nhost Starter",
  description: "Created by Samar Hayat",
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
        <NhostProviderContext>
          <ApolloProviderContext>{children}</ApolloProviderContext>
        </NhostProviderContext>
      </body>
    </html>
  );
}
