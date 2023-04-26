import { FC } from 'react';

const Nav: FC = () => {
	// function para comprobar que dos string tienen la misma longitud

	return (
		<div className='container'>
			<nav className='navbar navbar-light navbar-expand-md py-3 bg-white my-2 rounded-4 shadow-sm bg-opacity-10 px-2'>
				<div className='container'>
					<a className='navbar-brand d-flex align-items-center' href='#'>
						<img className='img-fluid' src='/img/logo.svg' width='180' />
					</a>
					<button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navcol-2'>
						<span className='visually-hidden'>Toggle navigation</span>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div id='navcol-2' className='collapse navbar-collapse'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<a className='nav-link active text-white link-danger fw-bold' href='#'>
									<span className='mx-1'>
										<svg
											className='bi bi-github m-0 p-0'
											xmlns='http://www.w3.org/2000/svg'
											width='1em'
											height='1em'
											fill='currentColor'
											viewBox='0 0 16 16'>
											<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path>
										</svg>
									</span>
									Github
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
