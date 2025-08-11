import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  Building, 
  BookOpen, 
  Users, 
  Award,
  ArrowRight,
  FileText,
  Download,
  ExternalLink,
  Target,
  Clock,
  Star,
  TrendingUp
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-12">
      <Breadcrumbs />
      
      {/* Hero Section - More Human and Less Generic */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white shadow-2xl">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 via-orange-700/70 to-orange-800/80" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+Cjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="relative z-10 text-center space-y-6 py-20 px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Image 
                src="/enstp-logo.png" 
                alt="ENSTP Logo" 
                width={120} 
                height={120} 
                className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-tight">
                Votre Avenir <br />
                <span className="text-yellow-300 drop-shadow-lg">Commence Ici</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed font-medium">
                La plateforme étudiante créée pour les futurs ingénieurs de l'ENSTP. 
                Tout ce dont vous avez besoin, organisé simplement.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 hover:scale-105 transition-all duration-200 shadow-lg font-bold px-8 py-4 text-lg">
              <Link href="/preparatory">
                <GraduationCap className="mr-3 h-6 w-6" />
                Cycle Préparatoire
              </Link>
            </Button>
            <Button variant="default" size="lg" className="bg-orange-500 text-white hover:bg-orange-400 hover:scale-105 transition-all duration-200 font-bold px-8 py-4 text-lg shadow-lg" asChild>
              <Link href="/engineering">
                <BookOpen className="mr-3 h-6 w-6" />
                Cycle d'Ingénieur
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats - More Dynamic */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-slate-700">Années</CardTitle>
            <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
              <GraduationCap className="h-5 w-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-800">5+</div>
            <p className="text-sm text-slate-600">Parcours complets</p>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-slate-700">Départements</CardTitle>
            <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
              <Building className="h-5 w-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-800">2</div>
            <p className="text-sm text-slate-600">Spécialisations</p>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-slate-700">Ressources</CardTitle>
            <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
              <BookOpen className="h-5 w-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-800">1000+</div>
            <p className="text-sm text-slate-600">Documents</p>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-slate-700">Étudiants</CardTitle>
            <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
              <Users className="h-5 w-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-800">6000+</div>
            <p className="text-sm text-slate-600">Diplômés</p>
          </CardContent>
        </Card>
      </section>

      {/* Academic Programs - More Personal */}
      <section className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
            Choisissez Votre Parcours
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Deux voies d'excellence pour votre future carrière d'ingénieur
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                  <GraduationCap className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-800">Cycle Préparatoire</CardTitle>
                  <p className="text-sm text-slate-600">2 ans de formation</p>
                </div>
              </div>
              <CardDescription className="text-base text-slate-600 leading-relaxed">
                Les fondations essentielles pour votre future carrière d'ingénieur
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                  <span className="font-medium text-slate-700">1ère Année</span>
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">2 Semestres</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-orange-50 rounded-lg">
                  <span className="font-medium text-slate-700">2ème Année</span>
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">2 Semestres</Badge>
                </div>
              </div>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> Mathématiques appliquées</p>
                <p className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> Physique fondamentale</p>
                <p className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> Chimie générale</p>
              </div>
              <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 text-base group-hover:scale-105 transition-transform duration-200">
                <Link href="/preparatory">
                  Commencer le parcours
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                  <BookOpen className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-800">Cycle d'Ingénieur</CardTitle>
                  <p className="text-sm text-slate-600">3 ans de spécialisation</p>
                </div>
              </div>
              <CardDescription className="text-base text-slate-600 leading-relaxed">
                Devenez un expert en génie civil avec une spécialisation reconnue
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <div className="space-y-2">
                <div className="border-l-4 border-orange-500 bg-orange-50/50 rounded-lg p-3 hover:bg-orange-50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800">D.I.B.</span>
                    <Badge variant="outline" className="border-orange-500 text-orange-700 hover:bg-orange-50">Infrastructure</Badge>
                  </div>
                  <p className="text-xs text-slate-600">
                    Routes, bâtiments, ouvrages d'art
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 bg-orange-50/50 rounded-lg p-3 hover:bg-orange-50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-800">D.M.S.</span>
                    <Badge variant="outline" className="border-orange-500 text-orange-700 hover:bg-orange-50">Matériaux</Badge>
                  </div>
                  <p className="text-xs text-slate-600">
                    Matériaux de construction et structures
                  </p>
                </div>
              </div>
              <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 text-base group-hover:scale-105 transition-transform duration-200">
                <Link href="/engineering">
                  Spécialisez-vous
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us - More Direct and Benefit-Oriented */}
      <section className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
            Pourquoi les étudiants nous choisissent
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            L'outil indispensable pour réussir vos études à l'ENSTP
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-lg">
            <CardHeader className="space-y-3">
              <div className="mx-auto p-4 bg-orange-100 rounded-2xl group-hover:bg-orange-200 transition-colors group-hover:scale-110 transition-transform duration-300">
                <Target className="h-12 w-12 text-orange-600" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-800">Tout en un seul lieu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-slate-600 leading-relaxed">
                Plus besoin de chercher partout. Tous vos cours, exercices et examens 
                organisés par semestre et matière.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-lg">
            <CardHeader className="space-y-3">
              <div className="mx-auto p-4 bg-orange-100 rounded-2xl group-hover:bg-orange-200 transition-colors group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-12 w-12 text-orange-600" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-800">Accès instantané</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-slate-600 leading-relaxed">
                Travaillez quand vous voulez, où vous voulez. Tout disponible 
                24h/24 pour s'adapter à votre emploi du temps.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white shadow-lg">
            <CardHeader className="space-y-3">
              <div className="mx-auto p-4 bg-orange-100 rounded-2xl group-hover:bg-orange-200 transition-colors group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-12 w-12 text-orange-600" />
              </div>
              <CardTitle className="text-lg font-bold text-slate-800">Résultats garantis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-slate-600 leading-relaxed">
                Des ressources qui suivent exactement le programme de l'ENSTP 
                pour vous assurer la meilleure préparation possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access - More Practical */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
            Accès Rapide
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Les ressources les plus consultées par les étudiants
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-colors">
            <FileText className="h-6 w-6" />
            <span className="text-sm font-medium">Cours récents</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-colors">
            <Download className="h-6 w-6" />
            <span className="text-sm font-medium">Examens</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-colors">
            <Star className="h-6 w-6" />
            <span className="text-sm font-medium">Favoris</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-colors">
            <ExternalLink className="h-6 w-6" />
            <span className="text-sm font-medium">Liens utiles</span>
          </Button>
        </div>
      </section>

      {/* Final CTA - More Compelling */}
      <section className="text-center space-y-6 py-12 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Prêt à commencer ?
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Rejoignez des milliers d'étudiants qui utilisent déjà ENSTPStudy 
          pour réussir leurs études.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 text-lg">
            <Link href="/preparatory">
              Commencer maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold px-8 py-4 text-lg">
            En savoir plus
          </Button>
        </div>
      </section>
    </div>
  )
}