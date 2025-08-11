import Link from "next/link"
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-orange-50/30 dark:bg-orange-950/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ENSTPStudy</h3>
            <p className="text-sm text-muted-foreground">
              La plateforme créée par les étudiants, pour les étudiants de l'ENSTP.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/preparatory" className="text-muted-foreground hover:text-foreground transition-colors">
                  Préparatoire
                </Link>
              </li>
              <li>
                <Link href="/engineering" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ingénieur
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Parcours</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/preparatory/1st-year" className="text-muted-foreground hover:text-foreground transition-colors">
                  1ère Année Prépa
                </Link>
              </li>
              <li>
                <Link href="/preparatory/2nd-year" className="text-muted-foreground hover:text-foreground transition-colors">
                  2ème Année Prépa
                </Link>
              </li>
              <li>
                <Link href="/engineering/dib" className="text-muted-foreground hover:text-foreground transition-colors">
                  D.I.B. - Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/engineering/dms" className="text-muted-foreground hover:text-foreground transition-colors">
                  D.M.S. - Matériaux
                </Link>
              </li>
            </ul>
          </div>

          {/* Creator Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Créateur</h4>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-orange-600 dark:text-orange-400">Cherif TAS</p>
              <div className="flex items-center gap-2">
                <Link 
                  href="https://www.linkedin.com/in/cherif-tas-7504b8319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link 
                  href="https://www.instagram.com/cherifsuii?igsh=Mml6MGlndmtobGJk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-800 transition-colors flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
              <p className="text-xs text-muted-foreground italic">
                "ادعو لي فقط"
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 ENSTPStudy. Fait avec passion pour les étudiants.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Ensemble pour la réussite
              </div>
              <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                Par Cherif TAS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}