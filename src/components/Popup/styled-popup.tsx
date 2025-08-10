import { transition } from "@/styles/theme";
import styled from "styled-components";

export const PopUpContainer = styled.div<{
  $showPopup: boolean;
}>`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $showPopup }) => ($showPopup ? "100vh" : "0vh")};
  opacity: ${({ $showPopup }) => ($showPopup ? "1" : "0")};
  overflow: ${({ $showPopup }) => ($showPopup ? "visible" : "hidden")};
  transition: ${transition};
`;

export const PopupBackdrop = styled.div<{
  $showPopup: boolean;
}>`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 900;
  inset: 0;
  height: ${({ $showPopup }) => ($showPopup ? "100vh" : "0vh")};
  opacity: ${({ $showPopup }) => ($showPopup ? "visible" : "hidden")};
`;

export const PopupFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-top: auto;
  padding: 16px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 1rem;
`;
