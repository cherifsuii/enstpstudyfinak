"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { 
  Menu, 
  Home, 
  Info,
  GraduationCap,
  BookOpen
} from "lucide-react"

const navigation = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "À propos", href: "/about", icon: Info },
  { name: "Cycle Préparatoire", href: "/preparatory", icon: GraduationCap },
  { name: "Cycle d'Ingénieur", href: "/engineering", icon: BookOpen },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[320px] bg-white dark:bg-black">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b px-4 bg-gradient-to-r from-orange-600/10 to-orange-800/10 dark:from-orange-600/20 dark:to-orange-800/20">
            <Link 
              href="/" 
              className="flex items-center gap-3 font-semibold"
              onClick={() => setOpen(false)}
            >
              <Image 
                src="/enstp-logo.png" 
                alt="ENSTP Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
              <div>
                <span className="text-lg font-bold text-orange-600">ENSTPStudy</span>
                <p className="text-xs text-muted-foreground">Études Ingénieur</p>
              </div>
            </Link>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-orange-50 dark:hover:bg-orange-900/20",
                  pathname === item.href 
                    ? "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium" 
                    : "text-slate-600 dark:text-slate-400"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Creator Info */}
          <div className="border-t p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-950/20">
            <div className="text-center space-y-2">
              <p className="text-xs text-muted-foreground font-medium">Créé par</p>
              <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">Cherif TAS</p>
              <div className="flex justify-center gap-2">
                <Link 
                  href="https://www.linkedin.com/in/cherif-tas-7504b8319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-xs">LinkedIn</span>
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link 
                  href="https://www.instagram.com/cherifsuii?igsh=Mml6MGlndmtobGJk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-xs">Instagram</span>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground italic">
                "ادعو لي فقط"
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}