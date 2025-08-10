import { Loading } from "@/components/Loading/Loading";
import { Table } from "@/components/Table/Table";
import { useLessonsByIds } from "@/hooks/useLessons/useLessonsByIds";
import { Lesson } from "@/types/Lesson";
import { useMemo, useState } from "react";
import { SingleCourseLessonsTableHeadings } from "./SingleCourseLessonsTableHeaders";
import { SingleCourseLessonsTableRows } from "./SingleCourseLessonsTableRows";

type SingleCourseLessonsTableProps = {
  lessonIds: string[];
  courseTitle: string;
};

export function SingleCourseLessonsTable(props: SingleCourseLessonsTableProps) {
  const { lessonIds, courseTitle } = props;

  const { data: lessons, isLoading, error } = useLessonsByIds(lessonIds);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lessonDTOs: Lesson[] = lessons || [];

  const [tableRowsPerPage, setTableRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredLessonDTOs = useMemo(
    () =>
      lessonDTOs.filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        } else {
          return 0;
        }
      }),
    [lessonDTOs, searchTerm]
  );

  const maxPage = Math.ceil(filteredLessonDTOs.length / tableRowsPerPage);

  const currentOrMaxPage = Math.min(currentPage, maxPage);

  const currentPageLessonDTOs = useMemo(() => {
    const indexOfLastEntry = currentOrMaxPage * tableRowsPerPage;
    const indexOfFirstEntry = indexOfLastEntry - tableRowsPerPage;

    return filteredLessonDTOs.slice(indexOfFirstEntry, indexOfLastEntry);
  }, [filteredLessonDTOs, tableRowsPerPage, currentOrMaxPage]);

  function onSearchTermChange(searchTerm: string) {
    setSearchTerm(searchTerm);
  }

  if (isLoading) return <Loading />;
  if (error) return <p>{(error as Error).message}</p>;

  return (
    <Table
      header={{
        title: `${courseTitle} Lessons`,
        searchTerm: searchTerm,
        onSearch: onSearchTermChange,
        placeholder: "Search lessons...",
      }}
      pagination={{
        totalRowsCount: filteredLessonDTOs.length,
        tableRowsPerPage,
        setTableRowsPerPage: setTableRowsPerPage,
        currentPage: currentOrMaxPage,
        setCurrentPage: setCurrentPage,
      }}
      tableHeadings={<SingleCourseLessonsTableHeadings />}
      tableRows={
        <SingleCourseLessonsTableRows
          currentPageLessonDTOs={currentPageLessonDTOs}
        />
      }
      subTableDimentions={{ height: "500px" }}
    />
  );
}
