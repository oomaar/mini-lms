import { NavbarHeight, Shadow, SidebarWidth, transition } from "@/styles/theme";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0px;
  right: 0px;
  left: ${SidebarWidth};
  height: ${NavbarHeight};
  z-index: 100;
  background: ${({ theme }) => theme.colors.containerColor};
  box-shadow: ${Shadow};
  display: flex;
  padding: 16px;
  transition: ${transition};

  @media screen and (max-width: 768px) {
    left: 0px;
  }
`;

export const NavbarNavigationIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavbarUserContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0px 16px;
`;

export const NavbarUserContainerAvatar = styled.div`
  background: ${({ theme }) => theme.colors.borderColor};
  padding: 8px;
  border-radius: 100%;
`;

export const NavbarDropdownContainer = styled.div`
  position: relative;
`;

export const NavbarDropdownToggle = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0px;
  outline: 0px;
  padding: 0px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const NavbarDropdownList = styled.ul<{ $showDropdown: boolean }>`
  width: 100px;
  position: absolute;
  right: 0px;
  top: 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.containerColor};
  box-shadow: ${Shadow};

  height: ${({ $showDropdown }) => ($showDropdown ? "50px" : "0px")};
  overflow: ${({ $showDropdown }) => ($showDropdown ? "visible" : "hidden")};
  opacity: ${({ $showDropdown }) => ($showDropdown ? "1" : "0")};
`;

export const NavbarDropdownListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0px 8px;
  padding: 4px;
  color: ${({ theme }) => theme.colors.textColor};
  transition: ${transition};
  margin-top: 8px;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteTextColor};
  }
`;
