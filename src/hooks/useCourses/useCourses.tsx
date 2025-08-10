import { useQuery } from "@tanstack/react-query";
import { fetchCourses } from "@/lib/firestore";
import { Course } from "@/types/Course";

export function useCourses() {
  const q = useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  return q;
}
