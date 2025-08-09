import { SidebarWidth, transition } from "@/styles/theme";
import styled from "styled-components";

export const SidebarContainer = styled.div<{ $showSidebar: boolean }>`
  position: fixed;
  inset: 0px;
  right: unset;
  width: ${SidebarWidth};
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.whiteTextColor};
  padding: 16px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  transition: ${transition};

  @media screen and (max-width: 768px) {
    width: ${({ $showSidebar }) => ($showSidebar ? SidebarWidth : "0px")};
    padding: ${({ $showSidebar }) => ($showSidebar ? "16px" : "0px")};
    overflow: ${({ $showSidebar }) => ($showSidebar ? "visible" : "hidden")};
  }
`;

export const SidebarBackdrop = styled.div<{ $showSidebar: boolean }>`
  position: fixed;
  inset: 0px;
  background: rgba(0, 0, 0, 0.5);
  width: 0px;
  z-index: 100;
  transition: ${transition};

  @media screen and (max-width: 768px) {
    width: ${({ $showSidebar }) => ($showSidebar ? "100%" : "0px")};
  }
`;

export const SidebarContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SidebarLogo = styled.span`
  font-size: 84px;
`;

export const SidebarCloseIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const SidebarList = styled.ul`
  margin-top: 64px;
`;

export const SidebarListItem = styled.li`
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;

  a {
    display: flex;
    align-items: center;
    gap: 0px 16px;
    padding: 8px 16px;
  }
`;
