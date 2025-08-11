import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  Users, 
  ArrowRight,
  Calendar,
  Target,
  Award,
  Building,
  Wrench
} from "lucide-react"
import Link from "next/link"

export default function EngineeringPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Cycle d'Ingénieur</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Trois années de spécialisation en génie civil avec deux départements d'excellence
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
              Le cycle d'ingénieur de l'ENSTP représente le cœur de la formation, offrant une 
              spécialisation avancée en génie civil sur trois années. Les étudiants choisissent 
              entre deux départements prestigieux : D.I.B. (Infrastructure de Base) et D.M.S. 
              (Matériaux et Structures).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">3 Ans</h3>
                <p className="text-sm text-muted-foreground">Formation spécialisée</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">6 Semestres</h3>
                <p className="text-sm text-muted-foreground">Programme complet</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">2 Départements</h3>
                <p className="text-sm text-muted-foreground">DIB & DMS</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Award className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Diplôme</h3>
                <p className="text-sm text-muted-foreground">Ingénieur d'État</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Departments */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Départements de Spécialisation</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* DIB Department */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  D.I.B.
                </CardTitle>
                <Badge variant="secondary">Infrastructure de Base</Badge>
              </div>
              <CardDescription>
                Département d'Infrastructure de Base - Spécialisation en infrastructures
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    Former des ingénieurs capables de concevoir, réaliser et gérer 
                    les infrastructures de base essentielles au développement.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Options de Spécialisation</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Voie ferrée et pont rail</p>
                    <p>• Travaux maritimes et bases aériennes</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Domaines d'Expertise :</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Transport</Badge>
                  <Badge variant="outline" className="text-xs">Ouvrages d'art</Badge>
                  <Badge variant="outline" className="text-xs">Géotechnique</Badge>
                  <Badge variant="outline" className="text-xs">Hydraulique</Badge>
                </div>
              </div>
              
              <Button className="w-full" asChild>
                <Link href="/engineering/dib">
                  Explorer D.I.B.
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* DMS Department */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  D.M.S.
                </CardTitle>
                <Badge variant="secondary">Matériaux et Structures</Badge>
              </div>
              <CardDescription>
                Département des Matériaux et Structures - Spécialisation en construction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    Former des ingénieurs spécialisés dans les matériaux de construction 
                    et le calcul des structures pour tous types de projets.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Options de Spécialisation</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Bâtiments</p>
                    <p>• Tunnels</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Domaines d'Expertise :</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Béton</Badge>
                  <Badge variant="outline" className="text-xs">Charpente</Badge>
                  <Badge variant="outline" className="text-xs">RDM</Badge>
                  <Badge variant="outline" className="text-xs">Matériaux</Badge>
                </div>
              </div>
              
              <Button className="w-full" asChild>
                <Link href="/engineering/dms">
                  Explorer D.M.S.
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Structure */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Structure du Programme
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1st Year */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary">1ère</span>
                  </div>
                  <h3 className="font-semibold">1ère Année</h3>
                  <p className="text-sm text-muted-foreground">Tronc commun</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Cours fondamentaux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Visites techniques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Stage d'immersion</span>
                  </div>
                </div>
              </div>

              {/* 2nd Year */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary">2ème</span>
                  </div>
                  <h3 className="font-semibold">2ème Année</h3>
                  <p className="text-sm text-muted-foreground">Spécialisation</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Cours de spécialité</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Projets techniques</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Stage d'insertion</span>
                  </div>
                </div>
              </div>

              {/* 3rd Year */}
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary">3ème</span>
                  </div>
                  <h3 className="font-semibold">3ème Année</h3>
                  <p className="text-sm text-muted-foreground">Projet de fin d'études</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Cours de master</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Projet PFE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Soutenance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Double Diplôme :</h4>
              <p className="text-sm text-muted-foreground">
                À la fin du cycle, les étudiants obtiennent simultanément le diplôme d'Ingénieur d'État 
                en Travaux Publics et le grade de Master dans leur spécialité.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Access */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Accès Rapide</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto p-6 flex flex-col gap-2" asChild>
            <Link href="/engineering/dib/1st-year/semester1">
              <Building className="h-8 w-8" />
              <span>D.I.B. - S1</span>
              <Badge variant="secondary" className="text-xs">1ère Année</Badge>
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto p-6 flex flex-col gap-2" asChild>
            <Link href="/engineering/dib/1st-year/semester2">
              <Building className="h-8 w-8" />
              <span>D.I.B. - S2</span>
              <Badge variant="secondary" className="text-xs">1ère Année</Badge>
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto p-6 flex flex-col gap-2" asChild>
            <Link href="/engineering/dms/1st-year/semester1">
              <Wrench className="h-8 w-8" />
              <span>D.M.S. - S1</span>
              <Badge variant="secondary" className="text-xs">1ère Année</Badge>
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto p-6 flex flex-col gap-2" asChild>
            <Link href="/engineering/dms/1st-year/semester2">
              <Wrench className="h-8 w-8" />
              <span>D.M.S. - S2</span>
              <Badge variant="secondary" className="text-xs">1ère Année</Badge>
            </Link>
          </Button>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="space-y-6">
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Années Supérieures
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-2">2ème Année</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Spécialisation avancée et projets techniques
                </p>
                <Badge variant="outline">Bientôt disponible</Badge>
              </div>
              
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-2">3ème Année</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Projet de fin d'études et soutenance
                </p>
                <Badge variant="outline">Bientôt disponible</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}