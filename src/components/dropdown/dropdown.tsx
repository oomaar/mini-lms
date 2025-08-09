"use client";
import { useState } from "react";
import styles from "./dropdown.module.css";
import { useDropdown } from "./hooks/useDropdown";

type DropdownProps<T> = {
  options: T[];
  placeholder?: string;
  onSelect?: (value: T) => void;
  getLabel?: (option: T) => string;
  width?: string;
};

export default function Dropdown<T>(props: DropdownProps<T>) {
  const {
    options,
    placeholder = "Select...",
    onSelect,
    getLabel = (option) => String(option),
    width,
  } = props;

  const {
    dropdownContainerRef,
    showDropdown,
    hideDropdown,
    toggleDropdown,
  } = useDropdown();

  const [selected, setSelected] = useState<T | null>(null);

  const handleSelect = (option: T) => {
    setSelected(option);
    hideDropdown();
    onSelect?.(option);
  };

  return (
    <div
      className={styles.dropdown}
      style={width ? { width } : {}}
      ref={dropdownContainerRef}
    >
      <button
        type="button"
        className={styles.dropdownToggle}
        onClick={() => toggleDropdown()}
      >
        {selected ? getLabel(selected) : placeholder}
        <span
          className={`${
            showDropdown
              ? `${styles.arrow} ${styles.arrowRotate}`
              : styles.arrow
          } material-symbols-outlined `}
        >
          keyboard_arrow_down
        </span>
      </button>
      <ul
        className={`${
          showDropdown
            ? `${styles.dropdownMenu} ${styles.showDropdownMenu}`
            : styles.dropdownMenu
        }`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className={styles.dropdownItem}
            onClick={() => handleSelect(option)}
          >
            {getLabel(option)}
          </li>
        ))}
      </ul>
    </div>
  );
}
