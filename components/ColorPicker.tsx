import { FC, useState, useEffect } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setColorState } from '../redux/slices/app/';

// prettier-ignore
const ColorPicker: FC = () => {

	const [color, setColor] = useState('');

	const dispatch = useAppDispatch();

	const { inputSelect } = useAppSelector(state => state.app);

	const handleChangeComplete = (color: ColorResult) => {

		setColor(color.hex);

	};

	useEffect(() => {

		dispatch(setColorState({ color:color, colorNumber:inputSelect }));

	}, [color]);

	return (
		<SketchPicker
			className='bg-white rounded-3 bg-opacity-75'
			presetColors={[]}
			color={color}
			onChange={handleChangeComplete}
		/>
	);
};

export default ColorPicker;
