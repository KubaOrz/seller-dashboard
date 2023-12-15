import { FC } from 'react';
import { NavbarDashboardIcon } from '../../tools/assets/NavbarDashboardIcon';
import PersonIcon from '@mui/icons-material/Person';
// @ts-ignore
import UnitedKingdomIcon from '../../tools/assets/united-kingdom-flag-icon.svg';
// @ts-ignore
import PolandIcon from '../../tools/assets/poland-flag-icon.svg';
import { useTranslation } from 'react-i18next';

export const Navbar: FC = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage: (language: string) => void = (language: string) => {
		i18n.changeLanguage(language);
	};

	return (
		<div className={'flex justify-between w-screen bg-[#15DCC4] p-2'}>
			<div className={'flex gap-2 items-center'}>
				<NavbarDashboardIcon />
				<p className={'font-sans text-2xl text-white'}>{t('sellerDashboardName')}</p>
			</div>
			<div className={'flex gap-2 items-center mr-4'}>
				<PersonIcon fontSize={'large'} />
				<p className={'font-sans text-xl text-white font-medium'}>
					{t('chosenAccount', { name: 'Top seller' })}
				</p>
				<div className={'flex gap-2 items-center'}>
					<img
						onClick={() => changeLanguage('en')}
						className={'w-10 cursor-pointer'}
						src={UnitedKingdomIcon}
						alt={'poland-icon'}
					/>
					<img
						onClick={() => changeLanguage('pl')}
						className={'w-10 cursor-pointer'}
						src={PolandIcon}
						alt={'united-kingdom-icon'}
					/>
				</div>
				<div className={'flex gap-2 items-center'}>
					<button className={'rounded-full bg-[#C0A6FF] p-2 font-medium'}>
						{t('changeAccount')}
					</button>
					<button className={'rounded-full bg-[#BE4772] p-2 font-medium text-white'}>
						{t('logout')}
					</button>
				</div>
			</div>
		</div>
	);
};
