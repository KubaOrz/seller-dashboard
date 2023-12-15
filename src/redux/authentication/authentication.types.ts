import { LanguageType } from '../../core/model/configuration/Language';
import { Authentication } from '../../core/model/configuration/Authentication';

export type Language = LanguageType.POLISH | LanguageType.ENGLISH;

export type AuthenticationState = {
	authentication: Authentication;
};

export const initialAuthenticationState: AuthenticationState = {
	authentication: {
		isAuthenticated: false,
		email: null
	}
};
