import { ActionsListListItem } from "@/components/ActionsList/styled-actions-list";
import { Popup } from "@/components/Popup/Popup";
import { usePopupHelpers } from "@/hooks/usePopupHelpers";
import { Lesson } from "@/types/Lesson";
import { EditLessonPopupBody } from "./EditLessonPopupBody/EditLessonPopupBody";
import { EditLessonPopupProvider } from "./context/EditLessonPopupContext";

type EditLessonPopupProps = {
  lessonDTO: Lesson;
  courseId: string;
};

export function EditLessonPopup(props: EditLessonPopupProps) {
  const { lessonDTO, courseId } = props;

  const {
    closePopup,
    isPopupOpen,
    openPopup,
    popupBodyKey,
  } = usePopupHelpers();

  return (
    <EditLessonPopupProvider lesson={lessonDTO}>
      <ActionsListListItem onClick={openPopup}>
        <span className="material-symbols-outlined">edit</span>Edit
      </ActionsListListItem>
      <Popup showPopup={isPopupOpen} handleHidePopup={closePopup}>
        <EditLessonPopupBody
          key={popupBodyKey}
          closePopup={closePopup}
          courseId={courseId}
        />
      </Popup>
    </EditLessonPopupProvider>
  );
}
