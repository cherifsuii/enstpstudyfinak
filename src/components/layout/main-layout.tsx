import { SidebarNav } from "@/components/layout/sidebar-nav"
import { Footer } from "@/components/layout/footer"
import { TopNav } from "@/components/layout/top-nav"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-orange-50 dark:from-black dark:to-orange-950">
      <TopNav />
      <div className="grid flex-1 md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
        <div className="hidden border-r bg-white/80 dark:bg-black/80 backdrop-blur-sm md:block">
          <SidebarNav />
        </div>
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-6 p-6 lg:gap-8 lg:p-8">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}