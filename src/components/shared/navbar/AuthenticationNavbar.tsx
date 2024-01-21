import { FC } from 'react';
import { NavbarDashboardIcon } from '../../../tools/assets/navbar/NavbarDashboardIcon';
import { AuthenticationNavbarButton } from './components/AuthenticationNavbarButton';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import { RoutesConstants } from '../../../core/constants/RoutesConstants';
import { ThemePicker } from './components/ThemePicker';
import { LanguagePicker } from './components/LanguagePicker';

export const AuthenticationNavbar: FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<>
			<div className={'flex justify-between w-screen bg-primary-light p-2'}>
				<div className={'flex gap-2 items-center'}>
					<NavbarDashboardIcon />
					<p className={'text-2xl text-white font-sans mt-1'}>{t('sellerDashboardName')}</p>
				</div>
				<div className={'flex gap-2 items-center mr-2'}>
					<AuthenticationNavbarButton
						label={'Login'}
						action={() => {
							if (location.pathname !== RoutesConstants.LOGIN) {
								navigate(RoutesConstants.LOGIN);
							}
						}}
					/>
					<AuthenticationNavbarButton
						label={'Register'}
						action={() => {
							if (location.pathname !== RoutesConstants.REGISTER) {
								navigate(RoutesConstants.REGISTER);
							}
						}}
					/>
				</div>
			</div>
			<div className={'w-full justify-end flex'}>
				<div className={'w-2/5 flex justify-end'}>
					<div className={'flex gap-2 items-center'}>
						<ThemePicker />
						<LanguagePicker />
					</div>
				</div>
			</div>
		</>
	);
};
