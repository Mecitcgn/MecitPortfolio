import { SKILLS } from '../../data';
import SkillBar from './SkillBar';
import { Divider, SectionTitle } from '../ui/Typography';
import { useReveal } from '../../hooks/useReveal';

export default function SkillsSection() {
	const titleRef = useReveal();
	const barsRef = useReveal(0.08);

	return (
		<section style={{ padding: '60px 0 100px' }}>
			<div
				className="section-inner"
				style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
			>
				<Divider style={{ marginBottom: 60 }} />

				<div className="section-two-col--equal">
					{/* Sol: başlık */}
					<div ref={titleRef} className="reveal-left">
						<SectionTitle label="Yetenekler" title="Skills" />
						<p
							style={{
								fontFamily: "'DM Mono', monospace",
								fontSize: 12,
								color: 'var(--t2)',
								lineHeight: 1.9,
								marginTop: 16,
							}}
						>
							Temel web geliştirme
							<br />
							becerilerimi sürekli
							<br />
							pekiştiriyorum.
						</p>
					</div>

					{/* Sağ: skill bar'lar */}
					<div ref={barsRef} className="reveal" style={{ paddingTop: 8 }}>
						{SKILLS.map((skill) => (
							<SkillBar key={skill.name} skill={skill} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
