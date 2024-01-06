import { FC } from 'react';
import { NavbarDashboardIcon } from '../../../tools/assets/navbar/NavbarDashboardIcon';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { widgetNavbarNames } from './model/WidgetNavbarNames';
import { WidgetNavigator } from './WidgetNavigator';
import { LanguagePicker } from './components/LanguagePicker';
import { ThemePicker } from './components/ThemePicker';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RoutesConstants } from '../../../core/constants/RoutesConstants';
import { fakeAuthenticationProvider } from '../../../tools/mock-data/users/FakeAuthenticationMock';
import { logoutUser } from '../../../redux/authentication/authentication.slice';
import { store } from '../../../redux/store';

export const Navbar: FC = () => {
	const username: string | null = useSelector(
		(state: any) => state.authentication.authentication.username
	);
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const widgetNavigatorElements: () => Array<ReactJSXElement> = () => {
		return widgetNavbarNames.map((widgetNavbarName, index) => {
			return <WidgetNavigator key={index} name={widgetNavbarName} />;
		});
	};

	const handleLogoutButtonClicked: () => void = () => {
		const logoutCallback: () => void = () => {
			dispatch(logoutUser());
			navigate(RoutesConstants.LOGIN);
		};

		fakeAuthenticationProvider.signOut(logoutCallback);
	};

	return (
		<>
			<div className={'flex justify-between w-screen bg-primary p-2'}>
				<div className={'flex gap-2 items-center'}>
					<NavbarDashboardIcon />
					<p className={'text-2xl text-white font-sans mt-1'}>{t('sellerDashboardName')}</p>
				</div>
				<div className={'flex gap-2 items-center mr-4'}>
					<PersonIcon fontSize={'large'} />
					<p className={'font-sans text-xl text-white font-medium'}>
						{t('chosenAccount', { name: username })}
					</p>
					<div className={'flex gap-2 items-center'}>
						<button className={'rounded-full bg-[#C0A6FF] p-2 font-medium font-sans'}>
							{t('changeAccount')}
						</button>
						<button
							className={'font-sans rounded-full bg-[#BE4772] p-2 font-medium text-white'}
							onClick={handleLogoutButtonClicked}
						>
							{t('logout')}
						</button>
					</div>
				</div>
			</div>
			<div className={'w-full justify-between flex'}>
				<div className={'w-3/5 flex'}>{widgetNavigatorElements()}</div>
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
