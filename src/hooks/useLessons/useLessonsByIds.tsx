import { useQuery } from "@tanstack/react-query";
import { fetchLessonsByIds } from "@/lib/firestore";
import { Lesson } from "@/types/Lesson";

export function useLessonsByIds(lessonIds: string[]) {
  return useQuery<Lesson[]>({
    queryKey: ["lessons", lessonIds],
    queryFn: () => fetchLessonsByIds(lessonIds),
    enabled: lessonIds.length > 0,
  });
}
