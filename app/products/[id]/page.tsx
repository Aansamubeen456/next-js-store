import React from 'react';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct, findExistingReview } from '@/utils/actions';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';
import ShareButton from '@/components/single-product/ShareButton';
import ProductReviews from '@/components/reviews/ProductReviews';
import SubmitReview from '@/components/reviews/SubmitReview';
import { auth } from '@clerk/nextjs/server';

async function SingleProduct({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, company, price, image, description, id: productId } = product;
  const dollarsAmount = formatCurrency(price);

  const { userId } = auth();
  // we are looking for null value send by database
  const reviewDoesnotExist =
    userId && !(await findExistingReview(productId, userId));

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* FIRST COL FOR IMAGE */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* SECOND COL FOR INFO*/}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={params.id} />
              <ShareButton productId={params.id} name={name} />
            </div>
          </div>
          <ProductRating productId={params.id} />

          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>
          <p className="leading-8 text-muted-foreground mt-6">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>

      {/* REVIEWS */}
      <ProductReviews productId={params.id} />
      {reviewDoesnotExist && <SubmitReview productId={params.id} />}
    </section>
  );
}

export default SingleProduct;
