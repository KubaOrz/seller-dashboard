import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { FC, useState } from 'react';
import UnitedKingdomIcon from '../../../../tools/assets/language-picker/united-kingdom-flag-icon.svg';
import PolandIcon from '../../../../tools/assets/language-picker/poland-flag-icon.svg';
import { useTranslation } from 'react-i18next';

export const LanguagePicker: FC = () => {
	const [language, setLanguage] = useState<string>('English');
	const { t, i18n } = useTranslation();

	const handleChange = (event: SelectChangeEvent) => {
		const selectedLanguage = event.target.value;
		const languageSmall: 'en' | 'pl' = selectedLanguage === 'Polish' ? 'pl' : 'en';
		setLanguage(selectedLanguage);
		i18n.changeLanguage(languageSmall);
	};

	return (
		<FormControl sx={{ m: 1, width: 120 }} size="small">
			<Select value={language} onChange={handleChange} sx={{ width: 120 }}>
				<MenuItem value={'English'}>
					<div className={'flex gap-1'}>
						{t('English')}
						<img className={'w-5'} src={UnitedKingdomIcon} alt={'poland-icon'} />
					</div>
				</MenuItem>
				<MenuItem value={'Polish'}>
					<div className={'flex gap-1'}>
						{t('Polish')}
						<img className={'w-5'} src={PolandIcon} alt={'poland-icon'} />
					</div>
				</MenuItem>
			</Select>
		</FormControl>
	);
};
