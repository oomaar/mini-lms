import styled from "styled-components";

export const ScreenHeaderContainer = styled.div`
  padding: 8px;

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.lgFontSize};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.titleColor};
    margin: 0px;
  }
`;
