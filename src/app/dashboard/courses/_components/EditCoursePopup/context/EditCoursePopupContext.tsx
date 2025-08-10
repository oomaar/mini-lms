import { Course } from "@/types/Course";
import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";

type EditCoursePopup = {
  courseDTO: Course;
  setCourseDTO: (courseDTO: Course) => void;
};

const EditCoursePopupContext = createContext<EditCoursePopup | undefined>(
  undefined
);

type EditCoursePopupPropviderProps = PropsWithChildren<{
  children: ReactNode;
  course: Course;
}>;

export function EditCoursePopupProvider(props: EditCoursePopupPropviderProps) {
  const { children, course } = props;

  const [courseDTO, setCourseDTO] = useState<Course>(course);

  const contextValue = { courseDTO, setCourseDTO };

  return (
    <EditCoursePopupContext.Provider value={contextValue}>
      {children}
    </EditCoursePopupContext.Provider>
  );
}

export function useEditCoursePopup() {
  const context = useContext(EditCoursePopupContext);

  if (!context) {
    throw new Error(
      "useEditCoursePopup must be used within a EditCoursePopupProvider"
    );
  }

  return context;
}
