'use client';
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import FormContainer from '../form/FormContainer';
import { createReviewAction } from '@/utils/actions';
import RatingInput from './RatingInput';
import TextAreaInput from '../form/TextAreaInput';
import SubmitButton from '../form/Buttons';

function SubmitReview({ productId }: { productId: string }) {
  const [isReviewFormAvailable, setIsReviewFormAvailable] = useState(false);
  const { user } = useUser();

  return (
    <div>
      <Button
        size="lg"
        className="capitalize"
        onClick={() => setIsReviewFormAvailable((prev) => !prev)}
      >
        leave reviews
      </Button>
      {isReviewFormAvailable && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />
            <input
              type="hidden"
              name="authorName"
              value={user?.firstName || 'user'}
            />
            <input
              type="hidden"
              name="authorImageUrl"
              value={user?.imageUrl || ''}
            />
            <RatingInput name="rating" />
            <TextAreaInput
              name="comment"
              defaultValue="outstanding product!"
              label="feedback"
            />
            <SubmitButton className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
