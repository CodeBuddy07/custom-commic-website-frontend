import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/shared/navbar";
import Footer from "./_components/shared/footer";

const MontserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burzerker Furrey",
  description: "The ultimate comic cosmic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${MontserratFont.variable} antialiased`}
      >
        <Navbar/>
        <div>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
