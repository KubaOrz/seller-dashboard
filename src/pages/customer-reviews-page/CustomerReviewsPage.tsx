import React, { FC, useEffect, useState } from 'react';
import { Review, reviews } from '../../tools/mock-data/reviews/reviews';
import CustomerReview from './components/CustomerReview';
import Pagination from '../../components/shared/pagination/Pagination';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';

type SortType = 'asc' | 'desc' | 'none';

const CustomerReviewsPage: FC = () => {
	const reviewsPerPage = 8;
	const { t } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [currentReviews, setCurrentReviews] = useState<Review[]>([]);
	const [allReviews, setAllReviews] = useState<Review[]>([]);
	const [sortType, setSortType] = useState<SortType>('none');

	useEffect(() => {
		setAllReviews(reviews);
		updateCurrentReviews(currentPage, reviews);
		setTotalPages(Math.ceil(reviews.length / reviewsPerPage));
	}, []);

	const updateCurrentReviews = (page: number, reviews: Review[]) => {
		const indexOfLastReview = page * reviewsPerPage;
		const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
		const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
		setCurrentReviews(currentReviews);
	};

	const handleSort = (event: SelectChangeEvent) => {
		const selectedValue = event.target.value as SortType;
		setSortType(selectedValue);

		switch (selectedValue) {
			case 'desc':
				sortDescendingByRating();
				break;
			case 'asc':
				sortAscendingByRating();
				break;
			case 'none':
				clearSort();
				break;
			default:
				break;
		}
	};

	const handlePageChange = (page: number) => {
		updateCurrentReviews(page, allReviews);
		setCurrentPage(page);
	};

	const sortDescendingByRating = () => {
		const descendingReviews = [...allReviews].sort((a, b) => b.numberOfStars - a.numberOfStars);
		setAllReviews(descendingReviews);
		updateCurrentReviews(1, descendingReviews);
		setCurrentPage(1);
	};

	const sortAscendingByRating = () => {
		const ascendingReviews = [...allReviews].sort((a, b) => a.numberOfStars - b.numberOfStars);
		setAllReviews(ascendingReviews);
		updateCurrentReviews(1, ascendingReviews);
		setCurrentPage(1);
	};

	const clearSort = () => {
		setAllReviews(reviews);
		updateCurrentReviews(1, reviews);
		setCurrentPage(1);
	};

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-center font-sans text-4xl text-headerText-light dark:text-headerText-dark mb-5">{t('CustomerReview')}</h1>

			<div className="flex justify-start items-center gap-2 mb-3 w-100 md:w-3/4 lg:w-2/3">
				<label htmlFor="sortSelect">{t('SortBy')}: </label>
				<Select value={sortType} onChange={handleSort} size="small">
					<MenuItem value={'desc'}>
						<div className={'pr-10'}>{t('Positive')}</div>
					</MenuItem>
					<MenuItem value={'asc'}>
						<div className={'pr-10'}>{t('Negative')}</div>
					</MenuItem>
					<MenuItem value={'none'}>
						<div className={'pr-10'}>{t('Clear Filter')}</div>
					</MenuItem>
				</Select>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 w-100 md:w-3/4 lg:w-2/3">
				{currentReviews.map((review, index) => (
					<CustomerReview key={index} review={review} />
				))}
			</div>
			<div className="flex justify-end w-100 md:w-3/4 lg:w-2/3">
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					handlePageChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default CustomerReviewsPage;
