import SellerQualityImage from '../../../tools/assets/main-page/seller-quality/QualityImage.png';
import CategoryImage from '../../../tools/assets/main-page/seller-quality/CategoryImage.png';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSellerQuality } from '../../../hooks/useSellerQuality';
import { Divider } from '@mui/material';
import SingleSellerQuality from './SingleSellerQuality';
import { RoutesConstants } from '../../../core/constants/RoutesConstants';
import KnowMore from '../../shared/know-more/KnowMore';
import {
	SellerQualityAspect,
	SellerQualityData
} from '../../../tools/mock-data/seller-quality/sellerQuality';
import { getQualityAspectImage } from '../../../tools/utils/getQualityAspectImage';

const SellerQualityWidget: FC = () => {
	const { t } = useTranslation();
	const { qualityData, qualityCategory, qualityAssessment } = useSellerQuality();
	const [worstAspects, setWorstAspects] = useState<SellerQualityAspect[]>([]);

	useEffect(() => {
		if (!qualityData) {
			return;
		}
		const worstAspects = findWorstAspects(qualityData);
		setWorstAspects(worstAspects);
	}, []);

	const findWorstAspects = (data: SellerQualityData) => {
		const sorted = Object.entries(data).sort(([, a], [, b]) => a.assesment - b.assesment);
		const worst = sorted.slice(0, 3);
		return worst.map(([key, value]) => ({
			name: value.name,
			assesment: value.assesment
		}));
	};

	return (
		<div className="border border-solid border-gray-400 p-4 rounded-xl w-full">
			<p className={'text-center font-sans text-3xl text-[#10AC98]'}>{t('SellerQuality')}</p>
			<div className={'flex justify-between'}>
				<div className={'flex flex-col justify-center items-center'}>
					<div className={'flex justify-center items-center gap-1'}>
						<img src={SellerQualityImage} className={'w-10'} alt={'image'} />
						<p>{qualityAssessment}/50</p>
					</div>
					<p>{t('Seller mark')}</p>
				</div>
				<div className={'flex flex-col justify-center items-center'}>
					<div className={'flex justify-center items-center gap-1'}>
						<img src={CategoryImage} alt={'image'} className={'w-10'} />
						<p>{qualityCategory}</p>
					</div>
					<p>{t('Your quality category')}</p>
				</div>
			</div>
			<Divider sx={{ mt: 1, mb: 2 }} />
			<div>
				<p className={'text-center text-[#10AC98] font-sans'}>{t('SellerQualityHeading')}</p>
				<div className={'flex gap-2 justify-between'}>
					{worstAspects.map((aspect, index) => (
						<SingleSellerQuality
							key={index}
							name={aspect.name}
							imgSrc={getQualityAspectImage(aspect.name)}
							assesment={aspect.assesment}
						/>
					))}
				</div>
				<Divider sx={{ mt: 1, mb: 2 }} />
				<KnowMore routeUrl={RoutesConstants.SELLER_QUALITY_PAGE} />
			</div>
		</div>
	);
};

export default SellerQualityWidget;
