import {
  TablePaginationButton,
  TablePaginationButtonsList,
  TablePaginationContainer,
  TablePaginationInfo,
} from "./styled-table-pagination";
import { TablePaginationDropdown } from "./TablePaginationDropdown/TablePaginationDropdown";

type TablePaginationProps = {
  totalRowsCount: number;
  tableRowsPerPage: number;
  setTableRowsPerPage: (tableRowsPerPage: number) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};

export const TablePagination = (props: TablePaginationProps) => {
  const {
    totalRowsCount,
    tableRowsPerPage,
    setTableRowsPerPage,
    currentPage,
    setCurrentPage,
  } = props;

  function generateRange(start: number, end: number) {
    const range: number[] = [];

    for (let index = start; index < end; index++) {
      range.push(index);
    }

    return range;
  }

  const visibleCount = 5;

  const numberOfPages = generateRange(
    1,
    Math.ceil(totalRowsCount / tableRowsPerPage) + 1
  );

  const getSliceStart = () => {
    if (generateRange(0, Math.ceil(visibleCount / 2)).includes(currentPage)) {
      return numberOfPages[0] - 1;
    } else if (
      generateRange(
        numberOfPages.length - Math.floor(visibleCount / 2),
        numberOfPages.length + 1
      ).includes(currentPage)
    ) {
      return numberOfPages[numberOfPages.length - 1 - visibleCount];
    } else {
      return currentPage - Math.ceil(visibleCount / 2);
    }
  };

  const getSliceEnd = () => {
    if (
      generateRange(
        numberOfPages.length - Math.floor(visibleCount / 2),
        numberOfPages.length + 1
      ).includes(currentPage)
    ) {
      return numberOfPages[numberOfPages.length - 1];
    } else if (
      generateRange(0, Math.ceil(visibleCount / 2)).includes(currentPage)
    ) {
      return visibleCount;
    } else {
      return currentPage + Math.floor(visibleCount / 2);
    }
  };

  return (
    <TablePaginationContainer>
      <TablePaginationInfo>
        <p>Showing</p>
        <TablePaginationDropdown
          tableRowsPerPage={tableRowsPerPage}
          setTableRowsPerPage={setTableRowsPerPage}
        />
        <p>out of {totalRowsCount}</p>
      </TablePaginationInfo>
      <TablePaginationButtonsList>
        <li>
          <TablePaginationButton
            disabled={currentPage <= 1 ? true : false}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </TablePaginationButton>
        </li>
        {numberOfPages.length > 5 && currentPage > visibleCount - 2 && (
          <li>
            <TablePaginationButton
              onClick={() =>
                setCurrentPage(
                  currentPage - visibleCount > 0
                    ? currentPage - visibleCount
                    : 1
                )
              }
            >
              ...
            </TablePaginationButton>
          </li>
        )}
        {numberOfPages
          .slice(getSliceStart(), getSliceEnd())
          .map((number: number, i) => (
            <li key={i}>
              <TablePaginationButton
                activePage={currentPage === number}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </TablePaginationButton>
            </li>
          ))}
        {numberOfPages.length > 5 &&
          currentPage <
            numberOfPages[numberOfPages.length - 1] -
              Math.floor(visibleCount / 2) && (
            <li>
              <TablePaginationButton
                onClick={() =>
                  setCurrentPage(
                    currentPage + visibleCount <= numberOfPages.length
                      ? numberOfPages[currentPage + visibleCount - 1]
                      : numberOfPages[numberOfPages.length - 1]
                  )
                }
              >
                ...
              </TablePaginationButton>
            </li>
          )}
        <li>
          <TablePaginationButton
            onClick={() =>
              setCurrentPage(
                currentPage < numberOfPages.length
                  ? currentPage + 1
                  : currentPage
              )
            }
            disabled={currentPage === numberOfPages.length ? true : false}
          >
            <span className="material-symbols-outlined">navigate_next</span>
          </TablePaginationButton>
        </li>
      </TablePaginationButtonsList>
    </TablePaginationContainer>
  );
};
