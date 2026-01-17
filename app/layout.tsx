import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


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
      <body className={`${MontserratFont.variable} antialiased`} >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
