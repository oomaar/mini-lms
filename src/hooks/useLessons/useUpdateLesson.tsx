import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLesson } from "@/lib/firestore";
import { Lesson } from "@/types/Lesson";

type UpdateLessonPayload = {
  lessonId: string;
  updatedData: Partial<Omit<Lesson, "id">>;
};

export function useUpdateLesson() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, UpdateLessonPayload>({
    mutationFn: ({ lessonId, updatedData }) =>
      updateLesson(lessonId, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
      queryClient.invalidateQueries({
        queryKey: ["lessons"],
      });
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error("Failed to update course:", error.message);
      } else {
        console.error("Failed to update course:", error);
      }
    },
  });
}
