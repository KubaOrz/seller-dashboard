import { FC, useState } from 'react';
import OrderTypeCounter from './OrderTypeCounter';
import NotPaidImage from '../../../tools/assets/main-page/orders/NotPaidImage.png';
import RefundImage from '../../../tools/assets/main-page/orders/RefundImage.png';
import NotSentImage from '../../../tools/assets/main-page/orders/NotSentImage.png';
import { orders } from '../../../tools/mock-data/orders/orders';
import { RoutesConstants } from '../../../core/constants/RoutesConstants';
import { useTranslation } from 'react-i18next';

export const OrdersWidget: FC = () => {
	const [notPaid] = useState(orders.filter(order => !order.paid).length);
	const [notDelivered] = useState(orders.filter(order => !order.delivered).length);
	const [refunds] = useState(orders.filter(order => !order.returned).length);
	const { t } = useTranslation();

	return (
		<div className="border border-solid border-gray-400 p-4 rounded-xl w-full h-full">
			<p className={'text-center font-sans text-3xl text-[#10AC98]'}>{t('Orders')}</p>
			<div className={'flex gap-1 mt-10 justify-between items-center px-4'}>
				<OrderTypeCounter
					image={NotPaidImage}
					numberOfElements={notPaid}
					header={'NotPaid'}
					target={RoutesConstants.NOT_PAID_ORDERS_PAGE}
				/>
				<OrderTypeCounter
					image={NotSentImage}
					numberOfElements={notDelivered}
					header={'NotSent'}
					target={RoutesConstants.NOT_DELIVERED_ORDERS_PAGE}
				/>
				<OrderTypeCounter
					image={RefundImage}
					numberOfElements={refunds}
					header={'Refunds'}
					target={RoutesConstants.RETURNED_ORDERS_PAGE}
				/>
			</div>
		</div>
	);
};
