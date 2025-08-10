import { Shadow, transition } from "@/styles/theme";
import styled from "styled-components";

export const TablePaginationDropdownContainer = styled.div`
  position: relative;
`;

export const TablePaginationDropdownToggle = styled.button<{
  $showDropdown: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: #fff;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.typography.fontSize.mdFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};

  span {
    font-size: 20px;
    transition: ${transition};
    transform: ${({ $showDropdown }) =>
      $showDropdown ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export const TablePaginationDropdownList = styled.ul<{
  $showDropdown: boolean;
}>`
  position: absolute;
  bottom: 30px;
  background: #fff;
  width: 100%;
  display: grid;
  justify-items: center;
  box-shadow: ${Shadow};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  transition: ${transition};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  height: ${({ $showDropdown }) => ($showDropdown ? "68px" : "0px")};
  overflow: ${({ $showDropdown }) => ($showDropdown ? "visible" : "hidden")};
  opacity: ${({ $showDropdown }) => ($showDropdown ? "1" : "0")};
`;

export const TablePaginationDropdownListItem = styled.li<{ $active: boolean }>`
  padding: 8px 0px;
  width: 100%;
  text-align: center;
  transition: ${transition};
  cursor: pointer;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primaryColor : "#fff"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.whiteTextColor : theme.colors.textColor};

  &:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteTextColor};
  }
`;
