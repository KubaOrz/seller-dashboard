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
		<div className="border border-solid border-gray-400 p-4 rounded-xl">
			<div className={'flex gap-2 items-center justify-center'}>
				<div className={'flex gap-2'}>
					<div className={'flex justify-center items-center'}>
						<Checkbox
							defaultChecked
							color="success"
							checked={sorting === 'desc'}
							onChange={() => applySorting('desc')}
						/>
						<p className={'font-sans text-black text-small'}>{t('BestSold')}</p>
					</div>
					<div className={'flex justify-center items-center'}>
						<Checkbox
							color="success"
							checked={sorting === 'asc'}
							onChange={() => applySorting('asc')}
						/>
						<p className={'font-sans text-black'}>{t('TheLeastSold')}</p>
					</div>
				</div>
				<span className={'font-sans text-3xl text-[#10AC98]'}>{t('SalesRanking')}</span>
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
			<div className={'font-sans text-base text-[#10AC98] underline text-end mt-2'}>
				<Link to={RoutesConstants.OFFER_RANKING_PAGE}>{t('SearchOffers')}</Link>
			</div>
		</div>
	);
};
