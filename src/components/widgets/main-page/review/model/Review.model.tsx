export const sampleReview: ReviewModel = {
	numberOfStars: 5,
	comment: 'Bardzo dobry sprzedawca',
	reviewerName: 'Adam Adamowski',
	typeOfReview: 'Positive'
};

export type ReviewType = 'Positive' | 'Negative' | 'All';

export type ReviewModel = {
	reviewerName: string;
	numberOfStars: number;
	comment: string;
	typeOfReview?: ReviewType;
};
