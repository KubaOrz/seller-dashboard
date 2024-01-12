import React, { FC } from 'react';
import { OrdersWidget } from '../components/widgets/orders-widget/OrdersWidget';
import SellerQualityWidget from '../components/widgets/seller-quality/SellerQualityWidget';
import { SalesReview } from '../components/widgets/main-page/sales-review/SalesReview';
import { OfferRankingDashboard } from '../components/widgets/main-page/offer-ranking/OfferRankingDashboard';
import { SalesChart } from '../components/widgets/main-page/sales-chart/SalesChart';
import { SalesTips } from '../components/widgets/main-page/sales-tips/SalesTips';

export const SellerDashboardPage: FC = () => {
	return (
		<div className={'m-2 flex justify-center items-center'}>
			<div className={'flex flex-col gap-4'}>
				<div className={'flex gap-4'}>
					<SalesReview />
					<div className={'flex gap-4 flex-col w-full'}>
						<div className={'flex gap-4 w-full'}>
							<div className={'w-1/2'}>
								<OrdersWidget />
							</div>
							<div className={'w-1/2'}>
								<SellerQualityWidget />
							</div>
						</div>
						<OfferRankingDashboard />
					</div>
				</div>
				<div className={'flex gap-4 mb-10'}>
					<div className={'w-8/12'}>
						<SalesChart />
					</div>
					<div className={'w-4/12'}>
						<SalesTips />
					</div>
				</div>
			</div>
		</div>
	);
};
