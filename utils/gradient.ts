export const generarGradiente = (
	color1: string,
	color2: string,
	color3: string,
	orientation: string,
) => {
	const pasos = 12;
	const colores = [color1, color2, color3];
	const gradientes = colores.reduce((acc, color, index) => {
		let r, g, b;
		if (index < colores.length - 1) {
			for (let i = 0; i < pasos / (colores.length - 1); i++) {
				r = parseInt(color.slice(1, 3), 16);
				g = parseInt(color.slice(3, 5), 16);
				b = parseInt(color.slice(5, 7), 16);
				r +=
					parseInt(
						((parseInt(colores[index + 1].slice(1, 3), 16) - r) /
							(pasos / (colores.length - 1))) as any,
						10,
					) * i;
				g +=
					parseInt(
						((parseInt(colores[index + 1].slice(3, 5), 16) - g) /
							(pasos / (colores.length - 1))) as any,
						10,
					) * i;
				b +=
					parseInt(
						((parseInt(colores[index + 1].slice(5, 7), 16) - b) /
							(pasos / (colores.length - 1))) as any,
						10,
					) * i;
				acc += `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b
					.toString(16)
					.padStart(2, '0')}, `;
			}
		} else {
			acc += color;
		}
		return acc;
	}, '');
	return `${
		orientation === 'circle'
			? `radial-gradient(${orientation}, ${gradientes})`
			: `linear-gradient(to ${orientation}, ${gradientes})`
	}`;
};
