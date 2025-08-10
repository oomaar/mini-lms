import { useDropdown } from "@/components/DropdownList/hooks/useDropdown";
import {
  TablePaginationDropdownContainer,
  TablePaginationDropdownList,
  TablePaginationDropdownListItem,
  TablePaginationDropdownToggle,
} from "./styled-table-pagination-dropdown";

type TablePaginationDropdownProps = {
  tableRowsPerPage: number;
  setTableRowsPerPage: (rowsPerPage: number) => void;
};

const tableRowsNumbers = [10, 15];

export const TablePaginationDropdown = (
  props: TablePaginationDropdownProps
) => {
  const { tableRowsPerPage, setTableRowsPerPage } = props;

  const {
    dropdownContainerRef,
    showDropdown,
    toggleDropdown,
    hideDropdown,
  } = useDropdown();

  return (
    <TablePaginationDropdownContainer ref={dropdownContainerRef}>
      <TablePaginationDropdownToggle
        onClick={toggleDropdown}
        $showDropdown={showDropdown}
      >
        {tableRowsPerPage.toString()}
        <span className="material-symbols-outlined">keyboard_arrow_up</span>
      </TablePaginationDropdownToggle>
      <TablePaginationDropdownList $showDropdown={showDropdown}>
        {tableRowsNumbers.map((number, index) => (
          <TablePaginationDropdownListItem
            key={index}
            $active={number === tableRowsPerPage}
            onClick={() => {
              setTableRowsPerPage(number);
              hideDropdown();
            }}
          >
            {number}
          </TablePaginationDropdownListItem>
        ))}
      </TablePaginationDropdownList>
    </TablePaginationDropdownContainer>
  );
};
