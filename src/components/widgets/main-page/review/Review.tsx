import React, { FC } from 'react';
import { SampleReviewImage } from '../../../../tools/assets/main-page/SampleReviewImage';
import { Rating } from '@mui/material';
import { ReviewModel } from './model/Review.model';

export const Review: FC<{ review: ReviewModel }> = ({ review }) => {
	return (
		<div className={'flex justify-center items-center'}>
			<div className={'flex flex-col gap-1 justify-center items-center w-40'}>
				<SampleReviewImage />
				<p className={'text-[#666666] dark:text-headerText-dark font-sans text-center text-xs'}>{review.reviewerName}</p>
			</div>
			<div className={'flex flex-col gap-1 justify-start w-52 items-start'}>
				<Rating name="read-only" value={review.numberOfStars} readOnly size={'large'} />
				<p className={'text-sans text-xs text-text-dark dark:text-text-light'}>{review.comment}</p>
			</div>
		</div>
	);
};
