import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { RoutesConstants } from '../../core/constants/RoutesConstants';
import { LoginPage } from '../../pages/login-page/LoginPage';
import { SellerDashboardPage } from '../../pages/SellerDashboardPage';
import { OrdersPage } from '../../pages/OrdersPage';
import { SalesTipsPage } from '../../pages/SalesTipsPage';
import SellerQualityPage from '../../pages/seller-quality-page/SellerQualityPage';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Authentication } from '../../core/model/configuration/Authentication';
import { PageElement } from '../../components/shared/PageElement';
import CustomerReviewsPage from '../../pages/customer-reviews-page/CustomerReviewsPage';
import { RegisterPage } from '../../pages/register-page/RegisterPage';
import { AuthenticationNavbar } from '../../components/shared/navbar/AuthenticationNavbar';
import OfferRankingPage from '../../pages/offer-ranking-page/OfferRankingPage';
import NotDeliveredOrders from '../../pages/orders-pages/NotDeliveredOrdersPage';
import NotPaidOrdersPage from '../../pages/orders-pages/NotPaidOrdersPage';
import ReturnedOrdersPage from '../../pages/orders-pages/ReturnedOrdersPage';

export const AuthenticationContainer: FC<{ children: ReactNode }> = ({ children }) => {
	const authenticatedUser: Authentication = useSelector(
		(state: any) => state.authentication.authentication
	);

	return !authenticatedUser.isAuthenticated ? (
		<Navigate to={RoutesConstants.LOGIN} />
	) : (
		<PageElement>{children}</PageElement>
	);
};

export const AuthenticationPage: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={'h-screen w-full flex flex-col'}>
			<AuthenticationNavbar />
			<div className={'w-full m-1/4'}>{children}</div>
		</div>
	);
};

export const routes = createBrowserRouter([
	{
		path: RoutesConstants.AUTH,
		element: (
			<AuthenticationPage>
				<Outlet />
			</AuthenticationPage>
		),
		children: [
			{
				path: RoutesConstants.LOGIN,
				element: <LoginPage />
			},
			{
				path: RoutesConstants.REGISTER,
				element: <RegisterPage />
			}
		]
	},
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
			},
			{
				path: RoutesConstants.CUSTOMER_REVIEWS_PAGE,
				element: <CustomerReviewsPage />
			},
			{
				path: RoutesConstants.NOT_DELIVERED_ORDERS_PAGE,
				element: <NotDeliveredOrders />
			},
			{
				path: RoutesConstants.NOT_PAID_ORDERS_PAGE,
				element: <NotPaidOrdersPage />
			},
			{
				path: RoutesConstants.RETURNED_ORDERS_PAGE,
				element: <ReturnedOrdersPage />
			}
		]
	}
]);
