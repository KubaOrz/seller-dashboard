import { LoginRequest } from '../../../pages/login-page/model/LoginRequest';

export const mockUsers: Array<LoginRequest> = [
	{ username: 'Robi', password: 'seller' },
	{ username: 'adrian', password: 'a' },
	{ username: 'kuba', password: 'james' },
	{ username: 'james', password: 'sully' }
];

export const fakeAuthenticationProvider = {
	signIn: (
		username: string,
		password: string,
		successCallback: (username: string) => void,
		failureCallback: () => void
	) => {
		const isAuthenticated: boolean =
			mockUsers.filter(user => user.username === username && user.password === password).length !==
			0;

		if (isAuthenticated) {
			setTimeout(() => {
				successCallback(username);
			}, 500);
		} else {
			setTimeout(() => {
				failureCallback();
			}, 500);
		}
	},
	signOut: (logoutCallback: () => void) => {
		setTimeout(() => {
			logoutCallback();
		}, 500);
	}
};
