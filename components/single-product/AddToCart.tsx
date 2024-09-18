import React from 'react';
import { Button } from '../ui/button';
// { productId }: { productId: string }
function AddToCart() {
  return (
    <Button className="capitalize mt-8" size="lg">
      add to cart
    </Button>
  );
}

export default AddToCart;
