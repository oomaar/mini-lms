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

  const [formErros, setFormErros] = useState({
    title: false,
    content: false,
  });

  const { mutate } = useCreateLesson(courseId);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (lessonDTO.title === "" || lessonDTO.content === "") {
      setFormErros({
        title: lessonDTO.title === "",
        content: lessonDTO.content === "",
      });
      return;
    }

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
          onChange={(e) => {
            setLessonDTO({ ...lessonDTO, title: e.target.value });
            setFormErros({ ...formErros, title: false });
          }}
          placeholder="Enter lesson title..."
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
          placeholder="Enter lesson content..."
          errorState={{
            isError: formErros.content || false,
            errorMessage: formErros.content ? "Content is required" : "",
          }}
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
