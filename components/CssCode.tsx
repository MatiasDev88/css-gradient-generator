import { FC } from 'react';

interface Props {
	gradient?: string;
}

const CssCode: FC<Props> = ({ gradient }) => {
	return (
		<div>
			<div>
				<h4 className='text-center'>CSS CODE</h4>
			</div>
			<div>
				<div className='div2 shadow-lg rounded-4 bg-dark bg-opacity-75 border-start border-light border-4 d-flex justify-content-center align-items-center'>
					<div
						className='p-2 text-light m-0 text09'
						style={{
							fontFamily: 'monospace',
							fontSize: '0.9rem',
							lineHeight: '1.5rem',
							letterSpacing: '0.1rem',
							wordSpacing: '0.2rem',
						}}>{`background-image: ${gradient}`}</div>
				</div>
			</div>
		</div>
	);
};

export default CssCode;
