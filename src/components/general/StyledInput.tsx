import React from "react";

interface Props {
  label?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  type?: string;
  name?: string;
}

const StyledInput = ({
  label,
  value,
  onChange,
  placeholder,
  type,
  name,
}: Props) => {
  return (
    <label className="w-full">
      {label}
      <input
        autoComplete="current-password"
        className="outline outline-1 px-2 py-1 p rounded-lg  focus:outline-gray-800 focus:outline-2 text-gray-500 w-full"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </label>
  );
};

export default StyledInput;
