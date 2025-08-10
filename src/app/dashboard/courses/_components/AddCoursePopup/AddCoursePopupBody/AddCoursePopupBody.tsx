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
  const [formErros, setFormErros] = useState({
    title: false,
    description: false,
  });

  const { mutate } = useCreateCourse();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (courseDTO.title === "" || courseDTO.description === "") {
      setFormErros({
        title: courseDTO.title === "",
        description: courseDTO.description === "",
      });
      return;
    }
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
          placeholder="Enter course title..."
          errorState={{
            isError: formErros.title || false,
            errorMessage: formErros.title ? "Title is required" : "",
          }}
        />
        <FormInput
          label="Description"
          type="text"
          value={courseDTO.description}
          onChange={(e) =>
            setCourseDTO({ ...courseDTO, description: e.target.value })
          }
          placeholder="Enter course description..."
          errorState={{
            isError: formErros.description || false,
            errorMessage: formErros.description
              ? "Description is required"
              : "",
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
