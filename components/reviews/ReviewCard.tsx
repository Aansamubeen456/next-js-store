import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import Rating from './Rating';
import Comment from './Comment';

type ReviewCardProps = {
  reviewInfo: {
    comment: string;
    name: string;
    image: string;
    rating: number;
  };
  children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  const { comment, name, image, rating } = reviewInfo;

  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          {/* image */}
          <Image
            alt={name}
            src={image}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            {/* name */}
            <h3 className="capitalize font-bold text-sm mb-1">{name}</h3>
            {/* rating */}
            <Rating rating={rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* info */}
        <Comment comment={comment} />
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
}

export default ReviewCard;
