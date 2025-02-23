import React from "react";

const RootLayout = ({children} : Readonly<{children: React.ReactNode}>) => (
    <div className={`font-teko-font`}>
        <main className="overflow-hidden">
            {children}
        </main>
    </div>
);

export default RootLayout;