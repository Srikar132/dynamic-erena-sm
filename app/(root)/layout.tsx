import React from "react";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const RootLayout = ({children} : Readonly<{children: React.ReactNode}>) => (
    <div className={`font-teko-font`}>
        <SessionProvider>
            <Navbar/>
        </SessionProvider>
        <main className="overflow-hidden">
            {children}
        </main>
        <Footer/>
        <Toaster/>
    </div>
);

export default RootLayout;