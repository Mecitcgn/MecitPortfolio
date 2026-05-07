// ─────────────────────────────────────────────────────────────────────────────
// DATA LAYER — Tek merkezi veri yönetimi
// ─────────────────────────────────────────────────────────────────────────────
import OkulYanimdaImg from '../assets/OkulYanimda.png';
export const PROJECTS = [
	{
		id: 'okul-yanimda',
		num: '01',
		title: 'Okul Yanımda',
		description:
			'Okula gelemeyen öğrencilerin derslerden geri kalmaması için öğretmenlerin C# ile masaüstü uygulamasından kayıt alıp, kayıt durduğu zaman otomatik bir şekilde websiteye aktarılan bir sistem.',
		featured: true,
		category: ['frontend', 'backend'],
		tech: ['HTML', 'CSS', 'JS', 'React', 'Supabase', 'Node.js'],
		coverImage: OkulYanimdaImg,
		// coverImage varsa resim gösterilir, yoksa aşağıdaki cover (gradient+pattern) kullanılır.
		// Kullanım: resmi src/assets/ klasörüne koy, sonra import et veya path yaz:
		//   import OkulYanimdaImg from '../assets/OkulYanimda.png';
		//   coverImage: OkulYanimdaImg,
		// coverImage: undefined,  ← resim ekleyince bu satırı güncelle

		cover: {
			gradient:
				'linear-gradient(135deg, #1a0533 0%, #2d1060 40%, #0f1a40 100%)',
			accent: '#c084fc',
			pattern: 'circles',
		},
		demoUrl: 'https://okulyanimdaf.vercel.app',
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
				detail: 'Legacy Responsive Web Design V8 Certification',
			},
			{
				name: 'JS Algorithms & Data Structures',
				issuer: 'FreeCodeCamp',
				year: '2024',
				detail:
					'Legacy JavaScript Algorithms and Data Structures V7 Certification',
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
				name: 'Hackathon Esenyurt',
				org: 'Esenyurt Tech Community',
				year: '2025',
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
				name: 'Hackathon Esenyurt',
				org: 'Esenyurt Tech Community',
				year: '2025',
				detail: 'Birincilik ödülü 🏆',
			},
		],
	},
];

// ─────────────────────────────────────────────────────────────────────────────

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured);
