# Portfolio System — Mecit Çağan

Modern, modüler ve component tabanlı portfolyo sistemi.

---

## 📁 Klasör Yapısı

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
│
└── src/
    ├── App.jsx                   ← Kök bileşen (router + provider)
    ├── index.jsx                 ← React entry point
    │
    ├── styles/
    │   └── globals.css           ← CSS değişkenleri, animasyonlar, reset
    │
    ├── data/
    │   └── index.js              ← Tüm veriler + helper fonksiyonlar
    │
    ├── hooks/
    │   ├── useRouter.js          ← Hash tabanlı router hook
    │   └── useToast.jsx          ← Global toast context + Provider
    │
    ├── pages/
    │   ├── PortfolioPage.jsx     ← Ana portfolyo sayfası (/)
    │   ├── DemoHubPage.jsx       ← Tüm projeler sayfası (/demo)
    │   └── ProjectDetailPage.jsx ← Proje detay sayfası (/projects/:id)
    │
    └── components/
        ├── ui/                   ← Evrensel, sayfadan bağımsız bileşenler
        │   ├── Button.jsx        ← ButtonPrimary / ButtonGhost / ButtonAccent
        │   ├── Typography.jsx    ← Label / Tag / TagGray / Divider / SectionTitle
        │   └── ProjectCard.jsx   ← Proje kartı bileşeni
        │
        ├── layout/               ← Sayfa düzeni bileşenleri
        │   ├── Navbar.jsx
        │   └── Footer.jsx
        │
        ├── portfolio/            ← Portfolyo sayfasına özel bileşenler
        │   ├── HeroSection.jsx
        │   ├── FeaturedProjects.jsx
        │   ├── AchievementsSection.jsx
        │   ├── Achievements.jsx  ← Accordion bileşeni
        │   ├── SkillsSection.jsx
        │   └── SkillBar.jsx      ← Intersection Observer animasyonlu bar
        │
        └── demo/                 ← Demo Hub'a özel bileşenler
            └── FilterBar.jsx     ← Kategori filtresi + arama kutusu
```

---

## 🔄 Veri Akışı

```
src/data/index.js
    ↓
pages/ → components/ → ui/
```

Tüm proje verisi `src/data/index.js`'den yönetilir.
Yeni proje eklemek için yalnızca `PROJECTS` dizisine bir eleman eklemek yeterlidir.

---

## ⚙️ Kurulum

```bash
npm install
npm run dev
```

Üretim build'i:

```bash
npm run build
npm run preview
```

---

## 🧭 Routing

Hash-based router kullanılıyor (React Router kurulu değil):

| Hash             | Sayfa               |
| ---------------- | ------------------- |
| `#/`             | Portfolyo ana sayfa |
| `#/demo`         | Demo Hub            |
| `#/projects/:id` | Proje detay sayfası |

---

## ➕ Yeni Proje Ekleme

`src/data/index.js` dosyasındaki `PROJECTS` dizisine ekle:

```js
{
  id: 'proje-id',          // URL'de kullanılır: /projects/proje-id
  num: '09',
  title: 'Proje Adı',
  description: 'Kısa açıklama',
  featured: false,          // true → ana sayfada göster
  category: 'frontend',     // 'frontend' | 'javascript'
  tech: ['HTML', 'CSS'],
  long: 'Uzun açıklama...',
}
```

---

## 🎨 Tasarım Sistemi

| CSS Değişkeni | Değer      | Açıklama      |
| ------------- | ---------- | ------------- |
| `--bg`        | `#080808`  | Arka plan     |
| `--acc`       | `#b8ff57`  | Vurgu rengi   |
| `--t`         | `#f0ece4`  | Ana metin     |
| `--t2`        | `#888880`  | İkincil metin |
| `--fd`        | Bebas Neue | Başlık fontu  |
| `--fm`        | DM Mono    | Mono / etiket |
| `--fb`        | Outfit     | Gövde metni   |
