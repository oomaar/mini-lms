"use client";
import { Loading } from "@/components/Loading/Loading";
import { useCourses } from "@/hooks/useCourses/useCourses";

export default function CoursesPage() {
  const { data, isLoading } = useCourses();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Courses</h1>
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
