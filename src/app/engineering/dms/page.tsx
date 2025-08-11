import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Wrench, 
  ArrowRight,
  BookOpen,
  Target,
  Users,
  Calendar,
  Award,
  Building,
  Tunnel
} from "lucide-react"
import Link from "next/link"

export default function DMSPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <Wrench className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">D.M.S. - Département des Matériaux et Structures</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Spécialisation en matériaux de construction et calcul des structures - Bâtiments et tunnels
        </p>
      </section>

      {/* Overview */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Présentation du Département
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Le Département des Matériaux et Structures (D.M.S.) forme des ingénieurs spécialisés 
              dans les matériaux de construction et le calcul des structures. Les étudiants 
              acquièrent une expertise pointue dans la conception, le dimensionnement et la 
              réalisation de structures de tous types.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">3 Ans</h3>
                <p className="text-sm text-muted-foreground">Formation spécialisée</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">2 Options</h3>
                <p className="text-sm text-muted-foreground">Spécialisations</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">30+ Modules</h3>
                <p className="text-sm text-muted-foreground">Cours spécialisés</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Award className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">PFE</h3>
                <p className="text-sm text-muted-foreground">Projet appliqué</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Specializations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Options de Spécialisation</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Buildings Option */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Bâtiments
                </CardTitle>
                <Badge variant="secondary">Option 1</Badge>
              </div>
              <CardDescription>
                Spécialisation en conception et calcul de structures de bâtiments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Compétences Clés</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Calcul de structures béton</li>
                    <li>• Conception parasismique</li>
                    <li>• Thermique du bâtiment</li>
                    <li>• Pathologie des structures</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Applications</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bâtiments résidentiels</li>
                    <li>• Immeubles de grande hauteur</li>
                    <li>• Structures industrielles</li>
                    <li>• Réhabilitation</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Béton armé</Badge>
                <Badge variant="outline" className="text-xs">Charpente métallique</Badge>
                <Badge variant="outline" className="text-xs">Thermique</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Tunnels Option */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Tunnel className="h-5 w-5 text-primary" />
                  Tunnels
                </CardTitle>
                <Badge variant="secondary">Option 2</Badge>
              </div>
              <CardDescription>
                Spécialisation en conception et réalisation d'ouvrages souterrains
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Compétences Clés</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Mécanique des roches</li>
                    <li>• Conception de tunnels</li>
                    <li>• Soutènement et blindage</li>
                    <li>• Ventilation et sécurité</li>
                  </ul>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Applications</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Tunnels routiers</li>
                    <li>• Tunnels ferroviaires</li>
                    <li>• Métros</li>
                    <li>• Ouvrages souterrains</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Géotechnique</Badge>
                <Badge variant="outline" className="text-xs">Mécanique des roches</Badge>
                <Badge variant="outline" className="text-xs">Soutènement</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Parcours de Formation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 1st Year */}
              <div className="space-y-3">
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
                    <span>RDM et Structures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Béton Armé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Mécanique des Sols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Matériaux</span>
                  </div>
                </div>
              </div>

              {/* 2nd Year */}
              <div className="space-y-3">
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
                    <span>Cours d'option</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Béton Précontraint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Stage d'insertion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Projets techniques</span>
                  </div>
                </div>
              </div>

              {/* 3rd Year */}
              <div className="space-y-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="font-bold text-primary">3ème</span>
                  </div>
                  <h3 className="font-semibold">3ème Année</h3>
                  <p className="text-sm text-muted-foreground">Projet PFE</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Cours Master</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Matériaux innovants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Stage PFE (3 mois)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Soutenance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Stages et Projets :</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium">Stage d'immersion</p>
                  <p className="text-muted-foreground">25 jours - Été 1ère année</p>
                </div>
                <div>
                  <p className="font-medium">Stage d'insertion</p>
                  <p className="text-muted-foreground">25 jours - Été 2ème année</p>
                </div>
                <div>
                  <p className="font-medium">Stage PFE</p>
                  <p className="text-muted-foreground">3 mois - 3ème année</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Access */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Accès aux Ressources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto p-6 flex flex-col items-start gap-3" asChild>
            <Link href="/engineering/dms/1st-year/semester1">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">1ère Année - Semestre 1</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">
                RDM, Béton Armé, Mécanique des Sols, Matériaux
              </p>
              <ArrowRight className="ml-auto h-4 w-4" />
            </Link>
          </Button>
          
          <Button variant="outline" className="h-auto p-6 flex flex-col items-start gap-3" asChild>
            <Link href="/engineering/dms/1st-year/semester2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">1ère Année - Semestre 2</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">
                Structures, Béton Précontraint, Géotechnique, Route
              </p>
              <ArrowRight className="ml-auto h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Débouchés Professionnels
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Secteur Public</h4>
                <p className="text-sm text-muted-foreground">
                  Ministères, agences publiques, contrôle technique
                </p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">Secteur Privé</h4>
                <p className="text-sm text-muted-foreground">
                  Bureaux d'études, entreprises de construction, industries
                </p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold">International</h4>
                <p className="text-sm text-muted-foreground">
                  Grands projets, expertise, conseil et formation
                </p>
              </div>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Métiers Accessibles :</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Ingénieur structures</Badge>
                <Badge variant="outline">Ingénieur matériaux</Badge>
                <Badge variant="outline">Ingénieur béton</Badge>
                <Badge variant="outline">Ingénieur géotechnicien</Badge>
                <Badge variant="outline">Chef de projet</Badge>
                <Badge variant="outline">Expert technique</Badge>
                <Badge variant="outline">Contrôleur technique</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}