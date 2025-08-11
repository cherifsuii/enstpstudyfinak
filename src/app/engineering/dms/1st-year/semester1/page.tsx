import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, BookOpen, Target, Wrench } from "lucide-react"

export default function DMSFirstYearSemester1Page() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">D.M.S. - 1ère Année - Semestre 1</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Premier semestre du cycle d'ingénieur D.M.S. - Fondements des matériaux et structures
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
              Le premier semestre de la première année du cycle d'ingénieur D.M.S. établit 
              les bases fondamentales pour la compréhension des matériaux de construction 
              et le comportement des structures. Les étudiants acquièrent une expertise 
              solide en résistance des matériaux, béton armé et mécanique des sols.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">16 Semaines</h3>
                <p className="text-sm text-muted-foreground">Durée du semestre</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">6 Modules</h3>
                <p className="text-sm text-muted-foreground">Matières principales</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Tronc commun</h3>
                <p className="text-sm text-muted-foreground">DMS & DIB</p>
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
              <CardTitle className="text-lg">RDM</CardTitle>
              <CardDescription>Résistance des Matériaux</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Structures</Badge>
                <p className="text-sm text-muted-foreground">
                  Contraintes, déformations, poutres, portiques
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">BA 1</CardTitle>
              <CardDescription>Béton Armé 1</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Matériaux</Badge>
                <p className="text-sm text-muted-foreground">
                  Principes du BA, calcul des sections, flexion simple
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MDS</CardTitle>
              <CardDescription>Mécanique des Sols</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Géotechnique</Badge>
                <p className="text-sm text-muted-foreground">
                  Propriétés des sols, fondations, stabilité
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MMC</CardTitle>
              <CardDescription>Mécanique des Milieux Continus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Mécanique</Badge>
                <p className="text-sm text-muted-foreground">
                  Tenseurs, élasticité, plasticité
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MDC</CardTitle>
              <CardDescription>Matériaux de Construction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Matériaux</Badge>
                <p className="text-sm text-muted-foreground">
                  Béton, acier, céramiques, polymères
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">PGC</CardTitle>
              <CardDescription>Procédés Généraux de Construction</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Construction</Badge>
                <p className="text-sm text-muted-foreground">
                  Méthodes de construction, technologies, chantier
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