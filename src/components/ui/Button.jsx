/**
 * Button — Üç varyant: primary (btn-p), ghost (btn-g), accent (btn-a)
 * Stiller globals.css içinde tanımlıdır.
 */

export function ButtonPrimary({ children, onClick, style }) {
	return (
		<button className="btn-p" onClick={onClick} style={style}>
			{children}
		</button>
	);
}

export function ButtonGhost({ children, onClick, style }) {
	return (
		<button className="btn-g" onClick={onClick} style={style}>
			{children}
		</button>
	);
}

export function ButtonAccent({ children, onClick, style }) {
	return (
		<button className="btn-a" onClick={onClick} style={style}>
			{children}
		</button>
	);
}
