import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zhicheng Li — Software Engineer & ML Engineer",
  description:
    "Personal portfolio of Zhicheng Li, a Computer Science student at UF passionate about software engineering and machine learning.",
  keywords: [
    "Zhicheng Li",
    "Software Engineer",
    "Machine Learning",
    "Portfolio",
    "University of Florida",
    "Computer Science",
  ],
  openGraph: {
    title: "Zhicheng Li — Software Engineer & ML Engineer",
    description:
      "Personal portfolio of Zhicheng Li, a Computer Science student at UF.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {/* Animated gradient background */}
        <div className="gradient-bg" aria-hidden="true">
          <div className="gradient-orb gradient-orb-1" />
          <div className="gradient-orb gradient-orb-2" />
          <div className="gradient-orb gradient-orb-3" />
        </div>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
