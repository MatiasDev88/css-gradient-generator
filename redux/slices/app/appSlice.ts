import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { appState } from '../../../interfaces/app';

const initialState: appState = {
	colorPicker: false,
	colors: {
		color1: '#D16BA5',
		color2: '#86A8E7',
		color3: '#5FFBF1',
	},
	orientation: 'left bottom',
	inputSelect: 0,
	loading: false,
	cssCode: '',
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setColorPicker: (state, action: PayloadAction<boolean>) => {
			state.colorPicker = action.payload;
		},

		setColorState: (state, action: PayloadAction<{ color: string; colorNumber: number }>) => {
			switch (action.payload.colorNumber) {
				case 1:
					state.colors.color1 = action.payload.color;
					break;
				case 2:
					state.colors.color2 = action.payload.color;
					break;
				case 3:
					state.colors.color3 = action.payload.color;
					break;
				default:
					break;
			}
		},

		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},

		setInputSelect: (state, action: PayloadAction<number>) => {
			state.inputSelect = action.payload;
		},

		setOrientation: (state, action: PayloadAction<string>) => {
			state.orientation = action.payload;
		},
	},
});
// prettier-ignore
export const { setColorPicker, setColorState, setInputSelect, setLoading, setOrientation } = appSlice.actions;
