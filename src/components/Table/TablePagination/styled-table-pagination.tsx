import { transition } from "@/styles/theme";
import styled from "styled-components";

export const TablePaginationHeight = `50px`;

export const TablePaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.containerColor};
  padding: 0px 16px;
  margin-top: auto;
  height: ${TablePaginationHeight};
`;

export const TablePaginationInfo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.mdFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  gap: 0px 16px;

  @media screen and (max-width: 450px) {
    gap: 0rem 0.5rem;
  }
`;

export const TablePaginationButtonsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0px 4px;

  @media screen and (max-width: 450px) {
    gap: 0rem 0.3rem;
  }
`;

export const TablePaginationButton = styled.button<{ $activePage?: boolean }>`
  background: #fff;
  width: 30px;
  height: 30px;
  font-size: ${({ theme }) => theme.typography.fontSize.mdFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme, $activePage }) =>
    $activePage ? theme.colors.primaryColor : theme.colors.textColor};
  border: 1px solid
    ${({ theme, $activePage }) =>
      $activePage ? theme.colors.primaryColor : theme.colors.borderColor};
  border-radius: 8px;
  transition: ${transition};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.colors.textColor};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;

    &:hover {
      color: ${({ theme }) => theme.colors.textColor};
      background: transparent;

      span {
        color: ${({ theme }) => theme.colors.titleColor};
      }
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.whiteTextColor};

    span {
      color: ${({ theme }) => theme.colors.whiteTextColor};
    }

    @media screen and (max-width: 500px) {
      background: ${({ theme, $activePage }) =>
        $activePage ? theme.colors.primaryColor : "transparent"};
      color: ${({ theme, $activePage }) =>
        $activePage ? theme.colors.whiteTextColor : theme.colors.textColor};
      border: 1px solid
        ${({ theme, $activePage }) =>
          $activePage ? theme.colors.borderColor : "transparent"};
    }
  }

  @media screen and (max-width: 450px) {
    width: 35px;
    height: 35px;
  }
`;
