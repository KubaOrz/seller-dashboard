import React, { FC } from 'react';
import SellerQualityAspects from './components/SellerQualityAspects';
import QualityAssessmentImage from '../../tools/assets/seller-quality-page/QualityAssessmentImage.png';
import QualityCategoryImage from '../../tools/assets/seller-quality-page/QualityCategoryImage.png';
import QualityAssessmentItem from './components/QualityAssessmentItem';
import { useSellerQuality } from '../../hooks/useSellerQuality';
import { useTranslation } from 'react-i18next';

const SellerQualityPage: FC = () => {
	const { qualityData, qualityCategory, qualityAssessment } = useSellerQuality();
	const { t } = useTranslation();

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-center font-sans text-4xl text-headerText-light dark:text-headerText-dark mb-5">Jakość sprzedaży</h1>
			{qualityCategory && (
				<div className="grid grid-cols-2 w-100 gap-3 mb-3 md:w-3/4 lg:w-2/3">
					<QualityAssessmentItem
						name={t('Seller mark')}
						value={`${qualityAssessment}/50`}
						imgUrl={QualityAssessmentImage}
					/>
					<QualityAssessmentItem
						name={t('SellerCategory')}
						value={qualityCategory}
						imgUrl={QualityCategoryImage}
					/>
				</div>
			)}
			{qualityData && <SellerQualityAspects aspects={qualityData} />}
		</div>
	);
};

export default SellerQualityPage;
