import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLesson } from "@/lib/firestore";

type DeleteLessonPayload = {
  lessonId: string;
  courseId: string;
};

export function useDeleteLesson() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, DeleteLessonPayload>({
    mutationFn: ({ lessonId, courseId }) => deleteLesson(lessonId, courseId),
    onSuccess: (_, { courseId }) => {
      queryClient.invalidateQueries({ queryKey: ["lessons", courseId] });
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error("Failed to delete lesson:", error.message);
      } else {
        console.error("Failed to delete lesson:", error);
      }
    },
  });
}
