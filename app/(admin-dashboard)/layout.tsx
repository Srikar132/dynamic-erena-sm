import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="!font-teko-font">
      <AppSidebar />
      <main className="">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
