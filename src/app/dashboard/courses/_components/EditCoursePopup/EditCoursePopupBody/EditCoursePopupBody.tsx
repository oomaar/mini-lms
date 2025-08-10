import { FormInput } from "@/components/FormInput/FormInput";
import { PopupForm } from "@/components/Popup/components/PopupForm/PopupForm";
import { PopupHeader } from "@/components/Popup/components/PopupHeader/PopupHeader";
import { useEditCoursePopup } from "../context/EditCoursePopupContext";
import { PopupFooter } from "@/components/Popup/styled-popup";
import { Button } from "@/styles/Button";
import { useUpdateCourse } from "@/hooks/useCourses/useUpdateCourseById";
import { FormEvent, useCallback, useState } from "react";

type EditCoursePopupBodyProps = {
  closePopup: VoidFunction;
};

export function EditCoursePopupBody(props: EditCoursePopupBodyProps) {
  const { closePopup } = props;
  const { courseDTO, setCourseDTO } = useEditCoursePopup();

  const { mutate: updateCourse } = useUpdateCourse();

  const [formErros, setFormErros] = useState({
    title: false,
    description: false,
  });

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (courseDTO.title === "" || courseDTO.description === "") {
        setFormErros({
          title: courseDTO.title === "",
          description: courseDTO.description === "",
        });
        return;
      }

      updateCourse({
        id: courseDTO.id,
        updatedData: courseDTO,
      });
      closePopup();
    },
    [courseDTO, updateCourse, closePopup]
  );

  return (
    <PopupForm onSubmit={onSubmit} height="300px">
      <PopupHeader
        onPopupClose={closePopup}
        title={`Edit Course ${courseDTO.title}`}
      />
      <div>
        <FormInput
          label="Title"
          type="text"
          value={courseDTO.title}
          onChange={(e) => {
            setCourseDTO({ ...courseDTO, title: e.target.value });
            setFormErros({ ...formErros, title: false });
          }}
          errorState={{
            isError: formErros.title || false,
            errorMessage: formErros.title ? "Title is required" : "",
          }}
        />
        <FormInput
          label="Description"
          type="text"
          value={courseDTO.description}
          onChange={(e) => {
            setCourseDTO({ ...courseDTO, description: e.target.value });
            setFormErros({ ...formErros, description: false });
          }}
          errorState={{
            isError: formErros.description || false,
            errorMessage: formErros.description
              ? "Description is required"
              : "",
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
