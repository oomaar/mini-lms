import styled from "styled-components";

export const PopupFormForm = styled.form<{ $height?: string; $width?: string }>`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  width: ${({ $width }) => ($width !== undefined ? $width : "470px")};
  height: ${({ $height }) => ($height !== undefined ? $height : "500px")};
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 980px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    position: fixed;
    border-radius: 2.625rem 2.625rem 0rem 0rem;
    bottom: 0;
  }

  @media screen and (max-width: 426px) {
    padding: 1rem 0.5rem;
  }
`;
