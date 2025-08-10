import { useCallback, useEffect, useState } from "react";

type UsePopupHelpersReturn = {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  popupBodyKey: number;
};

export function usePopupHelpers(): UsePopupHelpersReturn {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupBodyKey, setPopupBodyKey] = useState(0);

  // To reset popup state when closed & re-opened
  useEffect(
    () =>
      setPopupBodyKey((popUp) => (popUp === Number.MAX_VALUE ? 0 : popUp + 1)),
    [isPopupOpen]
  );

  const openPopup = useCallback(() => setIsPopupOpen(true), [setIsPopupOpen]);

  const closePopup = useCallback(() => setIsPopupOpen(false), [setIsPopupOpen]);

  return {
    isPopupOpen,
    openPopup,
    closePopup,
    popupBodyKey,
  };
}
