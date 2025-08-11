import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  Building, 
  Users, 
  Award,
  Globe,
  Clock,
  BookOpen,
  Target
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight">
          À propos de l'<span className="text-primary">ENSTP</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          École Nationale Supérieure des Travaux Publics
        </p>
      </section>

      {/* School History */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Histoire & Évolution</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Fondation et Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Dans le cadre du mouvement de renouveau qui a suivi l'indépendance de l'Algérie, 
                le pays a rapidement pris conscience de l'importance de former une nouvelle génération 
                de leaders et d'experts capables de relever les défis de la construction nationale.
              </p>
              <p className="text-muted-foreground">
                Ainsi, en 1966, l'École Nationale Supérieure des Travaux Publics (ENSTP) a été fondée, 
                connue alors sous le nom d'École des Ingénieurs des Travaux Publics (EITP). 
                C'était la première école d'ingénieurs en construction, travaux publics et hydraulique en Algérie.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Développement et Croissance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">1987</Badge>
                  <span className="text-sm">
                    Devenue institut national de formation sous double tutelle
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">1998</Badge>
                  <span className="text-sm">
                    Transformation en établissement universitaire
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">Aujourd'hui</Badge>
                  <span className="text-sm">
                    Institution prestigieuse rayonnant internationalement
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Au fil de six décennies, l'école a su se réinventer tout en maintenant son objectif fondamental 
                d'accompagner le développement national.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Mission */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Mission & Vision</h2>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Notre Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-lg">
              L'ENSTP se consacre à la formation des futurs ingénieurs dans les domaines des infrastructures 
              et des travaux publics, en développant des professionnels hautement qualifiés capables de 
              répondre aux besoins techniques des secteurs public et privé.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Approche Pédagogique</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fondements théoriques solides</li>
                  <li>• Intégration pratique professionnelle</li>
                  <li>• Stages et visites terrain</li>
                  <li>• Projets de fin d'études</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Excellence Académique</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Corps professoral qualifié</li>
                  <li>• Programmes actualisés</li>
                  <li>• Recherche et innovation</li>
                  <li>• Partenariats internationaux</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Academic Structure */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Structure Académique</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Cycle Préparatoire
              </CardTitle>
              <CardDescription>2 années de formation fondamentale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Conditions d'Admission</h4>
                  <p className="text-sm text-muted-foreground">
                    Baccalauréat scientifique, avec priorité aux filières mathématiques, 
                    techniques mathématiques et sciences expérimentales.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">Organisation des Études</h4>
                  <p className="text-sm text-muted-foreground">
                    Mathématiques, Physique, Chimie, Mécanique, Informatique, 
                    Langues et Sciences Humaines.
                  </p>
                </div>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm">
                  80% des étudiants admis en 2ème année accèdent directement à la 1ère année 
                  du cycle d'ingénieur. Les 20% restants sont sélectionnés par concours.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Cycle d'Ingénieur
              </CardTitle>
              <CardDescription>3 années de spécialisation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">1ère Année</h4>
                  <p className="text-sm text-muted-foreground">
                    Tronc commun avec cours théoriques et pratiques, visites techniques 
                    et stages d'immersion.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold">2ème et 3ème Année</h4>
                  <p className="text-sm text-muted-foreground">
                    Spécialisation selon le département choisi (DIB ou DMS), 
                    cours communs et stages terrain.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Badge variant="outline" className="justify-center">D.I.B.</Badge>
                <Badge variant="outline" className="justify-center">D.M.S.</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Departments */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Building className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Départements de Spécialisation</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                D.I.B. - Département d'Infrastructure de Base
              </CardTitle>
              <CardDescription>
                Spécialisation en infrastructures de base
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Le département forme des ingénieurs capables de concevoir, réaliser 
                et gérer les infrastructures de base essentielles au développement national.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Options de Spécialisation :</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• Voie ferrée et pont rail</p>
                  <p>• Travaux maritimes et bases aériennes</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Domaines d'Expertise :</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Transport</Badge>
                  <Badge variant="secondary" className="text-xs">Ouvrages d'art</Badge>
                  <Badge variant="secondary" className="text-xs">Géotechnique</Badge>
                  <Badge variant="secondary" className="text-xs">Hydraulique</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                D.M.S. - Département des Matériaux et Structures
              </CardTitle>
              <CardDescription>
                Spécialisation en matériaux et structures
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Le département forme des ingénieurs spécialisés dans les matériaux de 
                construction et le calcul des structures pour tous types de projets.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold">Options de Spécialisation :</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• Bâtiments</p>
                  <p>• Tunnels</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Domaines d'Expertise :</h4>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">Béton</Badge>
                  <Badge variant="secondary" className="text-xs">Charpente</Badge>
                  <Badge variant="secondary" className="text-xs">RDM</Badge>
                  <Badge variant="secondary" className="text-xs">Matériaux</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* International Impact */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Rayonnement International</h2>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Impact et Reconnaissance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <Users className="h-12 w-12 text-primary mx-auto" />
                <div className="text-2xl font-bold">6000+</div>
                <p className="text-sm text-muted-foreground">Ingénieurs algériens diplômés</p>
              </div>
              <div className="space-y-2">
                <Globe className="h-12 w-12 text-primary mx-auto" />
                <div className="text-2xl font-bold">300+</div>
                <p className="text-sm text-muted-foreground">Ingénieurs étrangers diplômés</p>
              </div>
              <div className="space-y-2">
                <Award className="h-12 w-12 text-primary mx-auto" />
                <div className="text-2xl font-bold">32</div>
                <p className="text-sm text-muted-foreground">Pays représentés</p>
              </div>
            </div>
            <p className="text-muted-foreground text-center">
              Aujourd'hui, l'ENSTP s'affirme comme une institution de renommée internationale, 
              contribuant au développement des connaissances et des compétences aux niveaux 
              national et international dans le domaine des travaux publics.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Career Opportunities */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Débouchés Professionnels</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secteur Public</h3>
              <p className="text-sm text-muted-foreground">
                Ministères, administrations publiques, établissements d'État
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secteur Privé</h3>
              <p className="text-sm text-muted-foreground">
                Entreprises de travaux publics, bureaux d'études, sociétés d'ingénierie
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">International</h3>
              <p className="text-sm text-muted-foreground">
                Projets internationaux, organisations multinationales, conseil
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}