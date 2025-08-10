import { ActionsListListItem } from "@/components/ActionsList/styled-actions-list";
import { Popup } from "@/components/Popup/Popup";
import { usePopupHelpers } from "@/hooks/usePopupHelpers";
import { Course } from "@/types/Course";
import { EditCoursePopupProvider } from "./context/EditCoursePopupContext";
import { EditCoursePopupBody } from "./EditCoursePopupBody/EditCoursePopupBody";

type EditCoursePopupProps = {
  courseDTO: Course;
};

export function EditCoursePopup(props: EditCoursePopupProps) {
  const { courseDTO } = props;

  const {
    closePopup,
    isPopupOpen,
    openPopup,
    popupBodyKey,
  } = usePopupHelpers();

  return (
    <EditCoursePopupProvider course={courseDTO}>
      <ActionsListListItem onClick={openPopup}>
        <span className="material-symbols-outlined">edit</span>Edit
      </ActionsListListItem>
      <Popup showPopup={isPopupOpen} handleHidePopup={closePopup}>
        <EditCoursePopupBody key={popupBodyKey} closePopup={closePopup} />
      </Popup>
    </EditCoursePopupProvider>
  );
}
