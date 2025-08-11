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

export default function SecondYearPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">2ème Année</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deuxième année du cycle préparatoire - Spécialisation et préparation au cycle d'ingénieur
        </p>
      </section>

      {/* Overview */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Présentation de la 2ème Année
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              La deuxième année du cycle préparatoire représente une étape cruciale dans le parcours 
              de l'étudiant. Elle approfondit les connaissances scientifiques et introduit des 
              concepts plus avancés qui préparent directement au cycle d'ingénieur.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">2 Semestres</h3>
                <p className="text-sm text-muted-foreground">Formation intensive</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">8 Matières</h3>
                <p className="text-sm text-muted-foreground">Disciplines avancées</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">80%</h3>
                <p className="text-sm text-muted-foreground">Accès cycle ingénieur</p>
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
                Premier semestre - Approfondissement scientifique
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Matières Principales :</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Analyse 3</span>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Algèbre 3</span>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Physique 3</span>
                    <Badge variant="outline" className="text-xs">Physique</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Mécanique</span>
                    <Badge variant="outline" className="text-xs">Méca</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Informatique 2</span>
                    <Badge variant="outline" className="text-xs">Info</Badge>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" asChild>
                <Link href="/preparatory/2nd-year/semester1">
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
                Deuxième semestre - Préparation au cycle d'ingénieur
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Matières Principales :</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Analyse 4</span>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Probabilités 2</span>
                    <Badge variant="outline" className="text-xs">Math</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Physique 4</span>
                    <Badge variant="outline" className="text-xs">Physique</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Chimie 3</span>
                    <Badge variant="outline" className="text-xs">Chimie</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="text-sm">Informatique 3</span>
                    <Badge variant="outline" className="text-xs">Info</Badge>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" asChild>
                <Link href="/preparatory/2nd-year/semester2">
                  Accéder aux Ressources
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Points Clés de la 2ème Année
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Objectifs Académiques</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Approfondissement des mathématiques avancées
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Introduction aux concepts de la mécanique rationnelle
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Développement de compétences en programmation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Préparation aux examens de passage
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Débouchés</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Accès au cycle d'ingénieur (80% sur dossier)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Possibilité de concours pour les 20% restants
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Choix de spécialité (DIB ou DMS)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Parcours d'excellence en génie civil
                  </li>
                </ul>
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
            <Link href="/preparatory/2nd-year/semester1">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Semestre 1</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">
                Analyse 3, Algèbre 3, Physique 3, Mécanique, Informatique 2
              </p>
              <ArrowRight className="ml-auto h-4 w-4" />
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto p-6 flex flex-col items-start gap-3" asChild>
            <Link href="/preparatory/2nd-year/semester2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Semestre 2</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">
                Analyse 4, Probabilités 2, Physique 4, Chimie 3, Informatique 3
              </p>
              <ArrowRight className="ml-auto h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}