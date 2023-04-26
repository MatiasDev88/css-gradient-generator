import { FC } from 'react';
import Head from 'next/head';

const Header: FC = () => {
	return (
		<Head>
			<link rel='stylesheet' href=' /bootstrap/css/bootstrap.min.css' />
			<script src='/bootstrap/js/bootstrap.min.js'></script>
			<meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />
			<link rel='icon' type='image/png' href='/img/icono.png' />

			<title>CSS Gradient Color Generator - GradientColors.online</title>
		</Head>
	);
};

export default Header;
