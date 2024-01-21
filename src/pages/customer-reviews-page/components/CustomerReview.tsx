import React, { FC } from "react";
import { Review } from "../../../tools/mock-data/reviews/reviews";
import { SampleReviewImage } from "../../../tools/assets/main-page/SampleReviewImage";
import { Rating } from "@mui/material";

const CustomerReview: FC<{ review: Review }> = ({ review }) => {
    return (
        <div className="flex flex-col items-start mb-4">
			<div className="flex">
				<div className="flex flex-col items-center mr-4">
					<SampleReviewImage />
				</div>
				<div className="flex flex-col items-start justify-start">
					<p className="text-[#666666] dark:text-headerText-dark font-sans text-center text-md">{review.reviewerName}</p>
					<Rating name="read-only" value={review.numberOfStars} readOnly size="large" />
				</div>
			</div>
			<div className="flex flex-col w-full mt-2">
				<p className="text-sans text-xs pl-5">{review.comment}</p>
			</div>
		</div>
    );
}

export default CustomerReview;
