import { NavbarHeight, SidebarWidth, transition } from "@/styles/theme";
import styled from "styled-components";

export const ChildrenMain = styled.main<{ $showSidebar: boolean }>`
  width: calc(100vw - (${SidebarWidth} + 16px));
  padding: 16px;
  margin-left: ${SidebarWidth};
  margin-top: ${NavbarHeight};
  transition: ${transition};

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
  }
`;
