import { preparatoryCycle } from "@/lib/study-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Book } from "lucide-react";

export default function YearPage({ params }: { params: { yearSlug: string } }) {
  const year = preparatoryCycle.years.find(
    (y) => slugify(y.name) === params.yearSlug
  );

  if (!year) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold">{year.name}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {year.semesters.map((semester) => (
          <Card key={semester.name}>
            <CardHeader>
              <CardTitle>{semester.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {semester.subjects.map((subject) => (
                  <li key={subject.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Book className="h-4 w-4 mr-2" />
                      <span>{subject.name}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/preparatory/${params.yearSlug}/${slugify(semester.name)}/${slugify(subject.name)}`}>
                        Voir les documents
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
