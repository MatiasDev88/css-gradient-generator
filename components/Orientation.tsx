import { FC } from 'react';
import { setOrientation } from '../redux/slices/app/';
import { useAppSelector, useAppDispatch } from '../hooks/redux';

const Orientation: FC = () => {
	const dispatch = useAppDispatch();
	const { orientation } = useAppSelector(state => state.app);
	return (
		<div className='row d-flex justify-content-center my-3'>
			<h4 className='mx-0 my-2 text-center ls'>Choose orientation</h4>
			<div className='col-2 col-sm-2 col-md-1 col-lg-1 flex-grow-0 flex-shrink-0 flex-fill mt-auto m-1'>
				<div
					className={`squareDiv  border rounded-5 pointer ${orientation === 'bottom' && 'bg-info'}`}
					onClick={() => dispatch(setOrientation('bottom'))}>
					<div className='rounded-2 fs-5 d-flex justify-content-center align-items-center'>
						<svg
							className='bi bi-arrow-down m-0 p-0'
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'></path>
						</svg>
					</div>
				</div>
			</div>
			<div className='col-2 col-sm-2 col-md-1 col-lg-1 flex-grow-0 flex-shrink-0 flex-fill mt-auto m-1'>
				<div
					className={`squareDiv  border rounded-5 pointer ${orientation === 'top' && 'bg-info'}`}
					onClick={() => dispatch(setOrientation('top'))}>
					<div className='rounded-2 fs-5 d-flex justify-content-center align-items-center'>
						<svg
							className='bi bi-arrow-up m-0 p-0'
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z'></path>
						</svg>
					</div>
				</div>
			</div>
			<div className='col-2 col-sm-2 col-md-1 col-lg-1 flex-grow-0 flex-shrink-0 flex-fill mt-auto m-1'>
				<div
					className={`squareDiv  border rounded-5 pointer ${orientation === 'left' && 'bg-info'}`}
					onClick={() => dispatch(setOrientation('left'))}>
					<div className='rounded-2 fs-5 d-flex justify-content-center align-items-center'>
						<svg
							className='bi bi-arrow-left m-0 p-0'
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'></path>
						</svg>
					</div>
				</div>
			</div>
			<div className='col-2 col-sm-2 col-md-1 col-lg-1 flex-grow-0 flex-shrink-0 flex-fill mt-auto m-1'>
				<div
					className={`squareDiv  border rounded-5 pointer ${orientation === 'right' && 'bg-info'}`}
					onClick={() => dispatch(setOrientation('right'))}>
					<div className='rounded-2 fs-5 d-flex justify-content-center align-items-center'>
						<svg
							className='bi bi-arrow-right m-0 p-0'
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'></path>
						</svg>
					</div>
				</div>
			</div>
			<div className='col-2 col-sm-2 col-md-1 col-lg-1 flex-grow-0 flex-shrink-0 flex-fill mt-auto m-1'>
				<div
					className={`squareDiv  border rounded-5 pointer ${
						orientation === 'right top' && 'bg-info'
					}`}
					onClick={() => dispatch(setOrientation('right top'))}>
					<div className='rounded-2 fs-5 d-flex justify-content-center align-items-center '>
						<svg
							className='bi bi-arrow-up-right m-0 p-0'
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z'></path>
						</svg>
					</div>
				</div>
			</div>
			<div className='col-2 col-sm-2 col-md-1 col-lg-1 flex-grow-0 flex-shrink-0 flex-fill mt-auto m-1'>
				<div
					className={`squareDiv  border rounded-5 pointer ${
						orientation === 'right bottom' && 'bg-info'
					}`}
					onClick={() => dispatch(setOrientation('right bottom'))}>
					<div className='rounded-2 fs-5 d-flex justify-content-center align-items-center'>
						<svg
							className='bi bi-arrow-down-right m-0 p-0'
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z'></path>
						</svg>
					</div>
				</div>
			</div>
			<div className='col-2 col-sm-2 col-md-1 col-lg-1 flex-grow-0 flex-shrink-0 flex-fill mt-auto m-1'>
				<div
					className={`squareDiv  border rounded-5 pointer ${
						orientation === 'left bottom' && 'bg-info'
					}`}
					onClick={() => dispatch(setOrientation('left bottom'))}>
					<div className='rounded-2 fs-5 d-flex justify-content-center align-items-center'>
						<svg
							className='bi bi-arrow-down-left m-0 p-0'
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z'></path>
						</svg>
					</div>
				</div>
			</div>
			<div className='col-2 col-sm-2 col-md-1 col-lg-1 flex-grow-0 flex-shrink-0 flex-fill mt-auto m-1'>
				<div
					className={`squareDiv  border rounded-5 pointer ${
						orientation === 'left top' && 'bg-info'
					}`}
					onClick={() => dispatch(setOrientation('left top'))}>
					<div className='rounded-2 fs-5 d-flex justify-content-center align-items-center '>
						<svg
							className='bi bi-arrow-up-left m-0 p-0'
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z'></path>
						</svg>
					</div>
				</div>
			</div>
			<div className='col-2 col-sm-2 col-md-1 col-lg-1 flex-grow-0 flex-shrink-0 flex-fill mt-auto m-1'>
				<div
					className={`squareDiv  border rounded-5 pointer ${orientation === 'circle' && 'bg-info'}`}
					onClick={() => dispatch(setOrientation('circle'))}>
					<div className='rounded-2 fs-5 d-flex justify-content-center align-items-center '>
						<svg
							className='bi bi-arrow-clockwise m-0 p-0 '
							xmlns='http://www.w3.org/2000/svg'
							width='1em'
							height='1em'
							fill='currentColor'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z'></path>
							<path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z'></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Orientation;
