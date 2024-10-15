import React from 'react';
import { Checkbox } from '../ui/checkbox';

type CheckBoxInputProps = {
  name: string;
  label?: string;
  defaultChecked?: boolean;
};

function CheckBoxInput({
  name,
  label,
  defaultChecked = false,
}: CheckBoxInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox name={name} id={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}

export default CheckBoxInput;
