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
    default: "Tax Consultant Islamabad & Peshawar | Professional Tax Services",
    template: "%s | Tax Consultant Pakistan",
  },
  description:
    "Professional tax consultancy serving Islamabad, Peshawar, and nationwide Pakistan. Expert income tax return filing, FBR compliance, wealth statement, and tax planning services.",
  keywords: [
    "Tax Consultant Islamabad",
    "Tax Consultant Peshawar",
    "Income Tax Return Filing Pakistan",
    "FBR Tax Consultant",
    "Filer Assistance Pakistan",
    "Wealth Statement Assistance",
  ],
  authors: [{ name: "[CONSULTANT NAME]" }],
  openGraph: {
    title: "Tax Consultant Islamabad & Peshawar | Professional Tax Services",
    description:
      "Professional tax consultancy serving Islamabad, Peshawar, and nationwide Pakistan.",
    type: "website",
    locale: "en_PK",
    siteName: "Tax Consultant Pakistan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Consultant Islamabad & Peshawar",
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
