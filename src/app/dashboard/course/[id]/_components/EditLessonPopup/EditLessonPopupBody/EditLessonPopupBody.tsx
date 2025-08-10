"use client";
import { FormInput } from "@/components/FormInput/FormInput";
import { PopupForm } from "@/components/Popup/components/PopupForm/PopupForm";
import { PopupHeader } from "@/components/Popup/components/PopupHeader/PopupHeader";
import { PopupFooter } from "@/components/Popup/styled-popup";
import { Button } from "@/styles/Button";
import { FormEvent, useCallback } from "react";
import { useUpdateLesson } from "@/hooks/useLessons/useUpdateLesson";
import { useEditLessonPopup } from "../context/EditLessonPopupContext";

type EditLessonPopupBodyProps = {
  closePopup: VoidFunction;
};

export function EditLessonPopupBody(props: EditLessonPopupBodyProps) {
  const { closePopup } = props;

  const { mutate: updateLesson } = useUpdateLesson();

  const { lessonDTO, setLessonDTO } = useEditLessonPopup();

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      updateLesson({
        lessonId: lessonDTO.id,
        updatedData: lessonDTO,
      });
      closePopup();
    },
    [lessonDTO, updateLesson, closePopup]
  );

  return (
    <PopupForm onSubmit={onSubmit} height="300px">
      <PopupHeader
        onPopupClose={closePopup}
        title={`Edit Lesson ${lessonDTO.title}`}
      />
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
        <Button type="button" onClick={closePopup} $outlined>
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </PopupFooter>
    </PopupForm>
  );
}
