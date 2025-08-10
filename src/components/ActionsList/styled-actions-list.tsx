import { Shadow, transition } from "@/styles/theme";
import styled from "styled-components";

export const ActionsListContainer = styled.div`
  position: relative;
`;

export const ActionsListToggle = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0px;
  outline: 0px;
  padding: 0px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const ActionsListList = styled.ul<{ $showDropdown: boolean }>`
  width: 100px;
  position: absolute;
  right: 0px;
  top: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: ${Shadow};
  height: fit-content;
  max-height: ${({ $showDropdown }) => ($showDropdown ? "60px" : "0px")};
  overflow-y: auto;
  overflow: ${({ $showDropdown }) => ($showDropdown ? "visible" : "hidden")};
  opacity: ${({ $showDropdown }) => ($showDropdown ? "1" : "0")};
`;

export const ActionsListListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0px 8px;
  padding: 4px;
  color: ${({ theme }) => theme.colors.textColor};
  transition: ${transition};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteTextColor};
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
