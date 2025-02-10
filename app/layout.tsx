import type { Metadata } from "next";
import LocalFont from "next/font/local";
import "./globals.css";

const teko = LocalFont({
  src: [
    {
      path: "./font/Teko-Light.ttf",
      weight: "300", // Light
      style: "normal",
    },
    {
      path: "./font/Teko-Regular.ttf",
      weight: "400", // Regular
      style: "normal",
    },
    {
      path: "./font/Teko-Medium.ttf",
      weight: "500", // Medium
      style: "normal",
    },
    {
      path: "./font/Teko-SemiBold.ttf",
      weight: "600", // SemiBold
      style: "normal",
    },
    {
      path: "./font/Teko-Bold.ttf",
      weight: "700", // Bold
      style: "normal",
    },
  ],
  variable: "--font-teko",
});

export const metadata: Metadata = {
  title: "Dynamic Arena",
  description: "Chase your apponents",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={teko.variable}
      >
        {children}
      </body>
    </html>
  );
}
