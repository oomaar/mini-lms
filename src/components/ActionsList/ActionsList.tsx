import { PropsWithChildren, ReactNode } from "react";
import { useDropdown } from "../DropdownList/hooks/useDropdown";
import {
  ActionsListContainer,
  ActionsListList,
  ActionsListToggle,
} from "./styled-actions-list";

type ActionsListProps = PropsWithChildren<{
  children: ReactNode;
  width?: string;
}>;

export function ActionsList(props: ActionsListProps) {
  const { children, width } = props;

  const { showDropdown, toggleDropdown, dropdownContainerRef } = useDropdown();

  return (
    <ActionsListContainer ref={dropdownContainerRef}>
      <ActionsListToggle onClick={toggleDropdown}>
        <span className="material-symbols-outlined">more_horiz</span>
      </ActionsListToggle>
      <ActionsListList $showDropdown={showDropdown} $width={width}>
        {children}
      </ActionsListList>
    </ActionsListContainer>
  );
}
