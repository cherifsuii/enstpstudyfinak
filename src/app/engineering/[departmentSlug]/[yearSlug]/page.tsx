import { engineeringCycle } from "@/lib/study-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Book } from "lucide-react";

export default function EngineeringYearPage({ params }: { params: { departmentSlug: string, yearSlug: string } }) {
  const department = engineeringCycle.departments.find(
    (d) => d.slug === params.departmentSlug
  );
  const year = department?.years.find(
    (y) => slugify(y.name) === params.yearSlug
  );

  if (!department || !year) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold">{year.name} - {department.name}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {year.semesters.map((semester) => (
          <Card key={semester.name}>
            <CardHeader>
              <CardTitle>{semester.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={`/engineering/${department.slug}/${params.yearSlug}/${slugify(semester.name)}`}>
                  Voir les matières
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
