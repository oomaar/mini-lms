import styled from "styled-components";

export const PopupHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8px 16px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  div {
    h1 {
      font-size: ${({ theme }) => theme.typography.fontSize.regularFont};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      color: ${({ theme }) => theme.colors.titleColor};
      margin: 0;

      @media screen and (max-width: 500px) {
        max-width: 75%;
      }
    }
  }
`;

export const PopupCloseIcon = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor};
`;
