'use client';

import { usePathStore } from '@/hooks/use-path-store';
import { engineeringCycle } from '@/lib/study-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { slugify } from '@/lib/utils';

export function MyPathNav() {
  const { departmentSlug, yearSlug, semesterSlug } = usePathStore();

  if (!departmentSlug || !yearSlug || !semesterSlug) {
    return null;
  }

  const department = engineeringCycle.departments.find(d => d.slug === departmentSlug);
  const year = department?.years.find(y => slugify(y.name) === yearSlug);
  const semester = year?.semesters.find(s => slugify(s.name) === semesterSlug);

  if (!department || !year || !semester) {
    return null;
  }

  const path = `/engineering/${departmentSlug}/${yearSlug}/${semesterSlug}`;

  return (
    <div className="p-4 bg-primary/10 rounded-lg">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <Star className="h-5 w-5 text-primary" />
        Mon Parcours
      </h3>
      <p className="text-sm text-muted-foreground mb-2">
        {department.name} - {year.name} - {semester.name}
      </p>
      <Button asChild size="sm" className="w-full">
        <Link href={path}>
          Accéder à mon semestre
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
