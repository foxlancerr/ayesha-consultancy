import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ayesha Consultancy Islamabad & Peshawar | Professional Tax Services",
    template: "%s | Ayesha Consultancy Pakistan",
  },
  description:
    "Professional tax consultancy serving Islamabad, Peshawar, and nationwide Pakistan. Expert income tax return filing, FBR compliance, wealth statement, and tax planning services.",
  keywords: [
    "Ayesha Consultancy Islamabad",
    "Ayesha Consultancy Peshawar",
    "Income Tax Return Filing Pakistan",
    "FBR Ayesha Consultancy",
    "Filer Assistance Pakistan",
    "Wealth Statement Assistance",
  ],
  authors: [{ name: "Ayesha" }],
  openGraph: {
    title: "Ayesha Consultancy Islamabad & Peshawar | Professional Tax Services",
    description:
      "Professional tax consultancy serving Islamabad, Peshawar, and nationwide Pakistan.",
    type: "website",
    locale: "en_PK",
    siteName: "Ayesha Consultancy Pakistan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayesha Consultancy Islamabad & Peshawar",
    description: "Professional tax consultancy serving Pakistan.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      dir="ltr"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
