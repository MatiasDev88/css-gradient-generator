import { FC } from 'react';
import { setColorPicker, setInputSelect } from '../redux/slices/app/';
import { useAppSelector, useAppDispatch } from '../hooks/redux';

interface Props {
	inputSelected: number;
	value?: string;
}

const InputColor: FC<Props> = ({ inputSelected, value }) => {
	const { colorPicker, colors } = useAppSelector(state => state.app);
	const { color1, color2, color3 } = colors;
	const dispatch = useAppDispatch();
	const handleColorPicker = () => {
		dispatch(setInputSelect(inputSelected));
		dispatch(setColorPicker(!colorPicker));
	};

	return (
		<input
			onClick={handleColorPicker}
			className='p-2 border-0 box-shadow-none text-center text-uppercase fw-bold rounded-4   shadow-lg w-100'
			style={
				inputSelected === 1
					? { backgroundColor: color1 }
					: inputSelected === 2
					? { backgroundColor: color2 }
					: { backgroundColor: color3 }
			}
			type='text'
			defaultValue={value}
		/>
	);
};

export default InputColor;
