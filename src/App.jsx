import { useRouter } from './hooks/useRouter';
import { ToastProvider } from './hooks/useToast';
import Navbar from './components/layout/Navbar';
import PortfolioPage from './pages/PortfolioPage';
import './styles/globals.css';

/**
 * App — kök bileşen.
 * Sadece portfolyo sayfası var, Projeler ayrı bir site.
 */

// Projeler'ın deploy edildiği URL — Vercel'e deploy ettikten sonra buraya gerçek URL'yi yaz
export const DEMO_HUB_URL = 'https://mecit-portfolio-projects.vercel.app/';

export default function App() {
	const { path, navigate } = useRouter();

	return (
		<ToastProvider>
			<Navbar path={path} navigate={navigate} />
			<PortfolioPage navigate={navigate} />
		</ToastProvider>
	);
}
