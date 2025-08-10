import { useQuery } from "@tanstack/react-query";
import { Lesson } from "@/types/Lesson";
import { fetchLessonById } from "@/lib/firestore";

export function useLessonById(id: string) {
  return useQuery<Lesson>({
    queryKey: ["lessons", id],
    queryFn: () => fetchLessonById(id),
    enabled: !!id,
  });
}
