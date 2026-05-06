import { PROJECTS } from '../../data';
import { Label } from '../ui/Typography';
import { ButtonPrimary, ButtonGhost } from '../ui/Button';

/**
 * HeroSection — portfolyo sayfasının büyük giriş bölümü.
 * onProjectsClick → "Projelerimi Gör" butonuna tıklandığında
 * onDemoHub → "Demo Hub" butonuna tıklandığında
 */
export default function HeroSection({ onProjectsClick, onDemoHub }) {
	return (
		<section
			style={{
				minHeight: '92vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: '120px 24px 80px',
				maxWidth: 1200,
				margin: '0 auto',
				position: 'relative',
			}}
		>
			{/* Grid dekorasyon */}
			<div
				style={{
					position: 'absolute',
					inset: 0,
					backgroundImage:
						'linear-gradient(var(--b1) 1px,transparent 1px),linear-gradient(90deg,var(--b1) 1px,transparent 1px)',
					backgroundSize: '48px 48px',
					WebkitMaskImage:
						'radial-gradient(ellipse 70% 85% at 50% 50%, black 20%, transparent 75%)',
					maskImage:
						'radial-gradient(ellipse 70% 85% at 50% 50%, black 20%, transparent 75%)',
					opacity: 0.35,
					pointerEvents: 'none',
				}}
			/>

			{/* Rol etiketi */}
			<div
				className="a1"
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 12,
					marginBottom: 40,
					position: 'relative',
				}}
			>
				<span
					style={{
						width: 32,
						height: 1,
						background: 'var(--acc)',
						display: 'block',
					}}
				/>
				<Label>Frontend Developer</Label>
				<span
					style={{
						width: 6,
						height: 6,
						borderRadius: '50%',
						background: 'var(--acc)',
						animation: 'fu 1s 1.5s both',
						display: 'inline-block',
					}}
				/>
			</div>

			{/* İsim */}
			<div style={{ position: 'relative' }}>
				<div
					className="hero-name a2"
					style={{ fontSize: 'clamp(88px,13vw,200px)', color: 'var(--t)' }}
				>
					MECİT
				</div>
				<div
					style={{
						display: 'flex',
						alignItems: 'flex-end',
						gap: 24,
						flexWrap: 'wrap',
					}}
				>
					<div
						className="hero-name a3"
						style={{ fontSize: 'clamp(88px,13vw,200px)', color: 'var(--acc)' }}
					>
						ÇAĞAN
					</div>
					<div className="a4" style={{ marginBottom: 14, maxWidth: 320 }}>
						<p
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: 12,
								color: 'var(--t2)',
								lineHeight: 1.9,
							}}
						>
							HTML, CSS ve JavaScript
							<br />
							(başlangıç seviyesi) ile
							<br />
							aktif olarak geliştirme yapıyorum.
						</p>
					</div>
				</div>
			</div>

			{/* CTA butonları */}
			<div
				className="a5"
				style={{ display: 'flex', gap: 14, marginTop: 52, flexWrap: 'wrap' }}
			>
				<ButtonPrimary onClick={onProjectsClick}>
					Projelerimi Gör ↓
				</ButtonPrimary>
				<ButtonGhost onClick={onDemoHub}>Demo Hub ↗</ButtonGhost>
			</div>

			{/* Proje sayısı — sağ alt */}
			<div
				className="a6"
				style={{ position: 'absolute', bottom: 40, right: 24 }}
			>
				<div
					style={{
						fontFamily: "'DM Mono', monospace",
						fontSize: 10,
						color: 'var(--t3)',
						letterSpacing: '.18em',
						textTransform: 'uppercase',
						marginBottom: 4,
						textAlign: 'right',
					}}
				>
					Proje
				</div>
				<div
					style={{
						fontFamily: "'Bebas Neue', sans-serif",
						fontSize: 56,
						color: 'var(--t)',
						lineHeight: 1,
					}}
				>
					{String(PROJECTS.length).padStart(2, '0')}
				</div>
			</div>
		</section>
	);
}
