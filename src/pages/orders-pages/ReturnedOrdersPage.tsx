import { FC, useEffect, useState } from 'react';
import { OrderData, orders } from '../../tools/mock-data/orders/orders';
import OrderItem from '../../components/shared/order/OrderItem';
import { useTranslation } from 'react-i18next';

const ReturnedOrdersPage: FC = () => {
	const [refunds, setRefunds] = useState<OrderData[]>([]);
	const { t } = useTranslation();

	useEffect(() => {
		const refunds = orders.filter(order => order.returned === false);
		setRefunds(refunds);
	}, []);

	return (
		<div className="flex flex-col gap-4 items-center">
			<h1 className="text-center font-sans text-4xl text-headerText-light dark:text-headerText-dark mb-5">
				{t('Refunds')} ({refunds.length})
			</h1>

			<div className="flex flex-col gap-2 w-90 md:w-3/4 lg:w-2/3">
				{refunds.map((order, index) => (
					<OrderItem key={index} order={order} />
				))}
			</div>
		</div>
	);
};

export default ReturnedOrdersPage;
