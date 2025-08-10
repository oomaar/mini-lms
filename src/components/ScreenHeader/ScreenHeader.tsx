import { ScreenHeaderContainer } from "./styled-screen-header";

type ScreenHeaderProps = {
  title: string;
};

export const ScreenHeader = (props: ScreenHeaderProps) => {
  const { title } = props;

  return (
    <ScreenHeaderContainer>
      <p>{title}</p>
    </ScreenHeaderContainer>
  );
};
