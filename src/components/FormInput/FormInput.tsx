import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import {
  FormInputContainer,
  FormInputErrorText,
  FormInputInput,
  FormInputLabel,
  FormInputWapper,
} from "./styled-form-input";

type FormInputProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  errorState?: {
    isError: boolean;
    errorMessage: string;
  };
};

export function FormInput(props: FormInputProps) {
  const { label, type, value, onChange, placeholder, errorState } = props;

  return (
    <FormInputContainer>
      <FormInputLabel>{label}</FormInputLabel>
      <FormInputWapper $isError={errorState?.isError}>
        <FormInputInput
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </FormInputWapper>
      {errorState && (
        <FormInputErrorText>{errorState.errorMessage}</FormInputErrorText>
      )}
    </FormInputContainer>
  );
}
