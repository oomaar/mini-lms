import styled from "styled-components";

export const TableHeaderContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.containerColor};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  p {
    margin: 0px;
    color: ${({ theme }) => theme.colors.titleColor};
    font-size: ${({ theme }) => theme.typography.fontSize.regularFont};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;

export const TableHeaderSearchContainer = styled.div`
  background: ${({ theme }) => theme.colors.inputColor};
  width: 250px;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: 0px;
    border: 0px;
    padding-left: 8px;
    font-size: ${({ theme }) => theme.typography.fontSize.regularFont};
  }
`;
