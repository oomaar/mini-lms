import { ScreenHeaderContainer } from "./styled-screen-header";
import { ReactNode } from "react";

type ScreenHeaderProps = {
  title: string;
  buttonElement?: ReactNode;
};

export const ScreenHeader = (props: ScreenHeaderProps) => {
  const { title, buttonElement } = props;

  return (
    <ScreenHeaderContainer>
      <p>{title}</p>
      {buttonElement && buttonElement}
    </ScreenHeaderContainer>
  );
};
