import React from "react";
import Navbar from "@/components/Navbar";

const RootLayout = ({children} : Readonly<{children: React.ReactNode}>) => (
    <div className={`font-teko-font`}>
        <Navbar/>
        <main className="overflow-hidden">
            {children}
        </main>
    </div>
);

export default RootLayout;