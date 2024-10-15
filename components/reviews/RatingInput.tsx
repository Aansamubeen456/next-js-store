import React from 'react';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type RatingInputProps = {
  name: string;
  lable?: string;
};

function RatingInput({ name, lable }: RatingInputProps) {
  const numbers = Array.from({ length: 5 }, (_, index) => {
    return (index + 1).toString();
  }).reverse();
  // console.log(numbers);

  return (
    <div className="max-w-xs mb-2">
      <Label htmlFor={name} className="capitalize">
        {lable || name}
      </Label>
      <Select defaultValue={numbers[0]} required name={name}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {numbers.map((number) => {
            return (
              <SelectItem key={number} value={number}>
                {number}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}

export default RatingInput;
