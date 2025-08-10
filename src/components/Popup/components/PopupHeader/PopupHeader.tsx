import { PopupCloseIcon, PopupHeaderContainer } from "./styled-popup-header";

type PopupHeaderProps = {
  title: string;
  onPopupClose: () => void;
};

export const PopupHeader = (props: PopupHeaderProps) => {
  const { title, onPopupClose } = props;
  return (
    <PopupHeaderContainer>
      <div>
        <h1>{title}</h1>
      </div>
      <PopupCloseIcon onClick={onPopupClose}>
        <span className="material-symbols-outlined">close</span>
      </PopupCloseIcon>
    </PopupHeaderContainer>
  );
};
