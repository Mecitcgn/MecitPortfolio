// ─────────────────────────────────────────────────────────────────────────────
// DATA LAYER — Tek merkezi veri yönetimi
// ─────────────────────────────────────────────────────────────────────────────

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
		cover: {
			gradient:
				'linear-gradient(135deg, #1a0533 0%, #2d1060 40%, #0f1a40 100%)',
			accent: '#c084fc',
			pattern: 'circles',
		},
		demoUrl: 'https://okulyanimdaf.vercel.app',
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
		cover: {
			gradient:
				'linear-gradient(135deg, #001a33 0%, #002952 40%, #001020 100%)',
			accent: '#38bdf8',
			pattern: 'dots',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/todo-app',
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
		cover: {
			gradient:
				'linear-gradient(135deg, #1a0a00 0%, #3d1a00 40%, #1a0800 100%)',
			accent: '#fb923c',
			pattern: 'diagonal',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/agency-landing',
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
		cover: {
			gradient:
				'linear-gradient(135deg, #001a10 0%, #00331f 40%, #001510 100%)',
			accent: '#4ade80',
			pattern: 'hex',
		},
		demoUrl: 'https://mecitcagan-projects.netlify.app/quiz-app',
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

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured);
