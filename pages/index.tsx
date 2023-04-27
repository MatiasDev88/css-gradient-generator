import { ColorPicker, CssCode, Header, InputColor, Nav, Orientation } from '../components/';
import { useRef, useEffect, RefObject, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { setColorPicker } from '../redux/slices/app/';
import { generarGradiente } from '../utils/gradient';

type Props = {
	ref: RefObject<HTMLElement>;
};

export default function Home() {
	const [gradient, setGradient] = useState<string>('');

	const [alert, setAlert] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	const { colorPicker, colors, orientation } = useAppSelector(state => state.app);

	const { color1, color2, color3 } = colors;

	const wrapperRef = useRef<HTMLInputElement>(null);

	const useOutsideAlerter = ({ ref }: Props) => {
		useEffect(() => {
			function handleClickOutside(event: MouseEvent) {
				if (ref.current && !ref.current.contains(event.target as Node)) {
					dispatch(setColorPicker(false));
				}
			}

			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [ref]);
	};

	useOutsideAlerter({ ref: wrapperRef });

	const handleSubmit = () => {
		// check if colors are valid
		if (!color1 || !color2 || !color3) {
			setAlert(true);
			return;
		}

		const gradient = generarGradiente(color1, color2, color3, orientation);

		// change background-image from body

		setGradient(gradient);

		document.body.style.backgroundImage = gradient;
	};

	useEffect(() => {
		const gradient = generarGradiente(color1, color2, color3, orientation);
		document.body.style.backgroundImage = gradient;
	}, []);

	useEffect(() => {
		if (alert) {
			setTimeout(() => {
				setAlert(false);
			}, 3000);
		}
	}, [alert]);

	return (
		<div className='vh-100'>
			<Header />
			<Nav />
			<div className='container-fluid'>
				<div className='text-center pt-3'>
					<h1 className='m-0'>Generate a 3-Color-Gradient</h1>
				</div>
				<Orientation />
				<div className='text-center p-0 text-secondary my-1'>
					<h5 className='mx-0 my-1 ls'>Enter colors</h5>
				</div>
				<div
					className='row d-flex justify-content-center align-items-center position-relative'
					ref={wrapperRef}>
					<div className='col-12 col-sm-4 col-md-3 col-lg-2'>
						<div className='p-1'>
							<InputColor inputSelected={1} value={color1} />
						</div>
					</div>
					<div className='col-12 col-sm-4 col-md-3 col-lg-2'>
						<div className='p-1'>
							<InputColor inputSelected={2} value={color2} />
						</div>
					</div>
					<div className='col-12 col-sm-4 col-md-3 col-lg-2'>
						<div className='p-1'>
							<InputColor inputSelected={3} value={color3} />
						</div>
					</div>
					{colorPicker && (
						<div className='colorPicker'>
							<ColorPicker />
						</div>
					)}
				</div>

				{alert && (
					<span className='text-center d-block text-light ls '>* All Colors are required</span>
				)}
				<div className='d-flex justify-content-center my-3'>
					<div className='p-2'>
						<button
							className='btn btn-primary px-5 lh-lg fw-bold rounded-3 ls'
							type='button'
							onClick={handleSubmit}>
							<svg
								className='bi bi-magic'
								xmlns='http://www.w3.org/2000/svg'
								width='1em'
								height='1em'
								fill='currentColor'
								viewBox='0 0 16 16'>
								<path d='M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z'></path>
							</svg>
							GENERATE CODE
						</button>
					</div>
				</div>
				<div className='d-flex justify-content-center mb-5'>
					{gradient && <CssCode gradient={gradient} />}
				</div>
			</div>
		</div>
	);
}
