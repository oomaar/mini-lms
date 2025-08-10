import { PropsWithChildren, ReactNode } from "react";
import { useDropdown } from "../DropdownList/hooks/useDropdown";
import {
  ActionsListContainer,
  ActionsListList,
  ActionsListToggle,
} from "./styled-actions-list";

type ActionsListProps = PropsWithChildren<{
  children: ReactNode;
}>;

export function ActionsList(props: ActionsListProps) {
  const { children } = props;

  const { showDropdown, toggleDropdown, dropdownContainerRef } = useDropdown();

  return (
    <ActionsListContainer ref={dropdownContainerRef}>
      <ActionsListToggle onClick={toggleDropdown}>
        <span className="material-symbols-outlined">more_horiz</span>
      </ActionsListToggle>
      <ActionsListList $showDropdown={showDropdown}>{children}</ActionsListList>
    </ActionsListContainer>
  );
}
