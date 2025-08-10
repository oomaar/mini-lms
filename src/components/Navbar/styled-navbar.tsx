import { NavbarHeight, Shadow, SidebarWidth, transition } from "@/styles/theme";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0px;
  right: 0px;
  left: ${SidebarWidth};
  height: ${NavbarHeight};
  z-index: 100;
  background: #fff;
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
