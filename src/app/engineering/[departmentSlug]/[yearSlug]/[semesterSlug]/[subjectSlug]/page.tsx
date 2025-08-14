import { engineeringCycle } from "@/lib/study-data";
import { slugify } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MaterialsGrid } from "@/components/materials-grid";
import { Subject } from "@/lib/study-data";

export default function EngineeringSubjectPage({ params }: { params: { departmentSlug: string, yearSlug: string, semesterSlug: string, subjectSlug: string } }) {
  const department = engineeringCycle.departments.find(
    (d) => d.slug === params.departmentSlug
  );
  const year = department?.years.find(
    (y) => slugify(y.name) === params.yearSlug
  );
  const semester = year?.semesters.find(
    (s) => slugify(s.name) === params.semesterSlug
  );

  let subject: Subject | undefined;
  if(semester) {
    subject = semester.subjects.find(
      (s) => slugify(s.name) === params.subjectSlug
    );
    if(!subject) {
      for(const optionGroup of semester.options || []) {
        subject = optionGroup.subjects.find(
          (s) => slugify(s.name) === params.subjectSlug
        );
        if(subject) break;
      }
    }
  }

  if (!department || !year || !semester || !subject) {
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
