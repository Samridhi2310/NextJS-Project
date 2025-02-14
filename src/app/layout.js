"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { usePathname } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  const CurrentPath=usePathname();
  return (
    <html lang="en">
      <body className="bg-slate-200 flex flex-col min-h-screen">
        {/* Header */}
        {/* Conditional Layout */}
        {(CurrentPath=="/")?
        <div className="flex justify-between items-center bg-zinc-400 md:p-10">
          <h1 className="text-3xl">Home Layout</h1>
          <ul className="flex flex-row gap-4">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        :        <div className="flex justify-between items-center bg-zinc-400 md:p-10">
        <h1 className="text-3xl">Common Other Page Layout</h1>
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
}
        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer - Always at Bottom */}
        <div className="bg-zinc-300 md:p-8 flex justify-between items-center">
          <img src="logo.png" alt="Logo" className="h-12 w-12" />
          <h1 className="text-3xl">Common Layout of Footer</h1>
          <div className="flex flex-row gap-2">
            <FaFacebook />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

      </body>
    </html>
  );
}
