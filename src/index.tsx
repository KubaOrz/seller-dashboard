import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { RouterProvider } from 'react-router';
import { routes } from './tools/configuration/routing-config';
import { I18nextProvider } from 'react-i18next';
import i18n from './tools/configuration/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<I18nextProvider i18n={i18n}>
			<RouterProvider router={routes} />
		</I18nextProvider>
	</Provider>
);
