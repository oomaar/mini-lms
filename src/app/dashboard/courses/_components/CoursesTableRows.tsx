import { TDContainer, TDLink, TDText } from "@/components/Table/styled-table";
import { Course } from "@/types/Course";
import Link from "next/link";

type CoursesTableRowsProps = {
  currentPageCourseDTOs: Course[];
};

export default function CoursesTableRows(props: CoursesTableRowsProps) {
  const { currentPageCourseDTOs } = props;

  return (
    <>
      {currentPageCourseDTOs.map((courseDTO) => (
        <tr key={courseDTO.id}>
          <td>
            <TDContainer $width={200}>
              <TDLink>
                <Link href={``}>{courseDTO.title}</Link>
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
              <span className="material-symbols-outlined">more_horiz</span>
            </TDContainer>
          </td>
        </tr>
      ))}
    </>
  );
}
