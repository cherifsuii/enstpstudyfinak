import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  ArrowRight,
  Building,
  Wrench
} from "lucide-react"
import Link from "next/link"
import { engineeringCycle } from "@/lib/study-data"

export default function EngineeringPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">{engineeringCycle.name}</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Trois années de spécialisation en génie civil avec deux départements d'excellence
        </p>
      </section>

      {/* Departments */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Départements de Spécialisation</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {engineeringCycle.departments.map((department) => (
            <Card key={department.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {department.slug === 'dib' ? <Building className="h-5 w-5 text-primary" /> : <Wrench className="h-5 w-5 text-primary" />}
                    {department.name}
                  </CardTitle>
                  <Badge variant="secondary">{department.slug.toUpperCase()}</Badge>
                </div>
                <CardDescription>
                  {department.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" asChild>
                  <Link href={`/engineering/${department.slug}`}>
                    Explorer {department.slug.toUpperCase()}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}