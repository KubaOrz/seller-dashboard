import { RoutesConstants } from '../../../../core/constants/RoutesConstants';

export const widgetNavbarNames: Map<string, RoutesConstants> = new Map()
	.set('Orders', RoutesConstants.RETURNED_ORDERS_PAGE)
	.set('CustomerReview', RoutesConstants.CUSTOMER_REVIEWS_PAGE)
	.set('SellerQuality', RoutesConstants.SELLER_QUALITY_PAGE)
	.set('SalesRanking', RoutesConstants.OFFER_RANKING_PAGE)
	.set('SalesTips', RoutesConstants.SALES_TIPS_PAGE);
