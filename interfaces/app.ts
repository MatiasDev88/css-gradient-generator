export interface appState {
	colorPicker: boolean;
	colors: colorState;
	loading: boolean;
	cssCode: string;
	inputSelect: number;
	orientation: string;
}

export interface colorState {
	color1: string;
	color2: string;
	color3: string;
}
