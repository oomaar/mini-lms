import { FormInput } from "@/components/FormInput/FormInput";
import { PopupForm } from "@/components/Popup/components/PopupForm/PopupForm";
import { PopupHeader } from "@/components/Popup/components/PopupHeader/PopupHeader";
import { PopupFooter } from "@/components/Popup/styled-popup";
import { useCreateLesson } from "@/hooks/useLessons/useCreateLesson";
import { Button } from "@/styles/Button";
import { Lesson } from "@/types/Lesson";
import { useState } from "react";

type CreateLessonPopupBodyProps = {
  closePopup: VoidFunction;
  courseId: string;
};

export function CreateLessonPopupBody(props: CreateLessonPopupBodyProps) {
  const { closePopup, courseId } = props;

  const [lessonDTO, setLessonDTO] = useState<Omit<Lesson, "id">>({
    title: "",
    content: "",
    courseId,
  });

  const { mutate } = useCreateLesson(courseId);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(lessonDTO);
    closePopup();
  };

  return (
    <PopupForm onSubmit={onSubmit} height="300px">
      <PopupHeader onPopupClose={closePopup} title="Add new course" />
      <div>
        <FormInput
          label="Title"
          type="text"
          value={lessonDTO.title}
          onChange={(e) =>
            setLessonDTO({ ...lessonDTO, title: e.target.value })
          }
        />
        <FormInput
          label="Content"
          type="text"
          value={lessonDTO.content}
          onChange={(e) =>
            setLessonDTO({ ...lessonDTO, content: e.target.value })
          }
        />
      </div>
      <PopupFooter>
        <Button type="button" $outlined onClick={closePopup}>
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </PopupFooter>
    </PopupForm>
  );
}
