import { FC } from 'react';
import { OrderData } from '../../../tools/mock-data/orders/orders';
import MockRankingImage from '../../../tools/assets/main-page/ranking/mockRankingImage.png';
import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const OrderItem: FC<{ order: OrderData }> = ({ order }) => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-row overflow-hidden shadow-lg rounded-lg p-3 dark:bg-secondary-darker">
			<div className="aspect-square h-52">
				<img src={MockRankingImage} alt="Aspect" className="w-full h-full object-fit-cover" />
			</div>

			<div className="flex flex-col gap-2 p-4 w-full">
				<h1 className="font-sans text-3xl text-headerText-light dark:text-headerText-dark">{order.productName}</h1>
				<Divider sx={{ width: '100%' }} />
				<div className="ml-4">
					<p>
						{t('OrderPrice')}: {order.price} zł
					</p>
					<p>
						{t('OrderDate')}: {order.orderDate}
					</p>
					<p>
						{t('DeliveryAddress')}: {order.address}
					</p>
					<p>
						{t('PhoneOfOrderingPerson')}: {order.clientPhoneNumber}
					</p>
				</div>
			</div>
		</div>
	);
};

export default OrderItem;
