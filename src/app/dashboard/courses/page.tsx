"use client";
import { Loading } from "@/components/Loading/Loading";
import { ScreenHeader } from "@/components/ScreenHeader/ScreenHeader";
import { Table } from "@/components/Table/Table";
import { useCourses } from "@/hooks/useCourses/useCourses";
import { Course } from "@/types/Course";
import { useMemo, useState } from "react";
import { CoursesTableHeadings } from "./_components/CoursesTableHeadings";
import { CoursesTableRows } from "./_components/CoursesTableRows";

export default function CoursesPage() {
  const { data, isLoading } = useCourses();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const courseDTOs: Course[] = data || [];

  const [tableRowsPerPage, setTableRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourseDTOs = useMemo(
    () =>
      courseDTOs.filter((item) => {
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
    [courseDTOs, searchTerm]
  );

  const maxPage = Math.ceil(filteredCourseDTOs.length / tableRowsPerPage);

  const currentOrMaxPage = Math.min(currentPage, maxPage);

  const currentPageCourseDTOs = useMemo(() => {
    const indexOfLastEntry = currentOrMaxPage * tableRowsPerPage;
    const indexOfFirstEntry = indexOfLastEntry - tableRowsPerPage;

    return filteredCourseDTOs.slice(indexOfFirstEntry, indexOfLastEntry);
  }, [filteredCourseDTOs, tableRowsPerPage, currentOrMaxPage]);

  function onSearchTermChange(searchTerm: string) {
    setSearchTerm(searchTerm);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <ScreenHeader title="Courses" />
      <Table
        header={{
          title: "All Courses",
          searchTerm: searchTerm,
          onSearch: onSearchTermChange,
          placeholder: "Search courses...",
        }}
        pagination={{
          totalRowsCount: filteredCourseDTOs.length,
          tableRowsPerPage,
          setTableRowsPerPage: setTableRowsPerPage,
          currentPage: currentOrMaxPage,
          setCurrentPage: setCurrentPage,
        }}
        tableHeadings={<CoursesTableHeadings />}
        tableRows={
          <CoursesTableRows currentPageCourseDTOs={currentPageCourseDTOs} />
        }
      />
    </div>
  );
}
