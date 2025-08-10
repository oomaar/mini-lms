import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourse } from "@/lib/firestore";
import { Course } from "@/types/Course";

type CreateCoursePayload = Omit<Course, "id">;

export function useCreateCourse() {
  const queryClient = useQueryClient();

  return useMutation<string, Error, CreateCoursePayload>({
    mutationFn: (newCourseData) => createCourse(newCourseData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error) => {
      console.error("Failed to create course:", error);
    },
  });
}
