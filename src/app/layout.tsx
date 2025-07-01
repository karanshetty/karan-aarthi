import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant, Montserrat, Great_Vibes, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SplashProvider } from "@/components/SplashContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Karan & Aarthi - Wedding Invitation",
  description: "Join us as we celebrate our special day. Wedding invitation and details for Karan and Aarthi.",
  keywords: "wedding, invitation, Karan, Aarthi, marriage, celebration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${montserrat.variable} ${greatVibes.variable} ${dancingScript.variable} antialiased min-h-screen flex flex-col`}
      >
        <SplashProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SplashProvider>
      </body>
    </html>
  );
}
