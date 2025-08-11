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

export default function PreparatoryPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Cycle Préparatoire</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deux années de formation fondamentale pour préparer les étudiants aux études d'ingénieur
        </p>
      </section>

      {/* Overview */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Présentation du Cycle
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Le cycle préparatoire de l'ENSTP constitue la première étape du parcours d'excellence 
              pour les futurs ingénieurs. D'une durée de deux années, il vise à fournir aux étudiants 
              les fondements scientifiques et techniques nécessaires pour aborder avec succès 
              le cycle d'ingénieur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">2 Ans</h3>
                <p className="text-sm text-muted-foreground">Formation intensive</p>
              </div>
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">4 Semestres</h3>
                <p className="text-sm text-muted-foreground">Programme structuré</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">80%</h3>
                <p className="text-sm text-muted-foreground">Accès au cycle ingénieur</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Academic Years */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Années Académiques</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1st Year */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  1ère Année
                </CardTitle>
                <Badge variant="secondary">Année 1</Badge>
              </div>
              <CardDescription>
                Première année du cycle préparatoire - Fondements scientifiques
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Semestre 1</span>
                  <Button size="sm" asChild>
                    <Link href="/preparatory/1st-year/semester1">
                      Accéder
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Semestre 2</span>
                  <Button size="sm" asChild>
                    <Link href="/preparatory/1st-year/semester2">
                      Accéder
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Matières Principales :</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Mathématiques</Badge>
                  <Badge variant="outline" className="text-xs">Physique</Badge>
                  <Badge variant="outline" className="text-xs">Chimie</Badge>
                  <Badge variant="outline" className="text-xs">Informatique</Badge>
                  <Badge variant="outline" className="text-xs">Langues</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2nd Year */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  2ème Année
                </CardTitle>
                <Badge variant="secondary">Année 2</Badge>
              </div>
              <CardDescription>
                Deuxième année du cycle préparatoire - Approfondissement et spécialisation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Semestre 1</span>
                  <Button size="sm" asChild>
                    <Link href="/preparatory/2nd-year/semester1">
                      Accéder
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-medium">Semestre 2</span>
                  <Button size="sm" asChild>
                    <Link href="/preparatory/2nd-year/semester2">
                      Accéder
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Matières Principales :</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Mathématiques</Badge>
                  <Badge variant="outline" className="text-xs">Physique</Badge>
                  <Badge variant="outline" className="text-xs">Chimie</Badge>
                  <Badge variant="outline" className="text-xs">Mécanique</Badge>
                  <Badge variant="outline" className="text-xs">Probabilités</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Conditions d'Admission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold">Exigences Académiques</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Baccalauréat scientifique
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Priorité aux filières : Mathématiques, Techniques Mathématiques, Sciences Expérimentales
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Sélection basée sur la moyenne générale (Mathématiques + Physique)
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Passage au Cycle d'Ingénieur</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    80% des étudiants admis en 2ème année accèdent directement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    20% restants sélectionnés par concours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Concours ouvert aux étudiants non classés et candidats externes
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Access */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Accès Rapide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto p-6 flex flex-col gap-2" asChild>
            <Link href="/preparatory/1st-year/semester1">
              <GraduationCap className="h-8 w-8" />
              <span>1ère Année - S1</span>
              <Badge variant="secondary" className="text-xs">Mathématiques</Badge>
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto p-6 flex flex-col gap-2" asChild>
            <Link href="/preparatory/1st-year/semester2">
              <GraduationCap className="h-8 w-8" />
              <span>1ère Année - S2</span>
              <Badge variant="secondary" className="text-xs">Physique</Badge>
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto p-6 flex flex-col gap-2" asChild>
            <Link href="/preparatory/2nd-year/semester1">
              <GraduationCap className="h-8 w-8" />
              <span>2ème Année - S1</span>
              <Badge variant="secondary" className="text-xs">Mécanique</Badge>
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto p-6 flex flex-col gap-2" asChild>
            <Link href="/preparatory/2nd-year/semester2">
              <GraduationCap className="h-8 w-8" />
              <span>2ème Année - S2</span>
              <Badge variant="secondary" className="text-xs">Chimie</Badge>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}