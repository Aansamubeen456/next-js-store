import { Cart } from '@prisma/client';
import React from 'react';
import { Card, CardTitle } from '../ui/card';
import FormContainer from '../form/FormContainer';
import SubmitButton from '../form/Buttons';
import { formatCurrency } from '@/utils/format';
import { Separator } from '../ui/separator';
import { createOrdeAction } from '@/utils/actions';

function CartTotals({ cart }: { cart: Cart }) {
  const { tax, cartTotal, orderTotal, shipping } = cart;

  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="SubTotal" amount={cartTotal} />
        <CartTotalRow label="Tax" amount={tax} />
        <CartTotalRow label="Shipping" amount={shipping} />
        <CardTitle className="mt-8">
          <CartTotalRow label="order Total" amount={orderTotal} />
        </CardTitle>
      </Card>
      <FormContainer action={createOrdeAction}>
        <SubmitButton text="place order" className="w-full mt-8" />
      </FormContainer>
    </div>
  );
}
export default CartTotals;

function CartTotalRow({
  label,
  lastRow,
  amount,
}: {
  label: string;
  lastRow?: boolean;
  amount: number;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="mt-2" />}
    </>
  );
}
