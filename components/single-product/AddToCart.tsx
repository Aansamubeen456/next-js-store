'use client';

import React, { useState } from 'react';
import { useAuth } from '@clerk/nextjs';
import SelectProductAmount, { Mode } from './SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { addToCartAction } from '@/utils/actions';
import SubmitButton, { ProductSignInButton } from '../form/Buttons';

function AddToCart({ productId }: { productId: string }) {
  const { userId } = useAuth();
  const [amount, setAmount] = useState(1);

  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton
            text="add to cart"
            className="capitalize mt-8"
            size="default"
          />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
}

export default AddToCart;
