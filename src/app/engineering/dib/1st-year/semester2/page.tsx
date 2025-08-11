import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { StudyMaterialsCard } from "@/components/study-materials-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, BookOpen, Target, Building } from "lucide-react"
import { dibCycle } from "@/lib/study-data"

export default function DIBFirstYearSemester2Page() {
  const semesterData = dibCycle.years[0].semesters[1];

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">D.I.B. - 1ère Année - Semestre 2</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deuxième semestre du cycle d'ingénieur D.I.B. - Application et spécialisation
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
              Le deuxième semestre approfondit les connaissances acquises au premier semestre 
              et introduit les concepts spécifiques aux infrastructures de base. Les étudiants 
              commencent à se spécialiser dans les domaines propres au département D.I.B.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">16 Semaines</h3>
                <p className="text-sm text-muted-foreground">Durée du semestre</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">{semesterData.subjects.length} Modules</h3>
                <p className="text-sm text-muted-foreground">Matières principales</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Building className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Spécialisation</h3>
                <p className="text-sm text-muted-foreground">DIB Engineering</p>
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
              <CardTitle className="text-lg">ROUTE</CardTitle>
              <CardDescription>Conception et construction routière</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Génie civil</Badge>
                <p className="text-sm text-muted-foreground">
                  Routes, chaussées, matériaux, durabilité
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">RDM 2</CardTitle>
              <CardDescription>Résistance Des Matériaux avancée</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Structures complexes, calculs avancés
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MMC 2</CardTitle>
              <CardDescription>Mécanique Des Milieux Continus 2</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Comportement non linéaire, plasticité
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MDS 3</CardTitle>
              <CardDescription>Mécanique Des Solides 3</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Structures avancées, méthodes numériques
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MDC 2</CardTitle>
              <CardDescription>Mécanique Des Continus 2</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Mécanique des fluides, thermodynamique
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hydraulique</CardTitle>
              <CardDescription>Hydraulique Appliquée</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Hydraulique</Badge>
                <p className="text-sm text-muted-foreground">
                  Écoulements, réseaux, pompes, applications
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Structure</CardTitle>
              <CardDescription>Calcul des structures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Génie civil</Badge>
                <p className="text-sm text-muted-foreground">
                  Béton armé, charpentes, construction
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
              <CardTitle className="text-lg">RDM 2</CardTitle>
              <CardDescription>Résistance des Matériaux Avancée</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Structures</Badge>
                <p className="text-sm text-muted-foreground">
                  Instabilités, plaques, coques, analyse non-linéaire
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Structures</CardTitle>
              <CardDescription>Théorie des Structures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Structures</Badge>
                <p className="text-sm text-muted-foreground">
                  Méthodes énergétiques, lignes d'influence, hyperstatiques
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MDS 2</CardTitle>
              <CardDescription>Mécanique des Sols Avancée</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Géotechnique</Badge>
                <p className="text-sm text-muted-foreground">
                  Fondations profondes, soutènements, stabilité des pentes
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MMC 2</CardTitle>
              <CardDescription>Mécanique des Milieux Continus 2</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Plasticité, viscoélasticité, endommagement
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hydraulique</CardTitle>
              <CardDescription>Hydraulique Appliquée</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Hydraulique</Badge>
                <p className="text-sm text-muted-foreground">
                  Écoulements à surface libre, réseaux, pompes
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Route 1</CardTitle>
              <CardDescription>Conception Routière</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Transport</Badge>
                <p className="text-sm text-muted-foreground">
                  Géométrie, structure de chaussée, matériaux routiers
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MDR</CardTitle>
              <CardDescription>Mécanique des Roches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Géotechnique</Badge>
                <p className="text-sm text-muted-foreground">
                  Propriétés mécaniques, stabilité des talus rocheux
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="space-y-6">
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Ressources Pédagogiques
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-8">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Bientôt Disponible</h3>
            <p className="text-muted-foreground">
              Les ressources pédagogiques pour ce semestre sont en cours de préparation 
              et seront disponibles très prochainement.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Badge variant="secondary">Cours</Badge>
              <Badge variant="secondary">TD</Badge>
              <Badge variant="secondary">TP</Badge>
              <Badge variant="secondary">Examens</Badge>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}