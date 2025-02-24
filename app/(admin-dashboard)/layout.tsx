import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Header from "@/components/dashboard/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative w-full bg-gradient-to-br from-gray-200/50 to-blue-100/70 bg-opacity-35 text-black font-sans">
      
      <div className="flex flex-col p-2 sm:p-5 md:p-10 lg:p-14">
        <Header/>
        {children}
      </div>
    </div>
  )
}
