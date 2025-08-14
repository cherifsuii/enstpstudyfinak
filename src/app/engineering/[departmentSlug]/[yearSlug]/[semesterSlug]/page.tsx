import { engineeringCycle } from "@/lib/study-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Book, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EngineeringSemesterPage({ params }: { params: { departmentSlug: string, yearSlug: string, semesterSlug: string } }) {
  const department = engineeringCycle.departments.find(
    (d) => d.slug === params.departmentSlug
  );
  const year = department?.years.find(
    (y) => slugify(y.name) === params.yearSlug
  );
  const semester = year?.semesters.find(
    (s) => slugify(s.name) === params.semesterSlug
  );

  if (!department || !year || !semester) {
    notFound();
  }

  const commonSubjects = semester.subjects.filter(s => s.type === 'common');
  const specificSubjects = semester.subjects.filter(s => s.type === department.slug);

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold">{semester.name}</h1>
      <h2 className="text-2xl font-bold text-muted-foreground">{year.name} - {department.name}</h2>

      <Card>
        <CardHeader>
          <CardTitle>Matières Communes</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {commonSubjects.map(subject => (
            <Link key={subject.name} href={`/engineering/${department.slug}/${params.yearSlug}/${params.semesterSlug}/${slugify(subject.name)}`} className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-primary" />
                    {subject.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Matières de Spécialité ({department.slug.toUpperCase()})</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {specificSubjects.map(subject => (
            <Link key={subject.name} href={`/engineering/${department.slug}/${params.yearSlug}/${params.semesterSlug}/${slugify(subject.name)}`} className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    {subject.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </CardContent>
      </Card>

      {semester.options && semester.options.map(optionGroup => (
        <Card key={optionGroup.name}>
          <CardHeader>
            <CardTitle>{optionGroup.name}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {optionGroup.subjects.map(subject => (
              <Link key={subject.name} href={`/engineering/${department.slug}/${params.yearSlug}/${params.semesterSlug}/${slugify(subject.name)}`} className="block">
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-primary" />
                      {subject.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </CardContent>
        </Card>
      ))}

    </div>
  );
}
