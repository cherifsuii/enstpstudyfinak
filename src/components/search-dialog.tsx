"use client"

import { useState, useEffect } from "react"
import { Search, FileText, BookOpen, GraduationCap, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { engineeringCycle, preparatoryCycle } from "@/lib/study-data"
import type { StudyMaterial, Subject, Semester, Year, Program, Department } from "@/lib/study-data"

interface SearchResult {
  material: StudyMaterial
  subject: string
  semester: string
  year: string
  program: string
  cycle: string
}

interface SearchDialogProps {
  children: React.ReactNode
}

export function SearchDialog({ children }: SearchDialogProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Search function
  const searchMaterials = (searchQuery: string): SearchResult[] => {
    if (!searchQuery.trim()) return []

    const allResults: SearchResult[] = []

    // Search preparatory cycle
    preparatoryCycle.years.forEach((year: Year) => {
      year.semesters.forEach((semester: Semester) => {
        semester.subjects.forEach((subject: Subject) => {
          subject.materials.forEach((material: StudyMaterial) => {
            const searchText = `${material.title} ${subject.name} ${material.type}`.toLowerCase()
            if (searchText.includes(searchQuery.toLowerCase())) {
              allResults.push({
                material,
                subject: subject.name,
                semester: semester.name,
                year: year.name,
                program: preparatoryCycle.name,
                cycle: "Préparatoire"
              })
            }
          })
        })
      })
    })

    // Search engineering cycle
    engineeringCycle.departments.forEach((department: Department) => {
      department.years.forEach((year: Year) => {
        year.semesters.forEach((semester: Semester) => {
          const allSubjects = [...semester.subjects, ...(semester.options || []).flatMap(o => o.subjects)];
          allSubjects.forEach((subject: Subject) => {
            subject.materials.forEach((material: StudyMaterial) => {
              const searchText = `${material.title} ${subject.name} ${material.type}`.toLowerCase()
              if (searchText.includes(searchQuery.toLowerCase())) {
                allResults.push({
                  material,
                  subject: subject.name,
                  semester: semester.name,
                  year: year.name,
                  program: department.name,
                  cycle: `Ingénieur - ${department.slug.toUpperCase()}`
                })
              }
            })
          })
        })
      })
    })

    return allResults.slice(0, 50) // Limit to 50 results
  }

  // Handle search
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    const timeoutId = setTimeout(() => {
      const searchResults = searchMaterials(query)
      setResults(searchResults)
      setIsSearching(false)
    }, 300) // Debounce search

    return () => clearTimeout(timeoutId)
  }, [query])

  // Get icon for material type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course':
        return <BookOpen className="h-4 w-4" />
      case 'exam':
        return <FileText className="h-4 w-4" />
      case 'td':
        return <GraduationCap className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  // Get badge color for material type
  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'course':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'exam':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'td':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'exercise':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'resume':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'book':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Rechercher dans les ressources
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher des cours, examens, TD..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Badge variant="outline" className="text-xs">
                Ctrl+K
              </Badge>
            </div>
          </div>

          {/* Search Results */}
          <ScrollArea className="h-[400px]">
            {isSearching ? (
              <div className="flex items-center justify-center py-8">
                <div className="text-sm text-muted-foreground">Recherche en cours...</div>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-2">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {getTypeIcon(result.material.type)}
                          <h4 className="font-medium text-sm truncate">
                            {result.material.title}
                          </h4>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getTypeBadgeColor(result.material.type)}>
                            {result.material.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {result.material.language}
                          </Badge>
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium">{result.cycle}</span> • {result.year} • {result.semester} • {result.subject}
                        </div>
                      </div>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        onClick={() => setOpen(false)}
                      >
                        <a
                          href={result.material.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Ouvrir
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : query.trim() ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Search className="h-8 w-8 text-muted-foreground mb-2" />
                <div className="text-sm text-muted-foreground">
                  Aucun résultat trouvé pour "{query}"
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Essayez avec d'autres mots-clés
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Search className="h-8 w-8 text-muted-foreground mb-2" />
                <div className="text-sm text-muted-foreground">
                  Commencez à taper pour rechercher
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Recherchez parmi tous les cours, examens et TD
                </div>
              </div>
            )}
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}

