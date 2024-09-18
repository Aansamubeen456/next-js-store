import React from 'react';
import { Button } from '../ui/button';
import { FaHeart } from 'react-icons/fa';

function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button variant="outline" size="icon" className="cursor-pointer p-2">
      <FaHeart />
    </Button>
  );
}

export default FavoriteToggleButton;
