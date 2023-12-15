import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialThemeState, ThemeState } from './theme.types';
import { Theme } from '../../core/model/configuration/Theme';

const themeSlice = createSlice({
	name: 'theme',
	initialState: initialThemeState,
	reducers: {
		toggleTheme: (state: ThemeState, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
		}
	}
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
