import { ChangeEvent } from "react";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  placeholder?: string;
  width?: string;
  errorState?: boolean;
};

export function Input(props: InputProps) {
  const {
    label,
    value,
    onChange,
    type = "text",
    name,
    placeholder,
    width,
    errorState,
  } = props;

  return (
    <div className={styles.inputContainer} style={width ? { width } : {}}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${styles.input} ${value ? styles.filled : ""}`}
        value={value}
        onChange={onChange}
      />
      <label
        className={`${
          errorState
            ? `${styles.inputLabelErrorState} ${styles.inputLabel}`
            : styles.inputLabel
        }`}
      >
        <span className={styles.labelSpan}>{label}</span>
      </label>
      {errorState && <p className={styles.inputErrorText}>required</p>}
    </div>
  );
}
