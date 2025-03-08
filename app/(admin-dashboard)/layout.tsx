
import Sidebar from "@/components/dashboard/Sidebar"
import React from "react";
import Header from "@/components/dashboard/Header";
import BreadCrum from "@/components/BreadCrum";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative w-full   bg-primary_bg flex text-white  font-sans">
      <Sidebar/>
      <div className={"w-full h-screen overflow-y-scroll p "}>
          <Header/>
          <BreadCrum/>
        {children}
      </div>
    </div>
  )
}
