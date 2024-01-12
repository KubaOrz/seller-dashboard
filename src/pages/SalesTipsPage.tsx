import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import SoonImage from '../tools/assets/sales-tips-page/soon-image.png';

export const SalesTipsPage: FC = () => {
	const { t } = useTranslation();

	return (
		<div className={'flex justify-center mt-4 flex-col items-center gap-4'}>
			<p className={'text-[#10AC98] text-center text-4xl'}>{t('Sales Tips')}</p>
			<p className={'text-black text-2xl text-center mt-2'}>{t('Soon') + '...'}</p>
			<img src={SoonImage} className={'w-44'} />
		</div>
	);
};
