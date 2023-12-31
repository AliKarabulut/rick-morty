import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ScroolUp from "@/components/scroolUp";
import { cookies } from "next/headers";
import { StoreProvider } from "@/stores/store-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rick and Morty",
  keywords: "Rick and Morty Api, Rick and Morty",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const theme = cookies().get("theme");

  return (
    <html lang="en" className={theme?.value}>
      <StoreProvider >
        <body
          className={`${inter.className} bg-bodyBack dark:bg-dark_bodyBack`}
        >
          <Navbar />
          {children}
          <ScroolUp />
        </body>
      </StoreProvider>
    </html>
  );
}
