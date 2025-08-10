import { PropsWithChildren, useEffect } from "react";
import { PopupBackdrop, PopUpContainer } from "./styled-popup";
import { ReactPortal } from "../ReactPortal";

type PopupProps = PropsWithChildren<{
  handleHideModal: () => void;
  showPopup: boolean;
}>;

export const Popup = (props: PopupProps) => {
  const { handleHideModal, children, showPopup } = props;

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
        <PopupBackdrop $showPopup={showPopup} onClick={handleHideModal} />
        {children}
      </PopUpContainer>
    </ReactPortal>
  );
};
