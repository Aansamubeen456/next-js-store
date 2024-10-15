import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import SectionTitle from '@/components/global/SectionTitle';
import ReviewCard from '@/components/reviews/ReviewCard';
import { deleteReviewAction, fetchProductReviewsByUser } from '@/utils/actions';

async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();

  if (reviews.length === 0)
    return <SectionTitle text="you have no reviews yet!" />;

  return (
    <>
      <SectionTitle text="your reviews" />

      <section className="grid md:grid-cols-2 gap-8 my-8">
        {reviews.map((review) => {
          const { id, rating, comment } = review;
          const { image, name } = review.product;

          const reviewInfo = {
            rating,
            comment,
            name,
            image,
          };

          return (
            <ReviewCard key={id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });

  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default ReviewsPage;
