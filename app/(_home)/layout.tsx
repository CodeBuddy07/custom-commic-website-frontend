import type { Metadata } from "next";
import "../globals.css";
import Navbar from "./_components/shared/navbar";
import Footer from "./_components/shared/footer";




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

        <div>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>

    );
}
