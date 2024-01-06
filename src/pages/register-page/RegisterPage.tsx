import React, { FC, useState } from 'react';
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { RoutesConstants } from '../../core/constants/RoutesConstants';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

export const RegisterPage: FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleClickShowPassword = () => setShowPassword(show => !show);

	return (
		<div className={'flex flex-col justify-center items-center h-full'}>
			<div className={'w-1/4 flex flex-col gap-4'}>
				<p className={'font-sans text-4xl text-[#10AC98] text-center'}>{t('Register')}</p>
				<div className={'flex flex-col gap-4'}>
					<TextField
						fullWidth={true}
						label={t('Username')}
						variant="outlined"
						size="small"
						color={'success'}
					/>
					<FormControl variant="outlined" color={'success'} size={'small'} fullWidth={true}>
						<InputLabel htmlFor="password-input">{t('Password')}</InputLabel>
						<OutlinedInput
							id="password-input"
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
					<FormControl variant="outlined" color={'success'} size={'small'} fullWidth={true}>
						<InputLabel htmlFor="confirm-password">{t('ConfirmPassword')}</InputLabel>
						<OutlinedInput
							id="confirm-password"
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
					<button className={'rounded-2xl bg-[#15DCC4] text-center py-2'}>{t('Register')}</button>
					<p className={'font-sans text-black'}>
						{t('AlreadyHaveAccount')}{' '}
						<span
							className={'font-sans text-[#10AC98] underline cursor-pointer'}
							onClick={() => navigate(RoutesConstants.LOGIN)}
						>
							{t('Login')}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};
