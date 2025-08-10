import { ActionsList } from "@/components/ActionsList/ActionsList";
import { ActionsListListItem } from "@/components/ActionsList/styled-actions-list";
import { TDContainer, TDLink, TDText } from "@/components/Table/styled-table";
import { Lesson } from "@/types/Lesson";
import Link from "next/link";
import { EditLessonPopup } from "./EditLessonPopup/EditLessonPopup";
import { useLocalStorageUser } from "@/hooks/useLocalStorageUser";
import { DeleteLessonPopup } from "./DeleteLessonPopup/DeleteLessonPopup";

type SingleCourseLessonsTableRowsProps = {
  currentPageLessonDTOs: Lesson[];
};

export function SingleCourseLessonsTableRows(
  props: SingleCourseLessonsTableRowsProps
) {
  const { currentPageLessonDTOs } = props;

  const { user } = useLocalStorageUser();
  const userRole = user?.userRole;
  const isUserAdmin = userRole === "Admin";

  return (
    <>
      {currentPageLessonDTOs.map((lessonDTO, index) => (
        <tr key={index}>
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
                {isUserAdmin && <EditLessonPopup lessonDTO={lessonDTO} />}
                {isUserAdmin && <DeleteLessonPopup lessonDTO={lessonDTO} />}
              </ActionsList>
            </TDContainer>
          </td>
        </tr>
      ))}
    </>
  );
}
