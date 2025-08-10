import { FormInput } from "@/components/FormInput/FormInput";
import { PopupForm } from "@/components/Popup/components/PopupForm/PopupForm";
import { PopupHeader } from "@/components/Popup/components/PopupHeader/PopupHeader";
import { PopupFooter } from "@/components/Popup/styled-popup";
import { useCreateCourse } from "@/hooks/useCourses/useCreateCourse";
import { Button } from "@/styles/Button";
import { Course } from "@/types/Course";
import { useState } from "react";

type AddCoursePopupBodyProps = { closePopup: VoidFunction };

export function AddCoursePopupBody(props: AddCoursePopupBodyProps) {
  const { closePopup } = props;

  const [courseDTO, setCourseDTO] = useState<Omit<Course, "id">>({
    title: "",
    description: "",
    lessonIds: [],
  });

  const { mutate } = useCreateCourse();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(courseDTO);
    closePopup();
  };

  return (
    <PopupForm onSubmit={onSubmit} height="300px">
      <PopupHeader onPopupClose={closePopup} title="Add new course" />
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
        <Button type="button" $outlined onClick={closePopup}>
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </PopupFooter>
    </PopupForm>
  );
}
