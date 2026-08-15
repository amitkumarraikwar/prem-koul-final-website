import type { Metadata } from "next";
import { Bungee, Kaushan_Script, Amita, Sarpanch, Inter, Hind } from "next/font/google";
import { Providers } from "@/components/providers";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Header } from "@/components/Header";
import { FixedSocialBar } from "@/components/FixedSocialBar";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
});

const amita = Amita({
  weight: ["400", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-hindi-heading",
  display: "swap",
});

const sarpanch = Sarpanch({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari", "latin"],
  variable: "--font-hindi-alt",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const hind = Hind({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-body-hindi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prem Chand Koul (Prem Koul) | Indore Vidhan Sabha 5 Leader",
  description:
    "Prem Chand Koul (Prem Koul, Prem Kaul, Prem Chandra Koul) - IIM Indore Media Executive, Former NCERT Producer, Founder Prem Koul Film Production & Visionary Leader for Indore Vidhan Sabha 5. 100% Clean Integrity Record (0 Criminal Cases), Master's in Journalism (DAVV Indore), IGNCA Film Diploma. Pioneer of 24/7 Doorstep Governance in Madhya Pradesh.",
  keywords: [
    "Prem Koul",
    "Prem Chand Koul",
    "Prem Kaul",
    "Prem Chandra Koul",
    "Prem Chandra Kaul",
    "Indore Vidhan Sabha 5",
    "Doorstep Governance",
    "IIM Indore Media Executive",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bungee.variable} ${kaushan.variable} ${amita.variable} ${sarpanch.variable} ${inter.variable} ${hind.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-brand-bg text-brand-primary">
        <Providers>
          <div className="noise-overlay" />
          <ScrollProgressBar />
          <Header />
          <main className="flex-1 flex flex-col w-full relative">
            {children}
          </main>
          <FixedSocialBar />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
