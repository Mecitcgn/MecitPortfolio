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
					<img src="../../../assets/MecitLogo.png" alt="" />
				</button>
				<div className="nav-links">
					<button
						className={`nl${isPortfolio ? ' act' : ''}`}
						onClick={() => navigate('/')}
					>
						Portfolyo
					</button>
					<button className="nl" onClick={openDemoHub}>
						Projeler ↗
					</button>
					<button className="nav-cta" onClick={openDemoHub}>
						Hub ↗
					</button>
				</div>
			</div>
		</nav>
	);
}
