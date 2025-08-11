"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  BookOpen, 
  ChevronRight, 
  ChevronDown, 
  GraduationCap, 
  Building, 
  Wrench,
  Home,
  Info
} from "lucide-react"
import { useState } from "react"

const navigation = [
  {
    name: "Accueil",
    href: "/",
    icon: Home,
  },
  {
    name: "À propos de l'ENSTP",
    href: "/about",
    icon: Info,
  },
  {
    name: "Cycle Préparatoire",
    icon: GraduationCap,
    children: [
      {
        name: "1ère Année",
        href: "/preparatory/1st-year",
        children: [
          { name: "Semestre 1", href: "/preparatory/1st-year/semester1" },
          { name: "Semestre 2", href: "/preparatory/1st-year/semester2" },
        ],
      },
      {
        name: "2ème Année",
        href: "/preparatory/2nd-year",
        children: [
          { name: "Semestre 1", href: "/preparatory/2nd-year/semester1" },
          { name: "Semestre 2", href: "/preparatory/2nd-year/semester2" },
        ],
      },
    ],
  },
  {
    name: "Cycle d'Ingénieur",
    icon: BookOpen,
    children: [
      {
        name: "D.I.B. (Département d'Infrastructure)",
        href: "/engineering/dib",
        children: [
          { name: "1ère Année - Semestre 1", href: "/engineering/dib/1st-year/semester1" },
          { name: "1ère Année - Semestre 2", href: "/engineering/dib/1st-year/semester2" },
        ],
      },
      {
        name: "D.M.S. (Département des Matériaux)",
        href: "/engineering/dms",
        children: [
          { name: "1ère Année - Semestre 1", href: "/engineering/dms/1st-year/semester1" },
          { name: "1ère Année - Semestre 2", href: "/engineering/dms/1st-year/semester2" },
        ],
      },
      {
        name: "2ème Année",
        href: "/engineering/2nd-year",
        comingSoon: true,
      },
      {
        name: "3ème Année",
        href: "/engineering/3rd-year",
        comingSoon: true,
      },
    ],
  },
]

interface NavItemProps {
  item: typeof navigation[0]
  level?: number
}

function NavItem({ item, level = 0 }: NavItemProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isActive = pathname === item.href
  const hasChildren = item.children && item.children.length > 0

  if (hasChildren) {
    return (
      <div className="space-y-1">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-between hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors",
            level > 0 && "pl-4",
            isActive && "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            {item.icon && <item.icon className="h-4 w-4" />}
            <span>{item.name}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
        {isOpen && (
          <div className="ml-4 space-y-1">
            {item.children.map((child) => (
              <NavItem key={child.href} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  if (item.comingSoon) {
    return (
      <Button
        variant="ghost"
        className="w-full justify-between opacity-50 cursor-not-allowed"
        disabled
      >
        <div className="flex items-center gap-2">
          {item.icon && <item.icon className="h-4 w-4" />}
          <span>{item.name}</span>
        </div>
        <span className="text-xs bg-muted px-2 py-1 rounded">Bientôt</span>
      </Button>
    )
  }

  return (
    <Link href={item.href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors",
          level > 0 && "pl-4",
          isActive && "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium"
        )}
      >
        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
        {item.name}
      </Button>
    </Link>
  )
}

export function SidebarNav() {
  return (
    <div className="flex h-full max-h-screen flex-col gap-2 bg-white dark:bg-black">
      <div className="flex h-16 items-center border-b px-4 lg:h-[80px] lg:px-6 bg-gradient-to-r from-orange-600/10 to-orange-800/10 dark:from-orange-600/20 dark:to-orange-800/20">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <Image 
            src="/enstp-logo.png" 
            alt="ENSTP Logo" 
            width={40} 
            height={40} 
            className="rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-orange-600">ENSTPStudy</span>
            <span className="text-xs text-muted-foreground">Études Ingénieur</span>
          </div>
        </Link>
      </div>
      <div className="flex-1 px-3 py-2">
        <nav className="grid items-start text-sm font-medium">
          <div className="space-y-1">
            {navigation.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>
        </nav>
      </div>
      
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
            >
              <span className="text-xs">LinkedIn</span>
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link 
              href="https://www.instagram.com/cherifsuii?igsh=Mml6MGlndmtobGJk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800 transition-colors"
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
  )
}