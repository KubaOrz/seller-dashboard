import { FC } from 'react';
import { WidgetNavigatorProperties } from './model/WidgetNavigator.properties';
import { useTranslation } from 'react-i18next';
import { NavigateFunction, useNavigate } from 'react-router';

export const WidgetNavigator: FC<WidgetNavigatorProperties> = props => {
	const navigate: NavigateFunction = useNavigate();
	const { t } = useTranslation();

	return (
		<div className={'rounded-b-lg mt-0 bg-primary-light dark:bg-primary-dark w-1/2 shadow-lg h-10'}>
			<div
				className={'bg-secondary-light dark:bg-headerText-dark text-center mx-1 my-1 rounded-b-lg cursor-pointer'}
				onClick={() => {
					if (!!props.route) {
						navigate(props.route.toString());
					}
				}}
			>
				<p className={'font-sans text-headerText-light dark:text-text-dark font-weight-400 py-1'}>{t(props.name)}</p>
			</div>
		</div>
	);
};
