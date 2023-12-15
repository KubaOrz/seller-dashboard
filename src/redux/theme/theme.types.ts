import { Theme } from '../../core/model/configuration/Theme';

export type ThemeState = {
	theme: Theme;
};

export const initialThemeState: ThemeState = {
	theme: Theme.BLACK
};
