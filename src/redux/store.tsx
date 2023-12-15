import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/theme.slice';
import authenticationReducer from './authentication/authentication.slice';
export const store = configureStore({
	reducer: {
		authentication: authenticationReducer,
		theme: themeReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
