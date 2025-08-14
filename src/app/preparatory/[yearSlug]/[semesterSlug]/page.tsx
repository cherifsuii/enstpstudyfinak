import { preparatoryCycle } from "@/lib/study-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Book } from "lucide-react";

export default function SemesterPage({ params }: { params: { yearSlug: string, semesterSlug: string } }) {
  const year = preparatoryCycle.years.find(
    (y) => slugify(y.name) === params.yearSlug
  );
  const semester = year?.semesters.find(
    (s) => slugify(s.name) === params.semesterSlug
  );

  if (!year || !semester) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold">{semester.name} - {year.name}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {semester.subjects.map((subject) => (
          <Card key={subject.name}>
            <CardHeader>
              <CardTitle>{subject.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={`/preparatory/${params.yearSlug}/${params.semesterSlug}/${slugify(subject.name)}`}>
                  Voir les {subject.materials.length} documents
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
