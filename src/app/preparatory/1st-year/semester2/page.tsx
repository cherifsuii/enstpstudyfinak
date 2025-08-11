import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { StudyMaterialsCard } from "@/components/study-materials-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar, 
  BookOpen, 
  Target,
  Users,
  Clock,
  Award
} from "lucide-react"
import { preparatoryCycle } from "@/lib/study-data"

export default function FirstYearSemester2Page() {
  const semesterData = preparatoryCycle.years[0].semesters[1];

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">1ère Année - Semestre 2</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deuxième semestre de la première année - Approfondissement des connaissances
        </p>
      </section>

      {/* Overview */}
      <section className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Présentation du Semestre
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Le deuxième semestre de la première année approfondit les concepts fondamentaux 
              introduits au premier semestre et introduit de nouvelles matières essentielles. 
              Les étudiants développent leurs compétences en mathématiques, physique, chimie 
              et découvrent les probabilités.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Clock className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">16 Semaines</h3>
                <p className="text-sm text-muted-foreground">Durée du semestre</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">5 Modules</h3>
                <p className="text-sm text-muted-foreground">Matières principales</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Users className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">32h+</h3>
                <p className="text-sm text-muted-foreground">Par semaine</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Award className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Examens</h3>
                <p className="text-sm text-muted-foreground">Contrôles continus</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Subjects Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Modules du Semestre</h2>
        
        <Tabs defaultValue="algebra" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="algebra">Algèbre 2</TabsTrigger>
            <TabsTrigger value="analysis">Analyse 2</TabsTrigger>
            <TabsTrigger value="physics">Physique 2</TabsTrigger>
            <TabsTrigger value="chemistry">Chimie 2</TabsTrigger>
            <TabsTrigger value="probability">Probabilités</TabsTrigger>
          </TabsList>
          
          <TabsContent value="algebra" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Algèbre 2
                </CardTitle>
                <CardDescription>
                  Algèbre linéaire avancée et formes quadratiques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Réduction des endomorphismes</li>
                      <li>• Diagonalisation</li>
                      <li>• Formes quadratiques</li>
                      <li>• Espaces euclidiens</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Réduction matricielle</li>
                      <li>• Orthogonalité</li>
                      <li>• Applications géométriques</li>
                      <li>• Optimisation</li>
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
                  Analyse 2
                </CardTitle>
                <CardDescription>
                  Analyse avancée et calcul intégral
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Intégration généralisée</li>
                      <li>• Équations différentielles</li>
                      <li>• Fonctions de plusieurs variables</li>
                      <li>• Séries numériques</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Calcul intégral avancé</li>
                      <li>• Résolution d'équations</li>
                      <li>• Analyse multivariable</li>
                      <li>• Convergence de séries</li>
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
                  Physique 2
                </CardTitle>
                <CardDescription>
                  Électricité et électromagnétisme
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Électrostatique</li>
                      <li>• Électrocinétique</li>
                      <li>• Magnétostatique</li>
                      <li>• Électromagnétisme</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Lois fondamentales</li>
                      <li>• Analyse de circuits</li>
                      <li>• Applications pratiques</li>
                      <li>• Travaux pratiques</li>
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
                  Chimie 2
                </CardTitle>
                <CardDescription>
                  Thermodynamique chimique et cinétique
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Thermodynamique</li>
                      <li>• Équilibres chimiques</li>
                      <li>• Cinétique chimique</li>
                      <li>• Électrochimie</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Calculs thermodynamiques</li>
                      <li>• Prévision réactions</li>
                      <li>• Vitesses de réaction</li>
                      <li>• Manipulations labo</li>
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
          
          <TabsContent value="probability" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Probabilités
                </CardTitle>
                <CardDescription>
                  Introduction aux probabilités et statistiques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Objectifs:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Probabilités élémentaires</li>
                      <li>• Variables aléatoires</li>
                      <li>• Lois de probabilité</li>
                      <li>• Statistique descriptive</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences visées:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Calcul de probabilités</li>
                      <li>• Analyse de données</li>
                      <li>• Modélisation</li>
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