import { createLesson } from "@/lib/firestore";
import { Lesson } from "@/types/Lesson";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateLesson = (courseId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (lesson: Omit<Lesson, "id">) => createLesson(lesson),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["course", courseId] });
      queryClient.invalidateQueries({ queryKey: ["lessons", courseId] });
    },
  });
};
