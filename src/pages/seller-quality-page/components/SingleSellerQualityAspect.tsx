import React, { FC } from 'react';
import { SellerQualityAspect } from '../../../tools/mock-data/seller-quality/sellerQuality';
import { useTranslation } from 'react-i18next';

type SingleSellerQualityAspectProps = {
	imgUrl: string;
	aspect: SellerQualityAspect;
};

const SingleSellerQualityAspect: FC<SingleSellerQualityAspectProps> = ({ imgUrl, aspect }) => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col items-center border p-2 rounded-lg shadow-lg">
			<div className="h-1/2">
				<img src={imgUrl} alt="Aspect" className="w-full h-full object-fit-cover" />
			</div>

			<div className="h-1/2 flex flex-col items-center justify-center">
				<h1 className="text-center font-sans text-xl text-[#10AC98]">{t(aspect.name)}</h1>
				<p>{aspect.assesment}/10</p>
			</div>
		</div>
	);
};

export default SingleSellerQualityAspect;
