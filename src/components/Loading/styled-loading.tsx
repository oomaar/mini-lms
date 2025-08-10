import styled from "styled-components";
import { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  padding: 80px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px 0px;
`;

export const Loader = styled.div<{ $radius?: number }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    width: ${({ $radius }) => ($radius ? `${$radius}px` : "50px")};
    height: ${({ $radius }) => ($radius ? `${$radius}px` : "50px")};
    border: 3px solid ${({ theme }) => theme.colors.barBackground};
    border-top-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
  }
`;
