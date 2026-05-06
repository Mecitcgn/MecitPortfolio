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
 * FeaturedProjects kartlarına tıklanınca Projeler toast'u gösterilir.
 * Projeler artık ayrı bir site (DEMO_HUB_URL).
 */
export default function PortfolioPage({ navigate }) {
	const showToast = useToast();

	const openDemoHub = () => window.open(DEMO_HUB_URL, '_blank');

	const handleCardClick = () => {
		showToast('Projeyi canlı olarak görmek için Projeler sitesine gidin.', {
			label: "Projeler'e Git ↗",
			fn: openDemoHub,
		});
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
