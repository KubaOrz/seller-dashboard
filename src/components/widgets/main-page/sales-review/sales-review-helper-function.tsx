import { ReviewModel, ReviewType } from '../review/model/Review.model';
import { Review, reviews } from '../../../../tools/mock-data/reviews/reviews';

export const getReviewsBasedOnReviewType: (
	reviewType: ReviewType
) => ReviewModel[] = reviewType => {
	switch (reviewType) {
		case 'Positive':
			return reviews
				.sort((firstReview: Review, secondReview: Review) => {
					return firstReview.numberOfStars - secondReview.numberOfStars;
				})
				.slice(reviews.length - 6, reviews.length - 1)
				.map(review => mapReviewToReviewModel(review));
		case 'Negative':
			return reviews
				.sort((firstReview: Review, secondReview: Review) => {
					return firstReview.numberOfStars - secondReview.numberOfStars;
				})
				.slice(0, 5)
				.map(review => mapReviewToReviewModel(review));
		case 'All':
			return reviews
				.slice(reviews.length - 6, reviews.length - 1)
				.map(review => mapReviewToReviewModel(review));
	}
};

const mapReviewToReviewModel: (review: Review) => ReviewModel = review => {
	return {
		reviewerName: review.reviewerName,
		typeOfReview: undefined,
		comment: review.comment,
		numberOfStars: review.numberOfStars
	};
};
