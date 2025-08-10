import {
  TableHeaderContainer,
  TableHeaderSearchContainer,
} from "./styled-table-header";

type TableHeaderProps = {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
  title: string;
  placeholder?: string;
};

export function TableHeader(props: TableHeaderProps) {
  const { searchTerm, onSearch, title, placeholder } = props;

  return (
    <TableHeaderContainer>
      <p>{title}</p>
      <TableHeaderSearchContainer>
        <span className="material-symbols-outlined">search</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={placeholder}
        />
      </TableHeaderSearchContainer>
    </TableHeaderContainer>
  );
}
