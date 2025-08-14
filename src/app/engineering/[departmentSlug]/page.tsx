import { engineeringCycle } from "@/lib/study-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Book, Star } from "lucide-react";
import { SetPathDialog } from "@/components/set-path-dialog";

export default function DepartmentPage({ params }: { params: { departmentSlug: string } }) {
  const department = engineeringCycle.departments.find(
    (d) => d.slug === params.departmentSlug
  );

  if (!department) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-4xl font-bold">{department.name}</h1>
            <p className="text-lg text-muted-foreground">{department.description}</p>
        </div>
        <SetPathDialog departmentSlug={department.slug}>
            <Button>
                <Star className="mr-2 h-4 w-4" />
                Définir comme mon parcours
            </Button>
        </SetPathDialog>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {department.years.map((year) => (
          <Card key={year.name}>
            <CardHeader>
              <CardTitle>{year.name}</CardTitle>
            </CardHeader>
            <CardContent>
               <Button asChild>
                <Link href={`/engineering/${department.slug}/${slugify(year.name)}`}>
                  Voir les semestres
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
