'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathStore } from '@/hooks/use-path-store';
import { engineeringCycle } from '@/lib/study-data';
import { slugify } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';
import { Input } from "@/components/ui/input";

interface SetPathDialogProps {
  departmentSlug: string;
  children: React.ReactNode;
}

export function SetPathDialog({ departmentSlug, children }: SetPathDialogProps) {
  const [open, setOpen] = useState(false);
  const { setPath } = usePathStore();
  const department = engineeringCycle.departments.find(d => d.slug === departmentSlug);

  const [selectedYearSlug, setSelectedYearSlug] = useState<string | null>(null);
  const [selectedSemesterSlug, setSelectedSemesterSlug] = useState<string | null>(null);

  const handleSetPath = () => {
    if (departmentSlug && selectedYearSlug && selectedSemesterSlug) {
      setPath(departmentSlug, selectedYearSlug, selectedSemesterSlug);
      toast({
        title: "Parcours sauvegardé !",
        description: "Votre parcours a été sauvegardé. Vous pouvez y accéder rapidement depuis le menu latéral.",
      });
      setOpen(false);
    } else {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner une année et un semestre.",
        variant: "destructive",
      });
    }
  };

  const years = department?.years || [];
  const semesters = years.find(y => slugify(y.name) === selectedYearSlug)?.semesters || [];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Définir mon parcours</DialogTitle>
          <DialogDescription>
            Sauvegardez votre parcours actuel pour un accès rapide à vos matières.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Département</label>
            <Input value={department?.name} disabled />
          </div>
          <div>
            <label htmlFor="year-select" className="text-sm font-medium">Année</label>
            <Select onValueChange={setSelectedYearSlug}>
              <SelectTrigger id="year-select">
                <SelectValue placeholder="Sélectionner une année" />
              </SelectTrigger>
              <SelectContent>
                {years.map(year => (
                  <SelectItem key={slugify(year.name)} value={slugify(year.name)}>
                    {year.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedYearSlug && (
            <div>
              <label htmlFor="semester-select" className="text-sm font-medium">Semestre</label>
              <Select onValueChange={setSelectedSemesterSlug}>
                <SelectTrigger id="semester-select">
                  <SelectValue placeholder="Sélectionner un semestre" />
                </SelectTrigger>
                <SelectContent>
                  {semesters.map(semester => (
                    <SelectItem key={slugify(semester.name)} value={slugify(semester.name)}>
                      {semester.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button onClick={handleSetPath}>Sauvegarder</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
