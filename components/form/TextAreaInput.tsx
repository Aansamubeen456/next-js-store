import React from 'react';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type TextAreaInputProps = {
  name: string;
  defaultValue?: string;
  label?: string;
};

function TextAreaInput({ name, defaultValue, label }: TextAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        required
        rows={5}
        defaultValue={defaultValue}
        className="leading-loose"
      />
    </div>
  );
}

export default TextAreaInput;
