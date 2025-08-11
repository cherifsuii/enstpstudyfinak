import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { StudyMaterialsCard } from "@/components/study-materials-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  BookOpen, 
  Target,
  Users,
  Clock,
  Award,
  Download,
  ExternalLink,
  FileText,
  Video,
  Headphones,
  Calculator,
  Globe,
  Palette,
  Heart,
  Brain,
  Microscope,
  Laptop,
  Ruler,
  DraftingCompass,
  Building,
  Wrench,
  Car,
  Bridge,
  Highway,
  Layers,
  Zap,
  Droplets,
  Hammer,
  HardHat,
  Lightbulb,
  TrendingUp,
  BarChart3,
  MessageSquare,
  Users2,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Search,
  Filter
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { preparatoryCycle } from "@/lib/study-data"

export default function FirstYearSemester1Page() {
  const semesterData = preparatoryCycle.years[0].semesters[0];

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section with Background */}
      <section className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/background.jpg" 
            alt="ENSTP Background" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80" />
        </div>
        <div className="relative z-10 text-center space-y-6 py-16">
          <div className="flex flex-col items-center gap-4">
            <Image 
              src="/enstp-logo.png" 
              alt="ENSTP Logo" 
              width={120} 
              height={120} 
              className="rounded-lg shadow-lg"
            />
            <div className="flex items-center gap-2">
              <Calendar className="h-8 w-8 text-white" />
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                1ère Année - Semestre 1
              </h1>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto px-4">
            Premier semestre de la première année - Acquisition des bases fondamentales pour les futurs ingénieurs
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <GraduationCap className="mr-2 h-5 w-5" />
              8 Modules Principaux
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Clock className="mr-2 h-5 w-5" />
              16 Semaines
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <BookOpen className="mr-2 h-5 w-5" />
              500+ Ressources
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
            <CardTitle className="text-sm">Durée</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
            <p className="text-xs text-muted-foreground">Semaines</p>
          </CardContent>
        </Card>
        <Card className="text-center border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <CardTitle className="text-sm">Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Matières</p>
          </CardContent>
        </Card>
        <Card className="text-center border-l-4 border-l-green-500">
          <CardHeader className="pb-2">
            <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <CardTitle className="text-sm">Charge</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30h+</div>
            <p className="text-xs text-muted-foreground">Par semaine</p>
          </CardContent>
        </Card>
        <Card className="text-center border-l-4 border-l-orange-500">
          <CardHeader className="pb-2">
            <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <CardTitle className="text-sm">Évaluation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">CC</div>
            <p className="text-xs text-muted-foreground">Contrôles continus</p>
          </CardContent>
        </Card>
      </section>

      {/* Subjects Overview */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Modules du Semestre</h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filtrer
            </Button>
            <Button variant="outline" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Rechercher
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="algebra" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="algebra" className="text-xs">Algèbre 1</TabsTrigger>
            <TabsTrigger value="analysis" className="text-xs">Analyse 1</TabsTrigger>
            <TabsTrigger value="physics" className="text-xs">Physique 1</TabsTrigger>
            <TabsTrigger value="chemistry" className="text-xs">Chimie 1</TabsTrigger>
            <TabsTrigger value="computer" className="text-xs">Informatique 1</TabsTrigger>
            <TabsTrigger value="economy" className="text-xs">Économie 1</TabsTrigger>
            <TabsTrigger value="drawing" className="text-xs">Dessin Tech</TabsTrigger>
            <TabsTrigger value="french" className="text-xs">Français 1</TabsTrigger>
          </TabsList>
          
          <TabsContent value="algebra" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Algèbre 1
                </CardTitle>
                <CardDescription>
                  Fondements d'algèbre linéaire et structures algébriques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Maîtrise des espaces vectoriels</li>
                      <li>• Applications linéaires</li>
                      <li>• Matrices et déterminants</li>
                      <li>• Systèmes linéaires</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Résolution de systèmes</li>
                      <li>• Calcul matriciel</li>
                      <li>• Diagonalisation</li>
                      <li>• Applications pratiques</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cours Magistral</Badge>
                  <Badge variant="outline">TD</Badge>
                  <Badge variant="outline">Examen Final</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analysis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Analyse 1
                </CardTitle>
                <CardDescription>
                  Introduction à l'analyse réelle et aux fonctions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Suites et convergences</li>
                      <li>• Fonctions continues</li>
                      <li>• Dérivabilité</li>
                      <li>• Intégration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Calcul de limites</li>
                      <li>• Étude de fonctions</li>
                      <li>• Calcul intégral</li>
                      <li>• Développements limités</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cours Magistral</Badge>
                  <Badge variant="outline">TD</Badge>
                  <Badge variant="outline">Examen Final</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="physics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Physique 1
                </CardTitle>
                <CardDescription>
                  Mécanique du point et thermodynamique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Cinématique du point</li>
                      <li>• Dynamique</li>
                      <li>• Travail et énergie</li>
                      <li>• Thermodynamique</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Application des lois</li>
                      <li>• Résolution de problèmes</li>
                      <li>• Travaux pratiques</li>
                      <li>• Mesures expérimentales</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cours Magistral</Badge>
                  <Badge variant="outline">TD</Badge>
                  <Badge variant="outline">TP</Badge>
                  <Badge variant="outline">Examen Final</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="chemistry" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Chimie 1
                </CardTitle>
                <CardDescription>
                  Chimie générale et atomistique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Structure de la matière</li>
                      <li>• Liaisons chimiques</li>
                      <li>• Réactions chimiques</li>
                      <li>• Thermochimie</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Équilibrage réactions</li>
                      <li>• Calculs stœchiométriques</li>
                      <li>• Manipulation labo</li>
                      <li>• Analyse résultats</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cours Magistral</Badge>
                  <Badge variant="outline">TD</Badge>
                  <Badge variant="outline">TP</Badge>
                  <Badge variant="outline">Examen Final</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="computer" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Informatique 1
                </CardTitle>
                <CardDescription>
                  Introduction à l'informatique et algorithmique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bases de l'informatique</li>
                      <li>• Algorithmique</li>
                      <li>• Programmation</li>
                      <li>• Structures de données</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Analyse problèmes</li>
                      <li>• Conception algorithmes</li>
                      <li>• Programmation</li>
                      <li>• Débuggage</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cours Magistral</Badge>
                  <Badge variant="outline">TD</Badge>
                  <Badge variant="outline">TP</Badge>
                  <Badge variant="outline">Projets</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="economy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Économie 1
                </CardTitle>
                <CardDescription>
                  Introduction aux principes économiques et gestion
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Principes économiques de base</li>
                      <li>• Microéconomie</li>
                      <li>• Macroéconomie</li>
                      <li>• Économie d'entreprise</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Analyse économique</li>
                      <li>• Prise de décision</li>
                      <li>• Gestion de projets</li>
                      <li>• Compréhension marchés</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cours Magistral</Badge>
                  <Badge variant="outline">TD</Badge>
                  <Badge variant="outline">Études de cas</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="drawing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DraftingCompass className="h-5 w-5 text-purple-600" />
                  Dessin Technique 1
                </CardTitle>
                <CardDescription>
                  Bases du dessin technique et industriel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Normes de dessin</li>
                      <li>• Projections orthogonales</li>
                      <li>• Coupes et sections</li>
                      <li>• Cotation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Lecture de plans</li>
                      <li>• Dessin technique</li>
                      <li>• Utilisation logiciels</li>
                      <li>• Communication technique</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cours Magistral</Badge>
                  <Badge variant="outline">TP</Badge>
                  <Badge variant="outline">Projets</Badge>
                  <Badge variant="outline">AutoCAD</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="french" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-red-600" />
                  Français 1
                </CardTitle>
                <CardDescription>
                  Communication et expression française technique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Grammaire technique</li>
                      <li>• Rédaction technique</li>
                      <li>• Communication orale</li>
                      <li>• Terminologie spécialisée</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Rédaction rapports</li>
                      <li>• Présentations orales</li>
                      <li>• Communication professionnelle</li>
                      <li>• Compréhension technique</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cours Magistral</Badge>
                  <Badge variant="outline">TD</Badge>
                  <Badge variant="outline">Exposés</Badge>
                  <Badge variant="outline">Rédactions</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Study Materials */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Ressources Pédagogiques</h2>
        </div>
        
        <div className="space-y-6">
          {semesterData.subjects.map((subject, index) => (
            <StudyMaterialsCard 
              key={index}
              subject={subject.name}
              materials={subject.materials}
            />
          ))}
        </div>
      </section>
    </div>
  )
}