import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  ArrowRight,
  Calendar,
  Target,
  Award
} from "lucide-react"
import Link from "next/link"
import { preparatoryCycle } from "@/lib/study-data"
import { slugify } from "@/lib/utils"

export default function PreparatoryPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">{preparatoryCycle.name}</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deux années de formation fondamentale pour préparer les étudiants aux études d'ingénieur
        </p>
      </section>

      {/* Academic Years */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Années Académiques</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {preparatoryCycle.years.map((year) => (
            <Card key={year.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    {year.name}
                  </CardTitle>
                  <Badge variant="secondary">{year.name}</Badge>
                </div>
                <CardDescription>
                  {year.name} du cycle préparatoire
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {year.semesters.map((semester) => (
                    <div key={semester.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{semester.name}</span>
                      <Button size="sm" asChild>
                        <Link href={`/preparatory/${slugify(year.name)}/${slugify(semester.name)}`}>
                          Accéder
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}