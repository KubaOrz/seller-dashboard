import React, { FC } from 'react';
import SalesTipsImage from '../../../../tools/assets/main-page/sales-tips/SalesTips.png';
import { Divider } from '@mui/material';
import KnowMore from '../../../shared/know-more/KnowMore';
import { RoutesConstants } from '../../../../core/constants/RoutesConstants';
import { useTranslation } from 'react-i18next';

export const SalesTips: FC = () => {
	const { t } = useTranslation();

	return (
		<div className="border border-solid border-gray-400 p-4 rounded-xl h-full w-full dark:bg-secondary-darker dark:border-none">
			<p className={'text-center font-sans text-3xl text-headerText-light dark:text-headerText-dark'}>{t('SalesTips')}</p>
			<img src={SalesTipsImage} className={'h-52'} alt={'Sales tips'} />
			<Divider sx={{ mt: 1, mb: 2 }} />
			<KnowMore routeUrl={RoutesConstants.SALES_TIPS_PAGE} />
		</div>
	);
};
