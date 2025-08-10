"use client";
import { Loading } from "@/components/Loading/Loading";
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader";
import { useCourses } from "@/hooks/useCourses/useCourses";

export default function CoursesPage() {
  const { data, isLoading } = useCourses();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ScreenHeader title="Courses" />
      <ul>
        {data?.map((course) => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Lessons: {course.lessonIds.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
