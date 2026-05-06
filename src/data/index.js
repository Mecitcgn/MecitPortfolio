// ─────────────────────────────────────────────────────────────────────────────
// DATA LAYER — Tek merkezi veri yönetimi
// ─────────────────────────────────────────────────────────────────────────────

// Her proje için benzersiz görsel kimlik
// cover: { gradient, pattern, accent }
export const PROJECTS = [
	{
		id: 'css-art-gallery',
		num: '01',
		title: 'CSS Art Gallery',
		description:
			'Pure CSS ile oluşturulmuş 12+ interaktif animasyon ve sanat eseri koleksiyonu',
		featured: true,
		category: 'frontend',
		tech: ['HTML', 'CSS'],
		long: "CSS'in sanatsal potansiyelini keşfeden bu proje, JavaScript kullanmadan tamamen CSS ile oluşturulmuş kompleks animasyonlar ve görsel efektler içeriyor. Keyframe animasyonları, CSS custom properties ve clip-path tekniklerini kullanarak oluşturulmuş 12+ benzersiz sanat eseri bulunuyor.",
		cover: {
			gradient:
				'linear-gradient(135deg, #1a0533 0%, #2d1060 40%, #0f1a40 100%)',
			accent: '#c084fc',
			pattern: 'circles',
		},
		// Harici demo URL — PortfolioMecitProjects sitesindeki proje adresi
		demoUrl: 'https://mecitcagan-projects.netlify.app/css-art-gallery',
		sourceUrl: 'https://github.com/mecitcagan/css-art-gallery',
	},
	{
		id: 'todo-app',
		num: '02',
		title: 'Todo Application',
		description:
			'LocalStorage destekli, CRUD işlemli modern yapılacaklar uygulaması',
		featured: true,
		category: 'javascript',
		tech: ['HTML', 'CSS', 'JavaScript'],
		long: 'Vanilla JavaScript ile geliştirilmiş CRUD işlemlerini ve localStorage entegrasyonunu içeren tam fonksiyonel bir todo uygulaması. Kategorilere göre filtreleme, öncelik sıralaması ve tamamlandı/silinmedi durumu takibi mevcuttur.',
		cover: {
			gradient:
				'linear-gradient(135deg, #001a33 0%, #002952 40%, #001020 100%)',
			accent: '#38bdf8',
			pattern: 'dots',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/todo-app',
		sourceUrl: 'https://github.com/mecitcagan/todo-app',
	},
	{
		id: 'landing-page',
		num: '03',
		title: 'Agency Landing Page',
		description:
			'Scroll animasyonları ve parallax efektleriyle modern ajans açılış sayfası',
		featured: true,
		category: 'frontend',
		tech: ['HTML', 'CSS'],
		long: "Intersection Observer API ile tetiklenen scroll animasyonları, CSS parallax arka plan efektleri ve tam responsive tasarımı olan profesyonel ajans landing page'i. CSS Grid ve Flexbox ile oluşturulmuş karmaşık layout yapısı içeriyor.",
		cover: {
			gradient:
				'linear-gradient(135deg, #1a0a00 0%, #3d1a00 40%, #1a0800 100%)',
			accent: '#fb923c',
			pattern: 'diagonal',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/agency-landing',
		sourceUrl: 'https://github.com/mecitcagan/agency-landing',
	},
	{
		id: 'quiz-app',
		num: '04',
		title: 'Quiz Application',
		description:
			'Kategorili, zamanlayıcılı ve skor takipli interaktif quiz platformu',
		featured: true,
		category: 'javascript',
		tech: ['HTML', 'CSS', 'JavaScript'],
		long: 'Farklı kategorilerde çoktan seçmeli sorular, geri sayım sayacı ve localStorage ile saklanan yüksek skor tablosu içeren interaktif quiz uygulaması. Birden fazla zorluk seviyesi ve sonuç ekranı mevcuttur.',
		cover: {
			gradient:
				'linear-gradient(135deg, #001a10 0%, #00331f 40%, #001510 100%)',
			accent: '#4ade80',
			pattern: 'hex',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/quiz-app',
		sourceUrl: 'https://github.com/mecitcagan/quiz-app',
	},
	{
		id: 'weather-widget',
		num: '05',
		title: 'Weather Widget',
		description: 'OpenWeatherMap API ile şehre göre gerçek zamanlı hava durumu',
		featured: false,
		category: 'javascript',
		tech: ['HTML', 'CSS', 'JavaScript'],
		long: "Fetch API kullanarak OpenWeatherMap servisine bağlanan, şehre göre anlık hava durumu, nem, rüzgar hızı ve 5 günlük tahmin bilgisi gösteren widget uygulaması. Hata yönetimi ve loading state'i içeriyor.",
		cover: {
			gradient:
				'linear-gradient(135deg, #001a2e 0%, #003354 40%, #00101f 100%)',
			accent: '#22d3ee',
			pattern: 'waves',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/weather-widget',
		sourceUrl: 'https://github.com/mecitcagan/weather-widget',
	},
	{
		id: 'portfolio-v1',
		num: '06',
		title: 'Portfolio v1',
		description:
			'HTML ve CSS ile sıfırdan oluşturulan ilk kişisel portfolyo sitesi',
		featured: false,
		category: 'frontend',
		tech: ['HTML', 'CSS'],
		long: 'CSS Grid, Flexbox ve CSS scroll animasyonları kullanılarak sıfırdan oluşturulmuş ilk portfolyo sitesi. Karanlık/aydınlık tema geçişi ve mobile-first responsive tasarım içeriyor.',
		cover: {
			gradient:
				'linear-gradient(135deg, #1a0020 0%, #30003d 40%, #120015 100%)',
			accent: '#e879f9',
			pattern: 'rings',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/portfolio-v1',
		sourceUrl: 'https://github.com/mecitcagan/portfolio-v1',
	},
	{
		id: 'calculator',
		num: '07',
		title: 'JS Calculator',
		description:
			'Klavye desteğiyle çalışan tam işlevli bilimsel hesap makinesi',
		featured: false,
		category: 'javascript',
		tech: ['HTML', 'CSS', 'JavaScript'],
		long: 'Temel aritmetik ve trigonometrik işlemleri destekleyen, klavye kısayolları ile kullanılabilen modern hesap makinesi. CSS Grid ile oluşturulmuş düzenli tuş layoutu ve hata yönetimi mevcuttur.',
		cover: {
			gradient:
				'linear-gradient(135deg, #1a1500 0%, #332b00 40%, #1a1100 100%)',
			accent: '#facc15',
			pattern: 'grid',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/calculator',
		sourceUrl: 'https://github.com/mecitcagan/calculator',
	},
	{
		id: 'color-palette',
		num: '08',
		title: 'Color Palette Gen',
		description:
			'Renk teorisi tabanlı uyumlu palet oluşturucu ve dışa aktarma aracı',
		featured: false,
		category: 'javascript',
		tech: ['HTML', 'CSS', 'JavaScript'],
		long: 'Renk teorisi algoritmalarını kullanan, tamamlayıcı, üçlü ve analog renk paleti oluşturan araç. Hex, RGB ve HSL formatlarında değerleri kopyalayabilir, CSS custom property olarak dışa aktarabilirsiniz.',
		cover: {
			gradient:
				'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 40%, #0a0a14 100%)',
			accent: '#f472b6',
			pattern: 'spectrum',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/color-palette',
		sourceUrl: 'https://github.com/mecitcagan/color-palette',
	},
];

// ─────────────────────────────────────────────────────────────────────────────

export const SKILLS = [
	{ name: 'HTML5', level: 75, label: 'İleri Seviye' },
	{ name: 'CSS3', level: 70, label: 'İleri Seviye' },
	{ name: 'JavaScript', level: 30, label: 'Başlangıç' },
];

// ─────────────────────────────────────────────────────────────────────────────

export const ACHIEVEMENTS = [
	{
		id: 'certs',
		icon: '◈',
		title: 'Sertifikalar',
		items: [
			{
				name: 'Responsive Web Design',
				issuer: 'FreeCodeCamp',
				year: '2024',
				detail: '300+ saatlik müfredat',
			},
			{
				name: 'JS Algorithms & Data Structures',
				issuer: 'FreeCodeCamp',
				year: '2024',
				detail: '300+ saatlik müfredat',
			},
		],
	},
	{
		id: 'parti',
		icon: '◉',
		title: 'Katıldığım Yarışmalar',
		items: [
			{
				name: 'Teknofest Web Tasarım',
				org: 'Teknofest',
				year: '2024',
				detail: 'Ulusal yarışma',
			},
			{
				name: 'Hackathon Istanbul',
				org: 'Istanbul Tech Community',
				year: '2024',
				detail: '24 saatlik hackathon',
			},
		],
	},
	{
		id: 'won',
		icon: '★',
		title: 'Kazandığım Yarışmalar',
		items: [
			{
				name: 'Okul Geneli Web Tasarım',
				org: 'Okulum',
				year: '2024',
				detail: 'Birincilik ödülü 🏆',
			},
		],
	},
];

// ─────────────────────────────────────────────────────────────────────────────

export const DEMO_HUB_URL = 'https://mecitcagan-projects.netlify.app';

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured);
export const getProjectById = (id) => PROJECTS.find((p) => p.id === id);
export const getProjectsByCategory = (cat) =>
	cat === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
export const CATEGORIES = ['all', 'frontend', 'javascript'];
