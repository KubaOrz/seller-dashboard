import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { RoutesConstants } from '../../core/constants/RoutesConstants';
import { LoginPage } from '../../pages/LoginPage';
import { SellerDashboardPage } from '../../pages/SellerDashboardPage';
import { OfferRankingPage } from '../../pages/OfferRankingPage';
import { OrdersPage } from '../../pages/OrdersPage';
import { SalesTipsPage } from '../../pages/SalesTipsPage';
import { SellerQualityPage } from '../../pages/SellerQualityPage';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Authentication } from '../../core/model/configuration/Authentication';
import { PageElement } from '../../components/shared/PageElement';

export const AuthenticationContainer: FC<{ children: ReactNode }> = ({ children }) => {
	const authenticatedUser: Authentication = useSelector(
		(state: any) => state.authentication.authentication
	);

	return authenticatedUser.isAuthenticated ? (
		<Navigate to={RoutesConstants.LOGIN} />
	) : (
		<PageElement>{children}</PageElement>
	);
};

export const routes = createBrowserRouter([
	{
		path: RoutesConstants.LOGIN,
		element: <LoginPage />
	},
	{
		path: RoutesConstants.MAIN_DASHBOARD,
		element: (
			<AuthenticationContainer>
				<Outlet />
			</AuthenticationContainer>
		),
		children: [
			{
				path: RoutesConstants.MAIN_DASHBOARD,
				element: <SellerDashboardPage />
			},
			{
				path: RoutesConstants.OFFER_RANKING_PAGE,
				element: <OfferRankingPage />
			},
			{
				path: RoutesConstants.ORDERS_PAGE,
				element: <OrdersPage />
			},
			{
				path: RoutesConstants.SALES_TIPS_PAGE,
				element: <SalesTipsPage />
			},
			{
				path: RoutesConstants.SELLER_QUALITY_PAGE,
				element: <SellerQualityPage />
			}
		]
	}
]);
