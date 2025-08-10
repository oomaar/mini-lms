import { ActionsListListItem } from "@/components/ActionsList/styled-actions-list";
import { PopupForm } from "@/components/Popup/components/PopupForm/PopupForm";
import { PopupHeader } from "@/components/Popup/components/PopupHeader/PopupHeader";
import { Popup } from "@/components/Popup/Popup";
import { PopupFooter } from "@/components/Popup/styled-popup";
import { useDeleteCourse } from "@/hooks/useCourses/useDeleteCourse";
import { usePopupHelpers } from "@/hooks/usePopupHelpers";
import { Button } from "@/styles/Button";
import { Course } from "@/types/Course";
import { FormEvent, useCallback } from "react";
import styled from "styled-components";

type DeleteCoursePopupProps = {
  courseDTO: Course;
};

export function DeleteCoursePopup(props: DeleteCoursePopupProps) {
  const { courseDTO } = props;

  const { mutate: deleteCourse } = useDeleteCourse();

  const {
    closePopup,
    isPopupOpen,
    openPopup,
    popupBodyKey,
  } = usePopupHelpers();

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      deleteCourse(courseDTO.id);
      closePopup();
    },
    [deleteCourse, closePopup, courseDTO]
  );

  return (
    <>
      <ActionsListListItem onClick={openPopup} $danger>
        <span className="material-symbols-outlined">delete</span> Delete
      </ActionsListListItem>
      <Popup handleHidePopup={closePopup} showPopup={isPopupOpen}>
        <PopupForm key={popupBodyKey} onSubmit={onSubmit} height="200px">
          <PopupHeader
            title={`Delete Course ${courseDTO.title}`}
            onPopupClose={closePopup}
          />
          <PopupBodyContainer>
            <p>Are you sure you want to delete this course?</p>
          </PopupBodyContainer>
          <PopupFooter>
            <Button type="button" $outlined onClick={closePopup}>
              Cancel
            </Button>
            <Button $danger type="submit">
              Delete
            </Button>
          </PopupFooter>
        </PopupForm>
      </Popup>
    </>
  );
}

const PopupBodyContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.titleColor};
    font-size: ${({ theme }) => theme.typography.fontSize.regularFont};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }
`;
