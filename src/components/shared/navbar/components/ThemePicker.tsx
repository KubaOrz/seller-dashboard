import Switch from '@mui/material/Switch';
import { useDispatch } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Theme } from '../../../../core/model/configuration/Theme';
import { toggleTheme } from '../../../../redux/theme/theme.slice';

export const ThemePicker = () => {
	const [checked, setChecked] = useState(true);
	const dispatch = useDispatch();
	const { t } = useTranslation();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const theme = !checked ? Theme.WHITE : Theme.BLACK;
		dispatch(toggleTheme(theme));
		setChecked(!checked);
	};

	return (
		<div className={'flex gap-1 items-center'}>
			<p className={'font-sans text-xs'}>{t('Dark')}</p>
			<Switch
				checked={checked}
				onChange={handleChange}
				inputProps={{ 'aria-label': 'controlled' }}
			/>
			<p className={'font-sans text-xs'}>{t('Light')}</p>
		</div>
	);
};
