import { FC, useEffect, useState } from 'react';
import RankingOffer from '../../components/shared/ranking-offer/RankingOffer';
import Pagination from '../../components/shared/pagination/Pagination';
import { RankingOfferData, rankingOffers } from '../../tools/mock-data/offers/offers';
import MockRankingImage from '../../tools/assets/main-page/ranking/mockRankingImage.png';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

export type SortingType = 'none' | 'asc' | 'desc';

const OfferRankingPage: FC = () => {
	const [offers, setOffers] = useState<RankingOfferData[]>([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [sorting, setSorting] = useState<SortingType>('asc');
	const offersPerPage = 10;
	const { t } = useTranslation();

	useEffect(() => {
		let offers = [...rankingOffers];
		const totalPages = Math.ceil(offers.length / offersPerPage);
		offers = rankingOffers.slice(0, offersPerPage);
		setOffers(offers);
		setTotalPages(totalPages);
	}, []);

	const handlePageChange = (page: number) => {
		console.log(page);
		getOfferPage(page, sorting);
		setPage(page);
	};

	const getOfferPage = (page: number, sorting: SortingType) => {
		const end = page * offersPerPage;
		const start = end - offersPerPage;
		let offers = [];
		switch (sorting) {
			case 'none':
				offers = rankingOffers.slice(start, end);
				break;
			case 'asc':
				offers = sortOffersAscending(rankingOffers).slice(start, end);
				break;
			case 'desc':
				offers = sortOffersDescending(rankingOffers).slice(start, end);
				break;
		}
		setOffers(offers);
	};

	const sortOffersAscending = (offers: RankingOfferData[]) => {
		return [...offers].sort((a, b) => a.soldNumber - b.soldNumber);
	};

	const sortOffersDescending = (offers: RankingOfferData[]) => {
		return [...offers].sort((a, b) => b.soldNumber - a.soldNumber);
	};

	const applySorting = (newSorting: SortingType) => {
		if (sorting === newSorting) {
			setSorting('none');
			setPage(1);
			getOfferPage(1, 'none');
			return;
		}
		setSorting(newSorting);
		getOfferPage(1, newSorting);
	};

	return (
		<div className="flex flex-col gap-4 items-center">
			<h1 className="text-center font-sans text-4xl text-headerText-light dark:text-headerText-dark mb-5">{t('SalesRanking')}</h1>

			<div className="flex justify-start items-center gap-2 mb-3 w-100 md:w-4/5 lg:w-5/6">
				<FormControlLabel
					control={
						<Checkbox
							checked={sorting === 'asc'}
							onChange={() => applySorting('asc')}
							name="ascendingSort"
							color="success"
						/>
					}
					label={t('TheLeastSold')}
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={sorting === 'desc'}
							onChange={() => applySorting('desc')}
							name="descendingSort"
							color="success"
						/>
					}
					label={t('BestSold')}
				/>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-100 gap-4 md:w-4/5 lg:w-5/6">
				{offers.map((offer, index) => (
					<RankingOffer
						key={index}
						imgSrc={MockRankingImage}
						productName={offer.productName}
						soldNumber={offer.soldNumber}
						rotation={offer.rotation}
					/>
				))}
			</div>
			<div className="flex justify-end w-100 md:w-4/5 lg:w-5/6 mb-4">
				<Pagination
					currentPage={page}
					totalPages={totalPages}
					handlePageChange={handlePageChange}
				/>
			</div>
		</div>
	);
};

export default OfferRankingPage;
