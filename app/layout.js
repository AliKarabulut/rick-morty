import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ScroolUp from "@/components/scroolUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rick and Morty",
  keywords: "Rick and Morty Api, Rick and Morty",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ScroolUp />
      </body>
    </html>
  );
}
