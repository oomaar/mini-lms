import styled from "styled-components";

export const FormInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 45px;
`;

export const FormInputLabel = styled.label`
  width: 100px;
  font-size: ${({ theme }) => theme.typography.fontSize.mdFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
`;

export const FormInputWapper = styled.div<{ $isError?: boolean }>`
  flex: 1;
  margin-left: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.inputColor};
  border: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.colors.danger : theme.colors.borderColor};
`;

export const FormInputInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 0px;
  outline: 0px;
  background: transparent;
`;

export const FormInputErrorText = styled.p`
  position: absolute;
  bottom: 0px;
  font-size: ${({ theme }) => theme.typography.fontSize.smFontSize};
  color: ${({ theme }) => theme.colors.danger};
  margin: 0px;
`;
