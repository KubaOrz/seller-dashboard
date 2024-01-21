import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@mui/material';
import RankingOffer from '../../../shared/ranking-offer/RankingOffer';
import MockRankingImage from '../../../../tools/assets/main-page/ranking/mockRankingImage.png';
import { Link } from 'react-router-dom';
import { RoutesConstants } from '../../../../core/constants/RoutesConstants';
import { SortingType } from '../../../../pages/offer-ranking-page/OfferRankingPage';
import { RankingOfferData, rankingOffers } from '../../../../tools/mock-data/offers/offers';

const sortOffersAscending = (offers: RankingOfferData[]) => {
	return [...offers].sort((a, b) => a.soldNumber - b.soldNumber);
};

const sortOffersDescending = (offers: RankingOfferData[]) => {
	return [...offers].sort((a, b) => b.soldNumber - a.soldNumber);
};

export const OfferRankingDashboard: FC = () => {
	const { t } = useTranslation();
	const [sorting, setSorting] = useState<SortingType>('desc');
	const [offers, setOffers] = useState<RankingOfferData[]>(
		sortOffersDescending(rankingOffers).slice(0, 4)
	);

	const applySorting: (sorting: SortingType) => void = sorting => {
		setSorting(sorting);
		setOffers(
			sorting === 'asc'
				? sortOffersAscending(rankingOffers).slice(0, 4)
				: sortOffersDescending(rankingOffers).slice(0, 4)
		);
	};

	return (
		<div className="border border-solid border-gray-400 p-4 rounded-xl dark:bg-secondary-darker dark:border-none">
			<div className={'grid'}>
				<span className={'font-sans text-center text-3xl text-headerText-light dark:text-headerText-dark'}>{t('SalesRanking')}</span>
				<div className={'flex gap-2 justify-start'}>
					<div className={'flex items-center'}>
						<Checkbox
							defaultChecked
							color="success"
							checked={sorting === 'desc'}
							onChange={() => applySorting('desc')}
						/>
						<p className={'font-sans text-xs'}>{t('BestSold')}</p>
					</div>
					<div className={'flex items-center'}>
						<Checkbox
							color="success"
							checked={sorting === 'asc'}
							onChange={() => applySorting('asc')}
						/>
						<p className={'font-sans text-xs'}>{t('TheLeastSold')}</p>
					</div>
				</div>
			</div>
			<div className={'flex gap-4'}>
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
			<div className={'font-sans text-base text-headerText-light dark:text-headerText-dark underline text-end mt-2'}>
				<Link to={RoutesConstants.OFFER_RANKING_PAGE}>{t('SearchOffers')}</Link>
			</div>
		</div>
	);
};
