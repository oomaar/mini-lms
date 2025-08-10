"use client";
import { Loading } from "@/components/Loading/Loading";
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader";
import { useCourseById } from "@/hooks/useCourses/useCourseById";
import { useParams } from "next/navigation";
import { SingleCourseLessonsTable } from "./_components/SingleCourseLessonsTable";
import styled from "styled-components";
import { CreateLessonPopup } from "./_components/CreateLessonPopup/CreateLessonPopup";
import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";

export default function SingleCoursePage() {
  const { id } = useParams() as { id: string };

  const { data: course, isLoading, error } = useCourseById(id);

  const { user } = useLocalStorageUser();
  const userRole = user?.userRole;
  const isUserAdmin = userRole === "Admin";

  if (isLoading) return <Loading />;
  if (error) return <p>{(error as Error).message}</p>;

  return (
    <div>
      <ScreenHeader
        title={course?.title || ""}
        buttonElement={isUserAdmin && <CreateLessonPopup courseId={id} />}
      />
      <DescriptionText>{course?.description}</DescriptionText>
      <SingleCourseLessonsTable
        lessonIds={course?.lessonIds || []}
        courseTitle={course?.title || ""}
      />
    </div>
  );
}

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.regularFont};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-bottom: 24px;
  padding-left: 8px;
`;
