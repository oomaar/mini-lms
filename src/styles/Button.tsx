import styled from "styled-components";
import { transition } from "./theme";

export const Button = styled.button<{ $outlined?: boolean; $danger?: boolean }>`
  border: 1px solid
    ${({ theme, $outlined }) =>
      $outlined ? theme.colors.borderColor : "transparent"};
  outline: 0px;
  padding: 8px 16px;
  border-radius: 8px;
  background: ${({ theme, $outlined, $danger }) =>
    $outlined
      ? "transparent"
      : $danger
      ? theme.colors.danger
      : theme.colors.primaryColor};
  color: ${({ theme, $outlined }) =>
    $outlined ? theme.colors.textColor : theme.colors.whiteTextColor};
  transition: ${transition};
  font-size: ${({ theme }) => theme.typography.fontSize.mdFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryColor};
    border-color: ${({ theme }) => theme.colors.borderColor};
    color: ${({ theme }) => theme.colors.whiteTextColor};
  }
`;
