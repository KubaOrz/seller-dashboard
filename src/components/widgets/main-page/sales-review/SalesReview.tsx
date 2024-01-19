import React, { FC, useState } from 'react';
import { Divider, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import KnowMore from '../../../shared/know-more/KnowMore';
import { RoutesConstants } from '../../../../core/constants/RoutesConstants';
import { Review } from '../review/Review';
import { useTranslation } from 'react-i18next';
import { ReviewModel, ReviewType } from '../review/model/Review.model';
import { getReviewsBasedOnReviewType } from './sales-review-helper-function';

export const SalesReview: FC = () => {
	const { t } = useTranslation();
	const [reviewType, setReviewType] = useState<ReviewType>('Positive');
	const [reviews, setReviews] = useState<ReviewModel[]>(getReviewsBasedOnReviewType('Positive'));

	const handleReviewTypeChange: (event: SelectChangeEvent) => void = event => {
		const selectedReviewType: ReviewType = event.target.value as ReviewType;
		setReviewType(selectedReviewType);
		setReviews(getReviewsBasedOnReviewType(selectedReviewType));
	};

	return (
		<div className="border border-solid border-gray-400 p-4 rounded-xl">
			<p className={'text-center font-sans text-3xl text-[#10AC98]'}>{t('CustomerReview')}</p>
			<div className={'flex justify-center items-center'}>
				<Select value={reviewType} size={'small'} onChange={handleReviewTypeChange}>
					<MenuItem value={'Positive'}>
						<div className={'pr-10'}>{t('Positive')}</div>
					</MenuItem>
					<MenuItem value={'Negative'}>
						<div className={'pr-10'}>{t('Negative')}</div>
					</MenuItem>
					<MenuItem value={'All'}>
						<div className={'pr-10'}>{t('All')}</div>
					</MenuItem>
				</Select>
			</div>
			<div className={'mt-4 mx-2 flex flex-col gap-1'}>
				{reviews.map((review, index) => {
					return <Review key={index} review={review} />;
				})}
			</div>
			<Divider sx={{ mt: 1, mb: 2 }} />
			<KnowMore routeUrl={RoutesConstants.CUSTOMER_REVIEWS_PAGE} />
		</div>
	);
};
