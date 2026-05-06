import { DEMO_HUB_URL } from '../../App';
import logo from '../../assets/MecitLogo.png';
/**
 * Navbar — sticky üst navigasyon.
 * Projeler artık dış siteye yönlendiriyor.
 */

export default function Navbar({ path, navigate }) {
	const isPortfolio = path === '/' || path === '';

	const openDemoHub = () => window.open(DEMO_HUB_URL, '_blank');

	return (
		<nav className="nav">
			<div className="nav-in">
				<button className="nav-logo" onClick={() => navigate('/')}>
					<img src={logo} alt="Mecit Logo" />
				</button>
				<div className="nav-links">
					<button className="nav-cta" onClick={openDemoHub}>
						Projeler ↗
					</button>
				</div>
			</div>
		</nav>
	);
}
