import { FC, useState } from 'react';
import { WidgetNavigatorProperties } from './model/WidgetNavigator.properties';
import { NavigateFunction, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { RoutesConstants } from '../../../core/constants/RoutesConstants';

const SingleOrderWidgetNavigator: FC<{ name: string; route: RoutesConstants }> = props => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<div className={'mt-0 bg-primary-light dark:bg-primary-dark w-full shadow-lg h-10'}>
			<div
				className={'bg-secondary-light dark:bg-headerText-dark text-center mx-1 my-1 cursor-pointer'}
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
export const OrdersWidgetNavigator: FC<WidgetNavigatorProperties> = props => {
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
	const navigate: NavigateFunction = useNavigate();
	const { t } = useTranslation();

	return (
		<div
			className={'rounded-b-lg mt-0 bg-primary-light dark:bg-primary-dark w-1/2 shadow-lg h-10 relative'}
			onClick={() => setIsMenuVisible(!isMenuVisible)}
		>
			<div className={'bg-secondary-light dark:bg-headerText-dark text-center mx-1 my-1 rounded-b-lg cursor-pointer'}>
				<p className={'font-sans text-headerText-light dark:text-text-dark font-weight-400 py-1'}>{t(props.name)}</p>
			</div>

			{isMenuVisible && (
				<div className={'flex flex-col'}>
					<SingleOrderWidgetNavigator
						name={'NotPaid'}
						route={RoutesConstants.NOT_PAID_ORDERS_PAGE}
					/>
					<SingleOrderWidgetNavigator
						name={'NotSent'}
						route={RoutesConstants.NOT_DELIVERED_ORDERS_PAGE}
					/>
					<SingleOrderWidgetNavigator
						name={'Refunds'}
						route={RoutesConstants.RETURNED_ORDERS_PAGE}
					/>
				</div>
			)}
		</div>
	);
};
