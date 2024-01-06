import { Authentication } from '../../core/model/configuration/Authentication';

export type AuthenticationState = {
	authentication: Authentication;
};

export const initialAuthenticationState: AuthenticationState = {
	authentication: {
		isAuthenticated: false,
		username: null
	}
};
