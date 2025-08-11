import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  ArrowRight,
  BookOpen,
  Target,
  Users,
  Calendar
} from "lucide-react"
import Link from "next/link"

export default function FirstYearPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">1ère Année</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Première année du cycle préparatoire - Acquisition des fondements scientifiques
        </p>
      </section>

      {/* Overview */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Présentation de la 1ère Année
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              La première année du cycle préparatoire constitue une étape fondamentale dans le parcours 
              de l'étudiant ingénieur. Elle vise à renforcer les connaissances scientifiques acquises 
              au lycée et à introduire les concepts de base nécessaires pour la suite du cursus.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">2 Semestres</h3>
                <p className="text-sm text-muted-foreground">Formation continue</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">8 Matières</h3>
                <p className="text-sm text-muted-foreground">Principales disciplines</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">30+ Heures</h3>
                <p className="text-sm text-muted-foreground">Par semaine</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Semesters */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Semestres</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Semester 1 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Semestre 1
                </CardTitle>
                <Badge variant="secondary">S1</Badge>
              </div>
              <CardDescription>
                Premier semestre - Bases fondamentales
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Matières Principales :</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Algèbre 1</span>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Analyse 1</span>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Physique 1</span>
                    <Badge variant="outline" className="text-xs">Physique</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Chimie 1</span>
                    <Badge variant="outline" className="text-xs">Chimie</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Informatique 1</span>
                    <Badge variant="outline" className="text-xs">Info</Badge>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" asChild>
                <Link href="/preparatory/1st-year/semester1">
                  Accéder aux Ressources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Semester 2 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Semestre 2
                </CardTitle>
                <Badge variant="secondary">S2</Badge>
              </div>
              <CardDescription>
                Deuxième semestre - Approfondissement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Matières Principales :</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Algèbre 2</span>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Analyse 2</span>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Physique 2</span>
                    <Badge variant="outline" className="text-xs">Physique</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Chimie 2 (Thermodynamique)</span>
                    <Badge variant="outline" className="text-xs">Chimie</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Probabilités</span>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" asChild>
                <Link href="/preparatory/1st-year/semester2">
                  Accéder aux Ressources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Study Materials */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Ressources Pédagogiques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Accédez à une collection complète de ressources pour chaque matière, 
              incluant des cours, exercices, examens et corrections.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Cours</h4>
                <p className="text-xs text-muted-foreground">Supports complets</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">TD</h4>
                <p className="text-xs text-muted-foreground">Travaux dirigés</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">Examens</h4>
                <p className="text-xs text-muted-foreground">Sujets et corrigés</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm">TP</h4>
                <p className="text-xs text-muted-foreground">Travaux pratiques</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Navigation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Navigation Rapide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto p-6 flex flex-col items-start gap-3" asChild>
            <Link href="/preparatory/1st-year/semester1">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Semestre 1</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">
                Algèbre 1, Analyse 1, Physique 1, Chimie 1, Informatique 1
              </p>
              <ArrowRight className="ml-auto h-4 w-4" />
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto p-6 flex flex-col items-start gap-3" asChild>
            <Link href="/preparatory/1st-year/semester2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Semestre 2</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">
                Algèbre 2, Analyse 2, Physique 2, Chimie 2, Probabilités
              </p>
              <ArrowRight className="ml-auto h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}