import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Course } from "@/types/Course";
import { updateCourseById } from "@/lib/firestore";

type UpdateCoursePayload = {
  id: string;
  updatedData: Partial<Omit<Course, "id">>;
};

export function useUpdateCourse() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, UpdateCoursePayload>({
    mutationFn: ({ id, updatedData }) => updateCourseById(id, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["courses"],
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
