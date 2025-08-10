import { FormEventHandler, PropsWithChildren } from "react";
import { PopupFormForm } from "./styled-popup-form";

type PopupFormProps = PropsWithChildren<{
  onSubmit?: FormEventHandler<HTMLFormElement>;
  height?: string;
  width?: string;
}>;

export const PopupForm = (props: PopupFormProps) => {
  const { onSubmit, children, height, width } = props;

  return (
    <PopupFormForm $height={height} $width={width} onSubmit={onSubmit}>
      {children}
    </PopupFormForm>
  );
};
