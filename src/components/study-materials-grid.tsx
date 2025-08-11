"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Download, 
  ExternalLink, 
  FileText, 
  BookOpen,
  Video,
  FileImage,
  Filter
} from "lucide-react"

interface StudyMaterial {
  id: string
  title: string
  description: string
  type: "course" | "td" | "exam" | "tp" | "book"
  language: "fr" | "en"
  url: string
  subject: string
  size?: string
}

const materials: StudyMaterial[] = [
  {
    id: "1",
    title: "Algèbre 1 - Cours Complet",
    description: "Support de cours complet pour le module d'Algèbre 1",
    type: "course",
    language: "fr",
    url: "https://drive.google.com/open?id=1toDaW_GXlIcU9JTBsRKN3bFvS0vssFBB",
    subject: "Algèbre 1",
    size: "15MB"
  },
  {
    id: "2",
    title: "Algèbre 1 - TD et Exercices",
    description: "Série d'exercices avec corrigés pour Algèbre 1",
    type: "td",
    language: "fr",
    url: "https://drive.google.com/open?id=1mC9P6VfLeentC0wBiIHBCX_E31Drxbo6",
    subject: "Algèbre 1",
    size: "8MB"
  },
  {
    id: "3",
    title: "Algebra 1 - Complete Course",
    description: "Complete course materials for Algebra 1 in English",
    type: "course",
    language: "en",
    url: "https://drive.google.com/open?id=1yBqbgoGFjLy7Nngo3wXlhKXCyrEMtZTO",
    subject: "Algèbre 1",
    size: "12MB"
  },
  {
    id: "4",
    title: "Analyse 1 - Support de Cours",
    description: "Support complet pour le module d'Analyse 1",
    type: "course",
    language: "fr",
    url: "https://drive.google.com/open?id=10p7YCf0ALx3YNqyhj1csgD17ermqE3jQ",
    subject: "Analyse 1",
    size: "18MB"
  },
  {
    id: "5",
    title: "Analyse 1 - TD Série 1",
    description: "Première série de travaux dirigés en Analyse 1",
    type: "td",
    language: "fr",
    url: "https://drive.google.com/open?id=1d29OOQ99gWGu7TpQyt-oFn3a9AL44CmK",
    subject: "Analyse 1",
    size: "5MB"
  },
  {
    id: "6",
    title: "Analysis 1 - Exercises",
    description: "Exercise collection for Analysis 1 module",
    type: "td",
    language: "en",
    url: "https://drive.google.com/open?id=1e0THhLc5N9XrGmiLrjDZqaCGP1ATgOmD",
    subject: "Analyse 1",
    size: "7MB"
  },
  {
    id: "7",
    title: "Physique 1 - Cours Magistral",
    description: "Cours complet de Physique 1 avec illustrations",
    type: "course",
    language: "fr",
    url: "https://drive.google.com/open?id=1gg3N6GJaMsfzmycbBWc1C_xNh9w6B9IY",
    subject: "Physique 1",
    size: "22MB"
  },
  {
    id: "8",
    title: "Physics 1 - Laboratory Manual",
    description: "Physics 1 laboratory experiments and procedures",
    type: "tp",
    language: "en",
    url: "https://drive.google.com/open?id=1IaLzVn6aDMpZL_Xq_X9hzVKIU8-tNdSk",
    subject: "Physique 1",
    size: "10MB"
  },
  {
    id: "9",
    title: "Chimie 1 - Cours de Chimie Générale",
    description: "Support de cours pour le module de Chimie 1",
    type: "course",
    language: "fr",
    url: "https://drive.google.com/open?id=1wo68ow2R-bShpD3dOKzdoX8WE1JdYiJD",
    subject: "Chimie 1",
    size: "14MB"
  },
  {
    id: "10",
    title: "Chimie 1 - Travaux Pratiques",
    description: "Manuel de travaux pratiques pour Chimie 1",
    type: "tp",
    language: "fr",
    url: "https://drive.google.com/open?id=1LTuuGuWhUc4e1AqmZ9SDAkI7jAVF0H_t",
    subject: "Chimie 1",
    size: "9MB"
  },
  {
    id: "11",
    title: "Informatique 1 - Introduction",
    description: "Cours d'introduction à l'informatique",
    type: "course",
    language: "fr",
    url: "https://drive.google.com/open?id=1zBvi9NPcOv_CMNq_CHxYbdwSKckmJZIM",
    subject: "Informatique 1",
    size: "11MB"
  },
  {
    id: "12",
    title: "Informatique 1 - TP Programmation",
    description: "Travaux pratiques de programmation en Informatique 1",
    type: "tp",
    language: "fr",
    url: "https://drive.google.com/open?id=1B1Sr-XtzmAp_6ytnqy-wCW02QLrwCFrI",
    subject: "Informatique 1",
    size: "6MB"
  }
]

const typeLabels = {
  course: "Cours",
  td: "TD",
  exam: "Examen",
  tp: "TP",
  book: "Livre"
}

const typeIcons = {
  course: BookOpen,
  td: FileText,
  exam: FileText,
  tp: Video,
  book: BookOpen
}

const languageLabels = {
  fr: "Français",
  en: "English"
}

interface StudyMaterialsGridProps {
  materials: StudyMaterial[]
  subject?: string
}

function StudyMaterialsGrid({ materials, subject }: StudyMaterialsGridProps) {
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")

  const filteredMaterials = materials.filter(material => {
    const typeMatch = selectedType === "all" || material.type === selectedType
    const languageMatch = selectedLanguage === "all" || material.language === selectedLanguage
    const subjectMatch = !subject || material.subject === subject
    return typeMatch && languageMatch && subjectMatch
  })

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span className="text-sm font-medium">Filtres:</span>
        </div>
        <Tabs value={selectedType} onValueChange={setSelectedType}>
          <TabsList>
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="course">Cours</TabsTrigger>
            <TabsTrigger value="td">TD</TabsTrigger>
            <TabsTrigger value="tp">TP</TabsTrigger>
            <TabsTrigger value="exam">Examens</TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <TabsList>
            <TabsTrigger value="all">Toutes langues</TabsTrigger>
            <TabsTrigger value="fr">Français</TabsTrigger>
            <TabsTrigger value="en">English</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMaterials.map((material) => {
          const IconComponent = typeIcons[material.type]
          return (
            <Card key={material.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {typeLabels[material.type]}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {languageLabels[material.language]}
                  </Badge>
                </div>
                <CardTitle className="text-base leading-tight">
                  {material.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {material.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <span>{material.subject}</span>
                  {material.size && <span>{material.size}</span>}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={material.url} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Télécharger
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={material.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-8">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Aucune ressource trouvée pour les filtres sélectionnés.</p>
        </div>
      )}
    </div>
  )
}

export { StudyMaterialsGrid }