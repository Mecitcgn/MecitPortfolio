import { useState, useEffect, useRef } from 'react';

/**
 * SkillBar — IntersectionObserver ile viewport'a girince animasyon başlar.
 * skill: { name: string, level: number, label: string }
 */
export default function SkillBar({ skill }) {
	const [width, setWidth] = useState(0);
	const ref = useRef(null);

	useEffect(() => {
		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setWidth(skill.level);
			},
			{ threshold: 0.3 },
		);
		if (ref.current) obs.observe(ref.current);
		return () => obs.disconnect();
	}, [skill.level]);

	return (
		<div ref={ref} style={{ marginBottom: 28 }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'baseline',
					marginBottom: 10,
				}}
			>
				<span
					style={{
						fontFamily: "'Bebas Neue', sans-serif",
						fontSize: 28,
						letterSpacing: '.04em',
					}}
				>
					{skill.name}
				</span>
				<span
					style={{
						fontFamily: "'DM Mono', monospace",
						fontSize: 10,
						letterSpacing: '.15em',
						textTransform: 'uppercase',
						color: 'var(--acc)',
					}}
				>
					{skill.label}
				</span>
			</div>
			<div
				style={{
					height: 3,
					background: 'var(--b1)',
					borderRadius: 2,
					overflow: 'hidden',
				}}
			>
				<div
					style={{
						height: '100%',
						width: `${width}%`,
						background: 'linear-gradient(90deg, var(--acc), #e0ff9a)',
						borderRadius: 2,
						transition: 'width 1.4s cubic-bezier(.4,0,.2,1)',
					}}
				/>
			</div>
			<div style={{ textAlign: 'right', marginTop: 5 }}>
				<span
					style={{
						fontFamily: "'DM Mono', monospace",
						fontSize: 10,
						color: 'var(--t3)',
					}}
				>
					{skill.level}%
				</span>
			</div>
		</div>
	);
}
