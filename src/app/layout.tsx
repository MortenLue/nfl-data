import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TeamProvider } from "./TeamContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFL Spielplan",
  description: "Ein einfacher Spielplan für die NFL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TeamProvider>{children}</TeamProvider>
      </body>
    </html>
  );
}
