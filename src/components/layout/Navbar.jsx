import { DEMO_HUB_URL } from '../../App';
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
					<img src="src/assets/MecitLogo.png" alt="" />
				</button>
				<div className="nav-links">
					<button className="nl" onClick={openDemoHub}>
						Projeler ↗
					</button>
					<button className="nav-cta" onClick={openDemoHub}>
						Portfolyo ↗
					</button>
				</div>
			</div>
		</nav>
	);
}
