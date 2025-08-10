import React, { ReactElement } from "react";
import {
  TableContainer,
  TableTable,
  TableWrapper,
  TBody,
} from "./styled-table";
import { TableHeader } from "./TableHeader/TableHeader";
import { TablePagination } from "./TablePagination/TablePagination";

type TableProps = {
  header: {
    title: string;
    searchTerm: string;
    onSearch: (searchTerm: string) => void;
    placeholder?: string;
  };
  pagination: {
    totalRowsCount: number;
    tableRowsPerPage: number;
    setTableRowsPerPage: (tableRowsPerPage: number) => void;
    currentPage: number;
    setCurrentPage: (currentPage: number) => void;
  };
  tableHeadings: ReactElement;
  tableRows: ReactElement;
  subTableDimentions?: {
    height?: string;
  };
};

export function Table(props: TableProps) {
  const {
    header,
    tableHeadings,
    tableRows,
    pagination,
    subTableDimentions,
  } = props;

  const subTableHeight = subTableDimentions?.height;

  return (
    <TableContainer $height={subTableHeight}>
      <TableHeader
        searchTerm={header.searchTerm}
        onSearch={header.onSearch}
        title={header.title}
        placeholder={header.placeholder}
      />
      <TableWrapper>
        <TableTable>
          <thead>
            <tr>{tableHeadings}</tr>
          </thead>
          <TBody>{tableRows}</TBody>
        </TableTable>
      </TableWrapper>
      <TablePagination
        totalRowsCount={pagination.totalRowsCount}
        tableRowsPerPage={pagination.tableRowsPerPage}
        setTableRowsPerPage={pagination.setTableRowsPerPage}
        currentPage={pagination.currentPage}
        setCurrentPage={pagination.setCurrentPage}
      />
    </TableContainer>
  );
}
