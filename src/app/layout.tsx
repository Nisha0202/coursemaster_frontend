import type { Metadata } from "next";
import { Imprima } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const imprima = Imprima({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-imprima",
});

export const metadata: Metadata = {
  title: "CourseMaster – Learn Anytime, Anywhere",
  description:
    "A modern EdTech platform where students can browse, enroll, and learn from high-quality online courses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={`${imprima.className} antialiased bg-gray-50`}>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
