import React from 'react';

type InputType = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function FormInput({
  name,
  label,
  defaultValue,
  placeholder,
  type,
}: InputType) {
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
