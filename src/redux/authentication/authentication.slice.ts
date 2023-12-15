import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthenticationState, initialAuthenticationState } from './authentication.types';
import { Authentication } from '../../core/model/configuration/Authentication';

const authenticationSlice = createSlice({
	name: 'language',
	initialState: initialAuthenticationState,
	reducers: {
		setUserAuthentication: (state: AuthenticationState, action: PayloadAction<Authentication>) => {
			state.authentication = action.payload;
		},
		logoutUser: (state: AuthenticationState) => {
			state.authentication = initialAuthenticationState.authentication;
		}
	}
});

export const { setUserAuthentication, logoutUser } = authenticationSlice.actions;
export default authenticationSlice.reducer;
