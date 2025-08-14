'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePathStore } from "@/hooks/use-path-store";
import { toast } from "@/hooks/use-toast";
import { LifeBuoy, Search, Navigation, Star, Trash2, Mail } from "lucide-react";

function ResetPathButton() {
  const { resetPath } = usePathStore();

  const handleReset = () => {
    resetPath();
    toast({
      title: "Parcours réinitialisé",
      description: "Votre parcours a été effacé.",
    });
  };

  return (
    <Button variant="destructive" onClick={handleReset}>
      <Trash2 className="mr-2 h-4 w-4" />
      Réinitialiser mon parcours
    </Button>
  );
}

export function TechnicalHelpSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <LifeBuoy className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Aide Technique</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Comment utiliser le site</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4">
            <Search className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Recherche</h4>
              <p className="text-sm text-muted-foreground">
                Utilisez la barre de recherche en haut de la page (ou via le raccourci <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">Ctrl+K</kbd>) pour trouver rapidement des cours, TD, ou examens.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Navigation className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Navigation</h4>
              <p className="text-sm text-muted-foreground">
                Le menu latéral vous permet de naviguer facilement entre les cycles, années, et semestres.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Star className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold">Mon Parcours</h4>
              <p className="text-sm text-muted-foreground">
                Sur la page d'un département d'ingénieur, vous pouvez cliquer sur "Définir comme mon parcours" pour sauvegarder votre année et semestre actuels. Un lien rapide apparaîtra dans le menu latéral pour un accès facile.
              </p>
              <div className="mt-2">
                <ResetPathButton />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Signaler un problème ou donner un feedback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Votre feedback est précieux pour améliorer la plateforme. Si vous trouvez un lien mort, une information manquante, ou si vous avez des suggestions, n'hésitez pas à nous contacter.
          </p>
          <Button asChild>
            <a href="mailto:enstp.study.contact@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Contacter le support
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
