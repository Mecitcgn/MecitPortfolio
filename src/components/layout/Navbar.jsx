import { DEMO_HUB_URL } from '../../App';

/**
 * Navbar — sticky üst navigasyon.
 * Demo Hub artık dış siteye yönlendiriyor.
 */

export default function Navbar({ path, navigate }) {
	const isPortfolio = path === '/' || path === '';

	const openDemoHub = () => window.open(DEMO_HUB_URL, '_blank');

	return (
		<nav className="nav">
			<div className="nav-in">
				<button className="nav-logo" onClick={() => navigate('/')}>
					MC
				</button>
				<div className="nav-links">
					<button
						className={`nl${isPortfolio ? ' act' : ''}`}
						onClick={() => navigate('/')}
					>
						Portfolyo
					</button>
					<button className="nl" onClick={openDemoHub}>
						Demo Hub ↗
					</button>
					<button className="nav-cta" onClick={openDemoHub}>
						Hub ↗
					</button>
				</div>
			</div>
		</nav>
	);
}
