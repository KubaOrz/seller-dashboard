import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField
} from '@mui/material';
import React, { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router';
import { RoutesConstants } from '../../core/constants/RoutesConstants';
import { fakeAuthenticationProvider } from '../../tools/mock-data/users/FakeAuthenticationMock';
import { useDispatch } from 'react-redux';
import { setUserAuthentication } from '../../redux/authentication/authentication.slice';

export const LoginPage: FC = () => {
	const { t } = useTranslation();
	const usernameRef = useRef<HTMLInputElement | null>();
	const passwordRef = useRef<HTMLInputElement | null>();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [loading, setLoading] = useState(false);

	const handleClickShowPassword = () => setShowPassword(show => !show);
	const successLoginCallback: (username: string) => void = username => {
		setLoading(false);
		dispatch(setUserAuthentication({ isAuthenticated: true, username: username }));
		navigate(RoutesConstants.MAIN_DASHBOARD);
	};

	const failureCallback: () => void = () => {
		setLoading(false);
		console.error('error msg');
	};

	const handleLoginButtonClick: () => void = () => {
		setLoading(true);
		const username: string | undefined = usernameRef.current?.value;
		const password: string | undefined = passwordRef.current?.value;

		if (!username || !password) {
			setLoading(false);
			return;
		}

		fakeAuthenticationProvider.signIn(username, password, successLoginCallback, failureCallback);
	};

	return (
		<div className={'flex flex-col justify-center items-center h-full'}>
			<div className={'w-1/4 flex flex-col gap-4'}>
				<p className={'font-sans text-4xl text-[#10AC98] text-center'}>{t('Login')}</p>
				<div className={'flex flex-col gap-4'}>
					<TextField
						fullWidth={true}
						label={t('Username')}
						variant="outlined"
						size="small"
						color={'success'}
						inputRef={usernameRef}
					/>
					<FormControl variant="outlined" color={'success'} size={'small'} fullWidth={true}>
						<InputLabel htmlFor="password-input">Password</InputLabel>
						<OutlinedInput
							id="password-input"
							inputRef={passwordRef}
							type={showPassword ? 'text' : 'password'}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>
					<button
						className={'rounded-2xl bg-[#15DCC4] text-center py-2'}
						onClick={handleLoginButtonClick}
					>
						{!loading ? t('Login') : t('Loading')}
					</button>
					<p className={'font-sans text-black'}>
						{t('DoNotHaveAccount')}{' '}
						<span
							className={'font-sans text-[#10AC98] underline cursor-pointer'}
							onClick={() => navigate(RoutesConstants.REGISTER)}
						>
							{t('Register')}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};
