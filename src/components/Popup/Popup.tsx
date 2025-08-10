import { PropsWithChildren, useEffect } from "react";
import { PopupBackdrop, PopUpContainer } from "./styled-popup";
import { ReactPortal } from "../ReactPortal";

type PopupProps = PropsWithChildren<{
  handleHidePopup: () => void;
  showPopup: boolean;
}>;

export const Popup = (props: PopupProps) => {
  const { handleHidePopup, children, showPopup } = props;

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showPopup]);

  return (
    <ReactPortal>
      <PopUpContainer $showPopup={showPopup}>
        <PopupBackdrop $showPopup={showPopup} onClick={handleHidePopup} />
        {children}
      </PopUpContainer>
    </ReactPortal>
  );
};
