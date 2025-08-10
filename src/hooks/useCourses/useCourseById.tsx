import { fetchCourseById } from "@/lib/firestore";
import { Course } from "@/types/Course";
import { useQuery } from "@tanstack/react-query";

export function useCourseById(id: string) {
  return useQuery<Course>({
    queryKey: ["courses", id],
    queryFn: () => fetchCourseById(id),
    enabled: !!id, // only run if id is truthy
  });
}
