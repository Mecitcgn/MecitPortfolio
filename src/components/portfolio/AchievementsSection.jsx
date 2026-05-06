import { Divider, SectionTitle } from '../ui/Typography';
import Achievements from './Achievements';
import { useReveal } from '../../hooks/useReveal';

export default function AchievementsSection() {
	const titleRef = useReveal();
	const contentRef = useReveal(0.08);

	return (
		<section style={{ padding: '60px 0 80px' }}>
			<div
				className="section-inner"
				style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
			>
				<Divider style={{ marginBottom: 60 }} />

				<div className="section-two-col">
					{/* Sol: başlık */}
					<div ref={titleRef} className="reveal-left">
						<SectionTitle label="Başarılar" title="Achievements" />
						<p
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: 12,
								color: 'var(--t2)',
								lineHeight: 1.9,
								marginTop: 16,
							}}
						>
							Sertifikalar,
							<br />
							katıldığım ve
							<br />
							kazandığım
							<br />
							yarışmalar.
						</p>
					</div>

					{/* Sağ: accordion */}
					<div ref={contentRef} className="reveal">
						<Achievements />
					</div>
				</div>
			</div>
		</section>
	);
}
