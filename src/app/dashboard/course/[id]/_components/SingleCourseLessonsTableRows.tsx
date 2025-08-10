import { ActionsList } from "@/components/ActionsList/ActionsList";
import { ActionsListListItem } from "@/components/ActionsList/styled-actions-list";
import { TDContainer, TDLink, TDText } from "@/components/Table/styled-table";
import { Lesson } from "@/types/Lesson";
import Link from "next/link";

type SingleCourseLessonsTableRowsProps = {
  currentPageLessonDTOs: Lesson[];
};

export function SingleCourseLessonsTableRows(
  props: SingleCourseLessonsTableRowsProps
) {
  const { currentPageLessonDTOs } = props;

  return (
    <>
      {currentPageLessonDTOs.map((lessonDTO) => (
        <tr key={lessonDTO.id}>
          <td>
            <TDContainer $width={200}>
              <TDLink>
                <Link href={`/dashboard/course/lesson/${lessonDTO.id}`}>
                  {lessonDTO.title}
                </Link>
              </TDLink>
            </TDContainer>
          </td>
          <td>
            <TDContainer $width={300}>
              <TDText>{lessonDTO.content}</TDText>
            </TDContainer>
          </td>
          <td>
            <TDContainer $width={100}>
              <ActionsList width="150px">
                <ActionsListListItem>
                  <Link href={`/dashboard/course/lesson/${lessonDTO.id}`}>
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                    View Details
                  </Link>
                </ActionsListListItem>
              </ActionsList>
            </TDContainer>
          </td>
        </tr>
      ))}
    </>
  );
}
