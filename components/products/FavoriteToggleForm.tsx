'use client';

import { toggleFavoriteAction } from '@/utils/actions';
import { usePathname } from 'next/navigation';
import { CardSubmitButton } from '../form/Buttons';
import FormContainer from '../form/FormContainer';

type FavoriteToggleFormProps = {
  favoriteId: string | null;
  productId: string;
};

function FavoriteToggleForm({
  favoriteId,
  productId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    productId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}

export default FavoriteToggleForm;
