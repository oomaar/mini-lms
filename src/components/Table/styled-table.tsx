import { NavbarHeight, Shadow } from "@/styles/theme";
import styled from "styled-components";
import { TablePaginationHeight } from "./TablePagination/styled-table-pagination";

export const TableContainer = styled.div<{ $height?: string }>`
  height: ${({ $height }) =>
    $height ? $height : `calc(100vh - (${NavbarHeight} + 45px + 16px + 45px))`};
  border-radius: 8px;
  box-shadow: ${Shadow};
  display: flex;
  flex-direction: column;
`;

export const TableWrapper = styled.div`
  height: calc(100% - ${TablePaginationHeight});
  overflow-y: auto;

  ::-webkit-scrollbar {
    height: 7px;
  }

  @media screen and (max-width: 1540px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const TableTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TBody = styled.tbody`
  tr {
    &:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.inputColor};
    }
  }
`;

export const TDContainer = styled.div<{ $width?: number }>`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  height: 50px;
  width: ${({ $width }) => `${$width}px`};
`;

export const TDText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.mdFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 0;
`;

export const TDLink = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.mdFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.titleColor};
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }

  a {
    color: ${({ theme }) => theme.colors.titleColor};
    text-decoration: none;
  }
`;

export const TH = styled.th<{
  $actions?: boolean;
}>`
  div {
    width: ${({ $actions }) => ($actions ? "100px" : "unset")};
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.typography.fontSize.mdFontSize};
    padding: 8px;
    margin: 8px 0px;

    @media screen and (max-width: 1540px) {
      width: ${({ $actions }) => ($actions ? "70px" : "150px")};
    }
  }
`;
