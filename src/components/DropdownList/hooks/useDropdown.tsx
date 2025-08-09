import { MutableRefObject, useEffect, useRef, useState } from "react";

type UseDropdown = {
  showDropdown: boolean;
  dropdownContainerRef: MutableRefObject<HTMLDivElement | null>;
  viewDropdown: () => void;
  hideDropdown: () => void;
  toggleDropdown: () => void;
};

export const useDropdown = (
  defaultValue?: boolean,
  disableOnElseWhereClick?: boolean
): UseDropdown => {
  const [showDropdown, setShowDropdown] = useState(
    defaultValue ? defaultValue : false
  );
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);

  const viewDropdown = () => setShowDropdown(true);
  const hideDropdown = () => setShowDropdown(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    if (disableOnElseWhereClick) return;

    const onElseWhereClick = (e: MouseEvent) => {
      if (dropdownContainerRef.current?.contains(e.target as Node) === false) {
        hideDropdown();
      }
    };

    document.body.addEventListener("click", onElseWhereClick);

    return () => document.body.removeEventListener("click", onElseWhereClick);
  }, [showDropdown, disableOnElseWhereClick]);

  return {
    showDropdown,
    dropdownContainerRef,
    viewDropdown,
    hideDropdown,
    toggleDropdown,
  };
};
