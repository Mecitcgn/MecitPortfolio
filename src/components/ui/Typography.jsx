/**
 * Label  — küçük büyük harfli section başlıkları (yeşil)
 * Tag    — teknoloji etiketi (yeşil kenarlı)
 * TagGray— kategori etiketi (gri kenarlı)
 */

export function Label({ children, style }) {
	return (
		<span
			style={{
				fontFamily: "'DM Mono', monospace",
				fontSize: 11,
				letterSpacing: '.22em',
				textTransform: 'uppercase',
				color: 'var(--acc)',
				...style,
			}}
		>
			{children}
		</span>
	);
}

export function Tag({ children }) {
	return (
		<span
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				padding: '3px 10px',
				background: 'var(--abg)',
				border: '1px solid var(--abdr)',
				fontFamily: "'DM Mono', monospace",
				fontSize: 10,
				color: 'var(--acc)',
				borderRadius: 2,
			}}
		>
			{children}
		</span>
	);
}

export function TagGray({ children }) {
	return (
		<span
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				padding: '3px 10px',
				background: 'rgba(255,255,255,.03)',
				border: '1px solid var(--b2)',
				fontFamily: "'DM Mono', monospace",
				fontSize: 10,
				color: 'var(--t2)',
				borderRadius: 2,
			}}
		>
			{children}
		</span>
	);
}

export function Divider({ style }) {
	return <div style={{ height: 1, background: 'var(--b1)', ...style }} />;
}

export function SectionTitle({ label, title }) {
	return (
		<div>
			<Label>{label}</Label>
			<div
				style={{
					fontFamily: "'Bebas Neue', sans-serif",
					fontSize: 'clamp(36px,5vw,52px)',
					letterSpacing: '.02em',
					lineHeight: 1,
					marginTop: 8,
				}}
			>
				{title}
			</div>
		</div>
	);
}
