import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative w-full bg-gradient-to-tl from-gray-200/50 to-blue-100 bg-opacity-35 text-black font-sans">
      {children}
    </div>
  )
}
