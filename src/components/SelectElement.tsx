import { SetStateAction } from "react";
import styled from "styled-components";

const SelectBoxDiv = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: rgb(255 255 255 / 5%);
  justify-content: center;
`;

const SelectBox = styled.select`
  line-height: 1.25rem;
  padding: 0.375rem 0;
  background: transparent;
  color: rgb(255, 255, 255);
  border: none;
  font-size: 16px;
    width: 100%;

  & option {
    color: black;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
    border: none;
  }

  /* For Firefox */
  &::-moz-focus-inner {
    border: 0;
  }
`;

type Option = {
  label: string;
  value: string;
};

interface SelectElementProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode; // Optional icon prop for flexibility
}

const SelectElement = ({ options, value, onChange, icon }: SelectElementProps) => {
  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    onChange(e.target.value as string);
  };

  return (
    <SelectBoxDiv>
      {icon && icon}
      <SelectBox onChange={handleChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectBox>
    </SelectBoxDiv>
  );
};

export default SelectElement;
