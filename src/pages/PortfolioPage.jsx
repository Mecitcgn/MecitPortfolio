import { useEffect } from 'react';
import { useToast } from '../hooks/useToast';
import { DEMO_HUB_URL } from '../App';
import HeroSection from '../components/portfolio/HeroSection';
import FeaturedProjects from '../components/portfolio/FeaturedProjects';
import AchievementsSection from '../components/portfolio/AchievementsSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import Footer from '../components/layout/Footer';

/**
 * PortfolioPage — ana portfolyo sayfası (/)
 * Hero → Featured Projects → Achievements → Skills → Footer
 *
 * Sayfa yüklenince bağımsız bir toast gösterilir: "Tüm projeleri görmek için..."
 * Kart tıklaması → projenin demoUrl'ini yeni sekmede açar.
 */
export default function PortfolioPage({ navigate }) {
	const showToast = useToast();

	const openDemoHub = () => window.open(DEMO_HUB_URL, '_blank');

	// Sayfa yüklenince bağımsız toast — kart tıklamasından tamamen ayrı
	useEffect(() => {
		const timer = setTimeout(() => {
			showToast(
				'Tüm projelerimi görmek ister misiniz? Projeler sayfasına göz atın!',
				{
					label: "Projeler'e Git ↗",
					fn: openDemoHub,
				},
			);
		}, 2200);
		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Kart tıklaması: projenin demoUrl'ini yeni sekmede aç
	const handleCardClick = (project) => {
		const url = project?.demoUrl || DEMO_HUB_URL;
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	const scrollToFeatured = () => {
		document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div>
			<HeroSection onProjectsClick={scrollToFeatured} onDemoHub={openDemoHub} />
			<FeaturedProjects onCardClick={handleCardClick} onViewAll={openDemoHub} />
			<AchievementsSection />
			<SkillsSection />
			<Footer navigate={navigate} openDemoHub={openDemoHub} />
		</div>
	);
}
