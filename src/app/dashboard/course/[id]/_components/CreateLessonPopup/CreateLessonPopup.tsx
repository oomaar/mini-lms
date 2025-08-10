import { Popup } from "@/components/Popup/Popup";
import { usePopupHelpers } from "@/hooks/usePopupHelpers";
import { Button } from "@/styles/Button";
import { CreateLessonPopupBody } from "./CreateLessonPopupBody/CreateLessonPopupBody";

type CreateLessonPopupProps = {
  courseId: string;
};

export function CreateLessonPopup(props: CreateLessonPopupProps) {
  const { courseId } = props;

  const {
    closePopup,
    isPopupOpen,
    openPopup,
    popupBodyKey,
  } = usePopupHelpers();

  return (
    <>
      <Button type="button" onClick={openPopup}>
        Add Lesson
      </Button>
      <Popup handleHidePopup={closePopup} showPopup={isPopupOpen}>
        <CreateLessonPopupBody
          key={popupBodyKey}
          closePopup={closePopup}
          courseId={courseId}
        />
      </Popup>
    </>
  );
}
