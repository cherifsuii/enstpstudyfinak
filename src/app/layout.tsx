import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { MainLayout } from "@/components/layout/main-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ENSTPStudy - Plateforme d'études pour l'ENSTP",
  description: "Plateforme moderne dédiée aux étudiants de l'École Nationale Supérieure des Travaux Publics, spécialisée dans les études de génie civil et travaux publics.",
  keywords: ["ENSTP", "Travaux Publics", "Génie Civil", "Études", "Algérie", "DIB", "DMS"],
  authors: [{ name: "ENSTPStudy Team" }],
  openGraph: {
    title: "ENSTPStudy",
    description: "Plateforme d'études pour l'École Nationale Supérieure des Travaux Publics",
    url: "https://enstpstudy.com",
    siteName: "ENSTPStudy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENSTPStudy",
    description: "Plateforme d'études pour l'École Nationale Supérieure des Travaux Publics",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <MainLayout>{children}</MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
