import { preparatoryCycle } from "@/lib/study-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MaterialsGrid } from "@/components/materials-grid";

export default function SubjectPage({ params }: { params: { yearSlug: string, semesterSlug: string, subjectSlug: string } }) {
  const year = preparatoryCycle.years.find(
    (y) => slugify(y.name) === params.yearSlug
  );
  const semester = year?.semesters.find(
    (s) => slugify(s.name) === params.semesterSlug
  );
  const subject = semester?.subjects.find(
    (s) => slugify(s.name) === params.subjectSlug
  );

  if (!year || !semester || !subject) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold">{subject.name}</h1>
      <MaterialsGrid materials={subject.materials} />
    </div>
  );
}
