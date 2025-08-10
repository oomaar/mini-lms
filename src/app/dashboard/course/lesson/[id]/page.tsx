"use client";
import { Loading } from "@/components/Loading/Loading";
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader";
import { useLessonById } from "@/hooks/useLessons/useLessonById";
import { useParams } from "next/navigation";
import styled from "styled-components";

export default function SingleLessonPage() {
  const { id } = useParams() as { id: string };

  const { data: lesson, isLoading, error } = useLessonById(id);

  if (isLoading) return <Loading />;
  if (error) return <p>{(error as Error).message}</p>;

  return (
    <div>
      <ScreenHeader title={lesson?.title || ""} />
      <DescriptionText>{lesson?.content}</DescriptionText>
    </div>
  );
}

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.regularFont};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  margin-bottom: 24px;
  padding-left: 8px;
`;
