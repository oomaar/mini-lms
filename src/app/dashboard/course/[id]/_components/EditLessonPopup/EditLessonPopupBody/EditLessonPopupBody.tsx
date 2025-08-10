"use client";
import { FormInput } from "@/components/FormInput/FormInput";
import { PopupForm } from "@/components/Popup/components/PopupForm/PopupForm";
import { PopupHeader } from "@/components/Popup/components/PopupHeader/PopupHeader";
import { PopupFooter } from "@/components/Popup/styled-popup";
import { Button } from "@/styles/Button";
import { FormEvent, useCallback, useState } from "react";
import { useUpdateLesson } from "@/hooks/useLessons/useUpdateLesson";
import { useEditLessonPopup } from "../context/EditLessonPopupContext";

type EditLessonPopupBodyProps = {
  closePopup: VoidFunction;
};

export function EditLessonPopupBody(props: EditLessonPopupBodyProps) {
  const { closePopup } = props;

  const { mutate: updateLesson } = useUpdateLesson();
  const { lessonDTO, setLessonDTO } = useEditLessonPopup();

  const [formErros, setFormErros] = useState({
    title: false,
    content: false,
  });

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (lessonDTO.title === "" || lessonDTO.content === "") {
        setFormErros({
          title: lessonDTO.title === "",
          content: lessonDTO.content === "",
        });
        return;
      }

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
          onChange={(e) => {
            setLessonDTO({ ...lessonDTO, title: e.target.value });
            setFormErros({ ...formErros, title: false });
          }}
          errorState={{
            isError: formErros.title || false,
            errorMessage: formErros.title ? "Title is required" : "",
          }}
        />
        <FormInput
          label="Content"
          type="text"
          value={lessonDTO.content}
          onChange={(e) => {
            setLessonDTO({ ...lessonDTO, content: e.target.value });
            setFormErros({ ...formErros, content: false });
          }}
          errorState={{
            isError: formErros.content || false,
            errorMessage: formErros.content ? "Content is required" : "",
          }}
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
