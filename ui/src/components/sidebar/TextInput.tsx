import React, { forwardRef } from "react";
import styled from "styled-components";

import { InputBoxContainer, Label } from "../shared/SettingsInputs";

const InputBox = styled.input<{ $disabled?: boolean }>`
  font-size: 16px;
  background-color: ${(props) => props.theme.color.darkOne};
  padding: 8px 12px;
  border: none;
  color: ${(props) => props.theme.color.lightOne};
  border-radius: 6px;
  width: 100%;
  ${(props) => props.$disabled && "pointer-events: none"};
`;

interface TextInputProps {
  label: string | React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
  defaultValue?: string;
  disabled?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return (
    <InputBoxContainer>
      <Label>{props.label}</Label>
      <InputBox
        onChange={props.onChange}
        onBlur={props.onBlur}
        type="text"
        value={props.value}
        defaultValue={props.defaultValue}
        name={props.name}
        ref={ref}
        readOnly={props.disabled}
      />
    </InputBoxContainer>
  );
});

export default TextInput;
