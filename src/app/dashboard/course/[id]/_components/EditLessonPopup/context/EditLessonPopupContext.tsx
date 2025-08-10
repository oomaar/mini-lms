import { Lesson } from "@/types/Lesson";
import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";

type EditLessonPopup = {
  lessonDTO: Lesson;
  setLessonDTO: (lessonDTO: Lesson) => void;
};

const EditLessonPopupContext = createContext<EditLessonPopup | undefined>(
  undefined
);

type EditLessonPopupPropviderProps = PropsWithChildren<{
  children: ReactNode;
  lesson: Lesson;
}>;

export function EditLessonPopupProvider(props: EditLessonPopupPropviderProps) {
  const { children, lesson } = props;

  const [lessonDTO, setLessonDTO] = useState<Lesson>(lesson);

  const contextValue = { lessonDTO, setLessonDTO };

  return (
    <EditLessonPopupContext.Provider value={contextValue}>
      {children}
    </EditLessonPopupContext.Provider>
  );
}

export function useEditLessonPopup() {
  const context = useContext(EditLessonPopupContext);

  if (!context) {
    throw new Error(
      "useEditLessonPopup must be used within a EditLessonPopupProvider"
    );
  }

  return context;
}
