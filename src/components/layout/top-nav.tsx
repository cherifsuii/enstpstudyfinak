"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  Search, 
  GraduationCap,
  BookOpen,
  Home,
  MessageSquare
} from "lucide-react"
import { MobileNav } from "./mobile-nav"
import { SearchDialog } from "@/components/search-dialog"
import { FeedbackDialog } from "@/components/feedback-dialog"

export function TopNav() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60 shadow-sm">
      <div className="container flex h-14 items-center px-4">
        {/* Mobile menu */}
        <div className="md:hidden mr-2">
          <MobileNav />
        </div>

        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/enstp-logo.png" 
              alt="ENSTP Logo" 
              width={32} 
              height={32} 
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-orange-600">ENSTPStudy</h1>
              <p className="text-xs text-muted-foreground">Études Ingénieur</p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center mx-8 space-x-1">
          <Link href="/">
            <Button 
              variant={pathname === "/" ? "default" : "ghost"} 
              size="sm"
              className="gap-2 font-medium"
            >
              <Home className="h-4 w-4" />
              Accueil
            </Button>
          </Link>
          <Link href="/preparatory">
            <Button 
              variant={pathname.startsWith("/preparatory") ? "default" : "ghost"} 
              size="sm"
              className="gap-2 font-medium"
            >
              <GraduationCap className="h-4 w-4" />
              Préparatoire
            </Button>
          </Link>
          <Link href="/engineering">
            <Button 
              variant={pathname.startsWith("/engineering") ? "default" : "ghost"} 
              size="sm"
              className="gap-2 font-medium"
            >
              <BookOpen className="h-4 w-4" />
              Ingénieur
            </Button>
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="ml-auto flex items-center space-x-2">
          {/* Search */}
          <SearchDialog>
            <Button variant="ghost" size="sm" className="hidden sm:flex gap-2">
              <Search className="h-4 w-4" />
              <span className="hidden lg:inline">Rechercher</span>
              <span className="sr-only">Rechercher</span>
            </Button>
          </SearchDialog>
          
          {/* Feedback */}
          <FeedbackDialog>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden lg:inline">Feedback</span>
              <span className="sr-only">Signaler un problème</span>
            </Button>
          </FeedbackDialog>
        </div>
      </div>
    </header>
  )
}