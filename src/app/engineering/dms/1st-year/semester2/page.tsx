import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, BookOpen, Target, Wrench } from "lucide-react"

export default function DMSFirstYearSemester2Page() {
  return (
    <div className="space-y-8">
      <Breadcrumbs />
      
      {/* Header Section */}
      <section className="text-center space-y-4 py-8">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">D.M.S. - 1ère Année - Semestre 2</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Deuxième semestre du cycle d'ingénieur D.M.S. - Approfondissement et spécialisation
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
              Le deuxième semestre approfondit les connaissances en béton armé et introduit 
              des concepts avancés en structures et géotechnique. Les étudiants commencent 
              à se spécialiser dans les domaines spécifiques au département D.M.S.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">16 Semaines</h3>
                <p className="text-sm text-muted-foreground">Durée du semestre</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">7 Modules</h3>
                <p className="text-sm text-muted-foreground">Matières principales</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-2" />
                <h3 className="font-semibold">Spécialisation</h3>
                <p className="text-sm text-muted-foreground">D.M.S.</p>
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
              <CardTitle className="text-lg">BA 2</CardTitle>
              <CardDescription>Béton Armé 2</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Matériaux</Badge>
                <p className="text-sm text-muted-foreground">
                  Flexion composée, effort tranchant, torsion, poteaux
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
              <CardTitle className="text-lg">BP 1</CardTitle>
              <CardDescription>Béton Précontraint 1</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Matériaux</Badge>
                <p className="text-sm text-muted-foreground">
                  Principes, pré-tension, post-tension, pertes
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">MEF</CardTitle>
              <CardDescription>Méthode des Éléments Finis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="outline">Numérique</Badge>
                <p className="text-sm text-muted-foreground">
                  Formulation, éléments types, applications
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