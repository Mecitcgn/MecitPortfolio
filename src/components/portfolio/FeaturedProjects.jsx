import { useRef, useEffect } from 'react';
import { getFeaturedProjects } from '../../data';
import ProjectCard from '../ui/ProjectCard';
import { Divider, SectionTitle } from '../ui/Typography';
import { ButtonGhost, ButtonAccent } from '../ui/Button';
import { useReveal } from '../../hooks/useReveal';

/**
 * FeaturedProjects — portfolyo sayfasında 2x2 grid ile en iyi 4 proje.
 * Scroll reveal: başlık soldan, kartlar staggered yukarıdan gelir.
 */
export default function FeaturedProjects({ onCardClick, onViewAll }) {
	const featured = getFeaturedProjects().slice(0, 4);

	// Başlık + buton satırı
	const headerRef = useReveal();
	// Hint banner
	const hintRef = useReveal();
	// Kart grid — child'ları sırayla açar
	const gridRef = useRef(null);

	useEffect(() => {
		const grid = gridRef.current;
		if (!grid) return;

		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					const cards = grid.querySelectorAll('.reveal-child');
					cards.forEach((card, i) => {
						setTimeout(() => card.classList.add('visible'), i * 120);
					});
					obs.unobserve(grid);
				}
			},
			{ threshold: 0.08 },
		);

		obs.observe(grid);
		return () => obs.disconnect();
	}, []);

	return (
		<section id="featured" style={{ padding: '60px 0 80px' }}>
			<div
				className="section-inner"
				style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}
			>
				<Divider style={{ marginBottom: 60 }} />

				{/* Başlık */}
				<div
					ref={headerRef}
					className="reveal"
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-end',
						marginBottom: 48,
						flexWrap: 'wrap',
						gap: 16,
					}}
				>
					<SectionTitle label="Seçili Projeler" title="Featured Work" />
					<ButtonGhost onClick={onViewAll}>Tümünü Gör ↗</ButtonGhost>
				</div>

				{/* 2×2 Grid */}
				<div
					ref={gridRef}
					className="featured-grid"
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(2, 1fr)',
						gap: 20,
					}}
				>
					{featured.map((project) => (
						<div key={project.id} className="reveal-child">
							<ProjectCard project={project} onClick={onCardClick} />
						</div>
					))}
				</div>

				{/* Hint banner */}
				<div
					ref={hintRef}
					className="reveal"
					style={{
						marginTop: 32,
						padding: 20,
						border: '1px solid var(--b1)',
						borderRadius: 3,
						display: 'flex',
						alignItems: 'center',
						gap: 16,
						flexWrap: 'wrap',
					}}
				>
					<span
						style={{
							fontFamily: "'DM Mono',monospace",
							fontSize: 11,
							color: 'var(--acc)',
						}}
					>
						◈
					</span>
					<span
						style={{
							fontFamily: "'DM Mono',monospace",
							fontSize: 11,
							color: 'var(--t2)',
							flex: 1,
						}}
					>
						Projelere tıklayarak Projeler'e yönlendirileceksiniz.
					</span>
					<ButtonAccent onClick={onViewAll}>Projeler'e Git →</ButtonAccent>
				</div>
			</div>
		</section>
	);
}
