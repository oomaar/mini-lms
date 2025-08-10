import { ActionsList } from "@/components/ActionsList/ActionsList";
import { ActionsListListItem } from "@/components/ActionsList/styled-actions-list";
import { TDContainer, TDLink, TDText } from "@/components/Table/styled-table";
import { Course } from "@/types/Course";
import Link from "next/link";

type CoursesTableRowsProps = {
  currentPageCourseDTOs: Course[];
};

export function CoursesTableRows(props: CoursesTableRowsProps) {
  const { currentPageCourseDTOs } = props;

  return (
    <>
      {currentPageCourseDTOs.map((courseDTO) => (
        <tr key={courseDTO.id}>
          <td>
            <TDContainer $width={200}>
              <TDLink>
                <Link href={`/dashboard/course/${courseDTO.id}`}>
                  {courseDTO.title}
                </Link>
              </TDLink>
            </TDContainer>
          </td>
          <td>
            <TDContainer $width={200}>
              <TDText>{courseDTO.description}</TDText>
            </TDContainer>
          </td>
          <td>
            <TDContainer $width={100}>
              <TDText>{courseDTO.lessonIds.length}</TDText>
            </TDContainer>
          </td>
          <td>
            <TDContainer $width={100}>
              <ActionsList width="150px">
                <ActionsListListItem>
                  <Link href={`/dashboard/course/${courseDTO.id}`}>
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
