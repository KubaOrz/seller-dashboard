import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@mui/material';
import RankingOffer from '../../../shared/ranking-offer/RankingOffer';
import MockRankingImage from '../../../../tools/assets/main-page/ranking/mockRankingImage.png';
import { Link } from 'react-router-dom';
import { RoutesConstants } from '../../../../core/constants/RoutesConstants';

export const OfferRankingDashboard: FC = () => {
	const { t } = useTranslation();

	return (
		<div className="border border-solid border-gray-400 p-4 rounded-xl">
			<div className={'flex gap-2 items-center justify-center'}>
				<div className={'flex gap-2'}>
					<div className={'flex justify-center items-center'}>
						<Checkbox defaultChecked color="success" />
						<p className={'font-sans text-black text-small'}>{t('BestSold')}</p>
					</div>
					<div className={'flex justify-center items-center'}>
						<Checkbox defaultChecked color="success" />
						<p className={'font-sans text-black'}>{t('TheLeastSold')}</p>
					</div>
				</div>
				<span className={'font-sans text-3xl text-[#10AC98]'}>{t('Offer ranking')}</span>
			</div>
			<div className={'flex gap-4'}>
				<RankingOffer
					imgSrc={MockRankingImage}
					productName={'Rower gorski'}
					soldNumber={13}
					rotation={13000}
				/>
				<RankingOffer
					imgSrc={MockRankingImage}
					productName={'Rower gorski'}
					soldNumber={13}
					rotation={13000}
				/>
				<RankingOffer
					imgSrc={MockRankingImage}
					productName={'Rower gorski'}
					soldNumber={13}
					rotation={13000}
				/>
				<RankingOffer
					imgSrc={MockRankingImage}
					productName={'Rower gorski'}
					soldNumber={13}
					rotation={13000}
				/>
			</div>
			<div className={'font-sans text-base text-[#10AC98] underline text-end mt-2'}>
				<Link to={RoutesConstants.OFFER_RANKING_PAGE}>{t('SearchOffers')}</Link>
			</div>
		</div>
	);
};
