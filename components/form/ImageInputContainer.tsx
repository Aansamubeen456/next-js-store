'use client';

import { actionFunction } from '@/utils/types';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import SubmitButton from './Buttons';
import ImageInput from './ImageInput';

type ImageInputContainerProps = {
  name: string;
  text: string;
  action: actionFunction;
  image: string;
  children: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { name, text, image, action } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded-md object-cover w-[200px] h-[200px] mb-8"
        priority
      />
      <Button
        variant="outline"
        size="sm"
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-8">
          {
            <FormContainer action={action}>
              {props.children}
              <ImageInput />
              <SubmitButton size="sm" />
            </FormContainer>
          }
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
