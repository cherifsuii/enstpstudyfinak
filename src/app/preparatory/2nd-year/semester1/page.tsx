import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { StudyMaterialsCard } from "@/components/study-materials-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, BookOpen, Target } from "lucide-react"
import { preparatoryCycle } from "@/lib/study-data"

export default function SecondYearSemester1Page() {
  const semesterData = preparatoryCycle.years[1].semesters[0];

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">2ème Année - Semestre 1</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Premier semestre de la deuxième année - Approfondissement scientifique
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
              Le premier semestre de la deuxième année approfondit les connaissances acquises 
              en première année et introduit des concepts plus avancés en mathématiques, physique 
              et mécanique, préparant ainsi les étudiants au cycle d'ingénieur.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">16 Semaines</h3>
                <p className="text-sm text-muted-foreground">Durée du semestre</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">5 Modules</h3>
                <p className="text-sm text-muted-foreground">Matières principales</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Target className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Préparation</h3>
                <p className="text-sm text-muted-foreground">Cycle ingénieur</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Subjects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Modules du Semestre</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MDF</CardTitle>
              <CardDescription>Mécanique des Fluides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Fluides réels, dynamique des fluides, applications
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MDC</CardTitle>
              <CardDescription>Mécanique Des Continus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Tenseurs, élasticité, mécanique des milieux continus
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MDS</CardTitle>
              <CardDescription>Mécanique Des Solides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Résistance des matériaux, poutres, structures
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MMC</CardTitle>
              <CardDescription>Mécanique Des Milieux Continus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Élasticité, plasticité, comportement des matériaux
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">RDM</CardTitle>
              <CardDescription>Résistance Des Matériaux</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Calcul des structures, contraintes, déformations
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Topographie</CardTitle>
              <CardDescription>Techniques de mesure</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Géomatique</Badge>
                <p className="text-sm text-muted-foreground">
                  Mesures, plans, cartographie, GPS
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Géologie</CardTitle>
              <CardDescription>Géologie appliquée</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Sciences de la terre</Badge>
                <p className="text-sm text-muted-foreground">
                  Roches, sols, hydrogéologie, géotechnique
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">ANANUM</CardTitle>
              <CardDescription>Analyse Numérique</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mathématiques</Badge>
                <p className="text-sm text-muted-foreground">
                  Méthodes numériques, algorithmes, applications
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hydrologie</CardTitle>
              <CardDescription>Hydrologie Appliquée</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Hydraulique</Badge>
                <p className="text-sm text-muted-foreground">
                  Cycle de l'eau, bassins versants, ressources
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
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