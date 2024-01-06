import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type LoginNavbarButtonProperties = {
	label: string;
	action: () => void;
};

export const AuthenticationNavbarButton: FC<LoginNavbarButtonProperties> = props => {
	const { t } = useTranslation();

	return (
		<button
			className={'bg-[#C0A6FF] text-center font-sans px-3 py-1 rounded-full'}
			onClick={props.action}
		>
			{t(props.label)}
		</button>
	);
};
