import { deleteCourse } from "@/lib/firestore";
import { Course } from "@/types/Course";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteCourse = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCourse,
    onSuccess: (_, id) => {
      queryClient.setQueryData<Course[]>(["courses"], (oldData) =>
        oldData ? oldData.filter((course) => course.id !== id) : []
      );
    },
    onError: (error) => {
      console.error("Error deleting course:", error);
    },
  });
};
