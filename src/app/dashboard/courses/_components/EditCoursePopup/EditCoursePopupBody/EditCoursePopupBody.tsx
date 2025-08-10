import { FormInput } from "@/components/FormInput/FormInput";
import { PopupForm } from "@/components/Popup/components/PopupForm/PopupForm";
import { PopupHeader } from "@/components/Popup/components/PopupHeader/PopupHeader";
import { useEditCoursePopup } from "../context/EditCoursePopupContext";
import { PopupFooter } from "@/components/Popup/styled-popup";
import { Button } from "@/styles/Button";
import { useUpdateCourse } from "@/hooks/useCourses/useUpdateCourseById";
import { FormEvent, useCallback } from "react";

type EditCoursePopupBodyProps = {
  closePopup: VoidFunction;
};

export function EditCoursePopupBody(props: EditCoursePopupBodyProps) {
  const { closePopup } = props;
  const { courseDTO, setCourseDTO } = useEditCoursePopup();

  const { mutate: updateCourse } = useUpdateCourse();

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
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
          onChange={(e) =>
            setCourseDTO({ ...courseDTO, title: e.target.value })
          }
        />
        <FormInput
          label="Description"
          type="text"
          value={courseDTO.description}
          onChange={(e) =>
            setCourseDTO({ ...courseDTO, description: e.target.value })
          }
        />
      </div>
      <PopupFooter>
        <Button type="button" onClick={closePopup} $outlined>
          Cancel
        </Button>
        <Button type="submit" onClick={closePopup}>
          Confirm
        </Button>
      </PopupFooter>
    </PopupForm>
  );
}
