import { Popup } from "@/components/Popup/Popup";
import { usePopupHelpers } from "@/hooks/usePopupHelpers";
import { Button } from "@/styles/Button";
import { AddCoursePopupBody } from "./AddCoursePopupBody/AddCoursePopupBody";

export function AddCoursePopup() {
  const {
    closePopup,
    isPopupOpen,
    openPopup,
    popupBodyKey,
  } = usePopupHelpers();

  return (
    <>
      <Button type="button" onClick={openPopup}>
        Add Course
      </Button>
      <Popup handleHidePopup={closePopup} showPopup={isPopupOpen}>
        <AddCoursePopupBody key={popupBodyKey} closePopup={closePopup} />
      </Popup>
    </>
  );
}
