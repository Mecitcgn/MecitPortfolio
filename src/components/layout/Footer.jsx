import { ButtonAccent } from '../ui/Button';
import logo from '../../assets/MecitLogo.png';

export default function Footer({ navigate, openDemoHub }) {
	return (
		<footer
			style={{
				borderTop: '1px solid var(--b1)',
				padding: '32px 24px',
				maxWidth: 1200,
				margin: '0 auto',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
				<img
					src={logo}
					alt="Mecit Logo"
					style={{
						height: 32,
						width: 'auto',
						objectFit: 'contain',
						opacity: 0.5,
					}}
				/>
				<span
					style={{
						fontFamily: "'DM Mono', monospace",
						fontSize: 11,
						color: 'var(--t3)',
						letterSpacing: '.12em',
						textTransform: 'uppercase',
					}}
				>
					© 2024 Mecit Çağan
				</span>
				<div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
					<span
						style={{
							fontFamily: "'DM Mono', monospace",
							fontSize: 11,
							color: 'var(--t3)',
						}}
					>
						Frontend Developer
					</span>
					<ButtonAccent style={{ padding: '5px 12px' }} onClick={openDemoHub}>
						Projeler ↗
					</ButtonAccent>
				</div>
			</div>
		</footer>
	);
}
