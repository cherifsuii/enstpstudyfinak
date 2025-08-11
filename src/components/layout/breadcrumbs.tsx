"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrent?: boolean
}

export function Breadcrumbs() {
  const pathname = usePathname()
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Accueil", href: "/" }
    ]

    let currentPath = ""
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('And', 'et')
        .replace('Year', 'Année')
        .replace('Semester', 'Semestre')
        .replace('Preparatory', 'Cycle Préparatoire')
        .replace('Engineering', 'Cycle d\'Ingénieur')
        .replace('Dib', 'D.I.B.')
        .replace('Dms', 'D.M.S.')
        .replace('1st', '1ère')
        .replace('2nd', '2ème')
        .replace('3rd', '3ème')
        .replace('About', 'À propos')
      
      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrent: index === segments.length - 1
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length === 1) {
    return null
  }

  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center space-x-1 text-sm text-muted-foreground">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="mx-2 h-4 w-4" />
          )}
          {breadcrumb.isCurrent ? (
            <span className="text-foreground font-medium">
              {breadcrumb.label}
            </span>
          ) : (
            <Link
              href={breadcrumb.href}
              className={cn(
                "hover:text-foreground transition-colors",
                index === 0 && "flex items-center"
              )}
            >
              {index === 0 && <Home className="mr-1 h-4 w-4" />}
              {breadcrumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}