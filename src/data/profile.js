export const profile = {
  name: 'Muhamad Andry Aprilani Nur',
  shortName: 'Andry',
  initials: 'MA',
  title: 'Data Analyst & Web Developer',
  tagline:
    'Lulusan Teknik Informatika dengan konsentrasi Data Science. Berpengalaman dalam analisis data, pengembangan dashboard, machine learning, dan aplikasi web.',
  email: 'andrygaruss@gmail.com',
  phone: '085880276339',
  location: 'Jakarta Utara, Indonesia',
  linkedin: 'https://www.linkedin.com/in/muhamad-andry-aprilani-nur-545813302/',
  education: {
    school: 'Universitas Mercu Buana',
    degree: 'Teknik Informatika — Data Science',
    gpa: '3.74/4.00',
    period: '2022 — 2026',
  },
}

export const stats = [
  { value: '3.74', label: 'GPA' },
  { value: '04+', label: 'Years Exp' },
  { value: '10+', label: 'Projects' },
]

export const heroCards = [
  {
    id: 1,
    label: 'Data Analytics',
    type: 'gradient',
    gradient: 'from-zinc-900 to-black',
    accent: 'bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.6),transparent_60%)]',
    stackX: -45,
    stackY: 8,
    stackRotate: -16,
    spreadX: -260,
    spreadY: 20,
    spreadRotate: -18,
    detail: {
      title: 'Data Analytics',
      subtitle: 'Insight dari Data ke Keputusan',
      description:
        'Saya berpengalaman mengolah, membersihkan, dan menganalisis data untuk menghasilkan insight bisnis yang actionable. Terbiasa bekerja dengan dataset besar menggunakan Python, SQL, dan visualisasi interaktif.',
      bullets: [
        'Exploratory Data Analysis (EDA) & statistical reporting',
        'Data cleaning, transformation, dan standarisasi',
        'Visualisasi data interaktif untuk stakeholder',
        'Digitalisasi data manual di lingkungan industri',
      ],
      link: { label: 'Lihat Projects', href: '#projects' },
    },
  },
  {
    id: 2,
    label: 'Power BI',
    type: 'gradient',
    gradient: 'from-accent to-red-800',
    icon: '◉',
    stackX: -15,
    stackY: 4,
    stackRotate: -6,
    spreadX: -90,
    spreadY: -10,
    spreadRotate: -8,
    detail: {
      title: 'Power BI Dashboard',
      subtitle: 'KPI & Maintenance Reporting',
      description:
        'Membangun dashboard KPI Maintenance interaktif selama magang di PT Toyota Motor Manufacturing Indonesia. Dashboard membantu tim maintenance memonitor performa mesin secara real-time.',
      bullets: [
        'Dashboard KPI Maintenance — PT Toyota (2025)',
        'Integrasi data sensor & historis maintenance',
        'Visual KPI untuk monitoring downtime & efisiensi',
        'Reporting otomatis untuk manajemen',
      ],
      link: { label: 'Lihat Experience', href: '#experience' },
    },
  },
  {
    id: 3,
    label: profile.shortName,
    type: 'photo',
    stackX: 0,
    stackY: 0,
    stackRotate: 2,
    spreadX: 0,
    spreadY: -30,
    spreadRotate: 0,
    detail: {
      title: profile.name,
      subtitle: profile.title,
      description: profile.tagline,
      showPhoto: true,
      bullets: [
        `${profile.education.degree} — ${profile.education.school}`,
        `GPA ${profile.education.gpa} · ${profile.education.period}`,
        profile.location,
        'Silver Medalist — PEKA Inovasi Nasional 2025',
      ],
      link: { label: 'About Me', href: '#about' },
    },
  },
  {
    id: 4,
    label: 'Machine Learning',
    type: 'gradient',
    gradient: 'from-neutral-800 to-neutral-950',
    accent: 'bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.5),transparent_55%)]',
    stackX: 18,
    stackY: 6,
    stackRotate: 10,
    spreadX: 100,
    spreadY: 5,
    spreadRotate: 12,
    detail: {
      title: 'Machine Learning & IoT',
      subtitle: 'Predictive Maintenance',
      description:
        'Mengembangkan aplikasi predictive maintenance berbasis web dengan machine learning, terintegrasi dengan sistem sensor Arduino untuk monitoring kondisi mesin secara real-time di industri manufaktur.',
      bullets: [
        'Predictive maintenance web app — Toyota Magang',
        'Sensor Arduino: Current Spindle, Vibration, Coolant',
        'Model ML untuk prediksi kerusakan mesin',
        'Pipeline data dari hardware ke dashboard',
      ],
      link: { label: 'Lihat Projects', href: '#projects' },
    },
  },
  {
    id: 5,
    label: 'Web Dev',
    type: 'gradient',
    gradient: 'from-stone-100 to-stone-300',
    icon: '⟨/⟩',
    iconClass: 'text-dark/70 font-bold',
    stackX: 48,
    stackY: 12,
    stackRotate: 18,
    spreadX: 270,
    spreadY: 25,
    spreadRotate: 16,
    detail: {
      title: 'Web Development',
      subtitle: 'React · JavaScript · PHP',
      description:
        'Membangun aplikasi web modern — dari landing page, dashboard internal, hingga full-stack app. Portfolio ini sendiri dibuat dengan React, Vite, Tailwind CSS, dan Framer Motion.',
      bullets: [
        'React.js & Vite untuk SPA modern',
        'PHP, HTML/CSS untuk web dinamis',
        'Integrasi API & database (PostgreSQL, MySQL)',
        'UI responsif dengan animasi interaktif',
      ],
      link: { label: 'Lihat Skills', href: '#skills' },
    },
  },
]

export const experiences = [
  {
    company: 'PT Toyota Motor Manufacturing Indonesia',
    role: 'Magang — Staff Maintenance',
    period: 'Apr 2025 — Jul 2025',
    location: 'Jakarta Utara',
    highlights: [
      'Mengembangkan sistem sensor mesin berbasis Arduino untuk monitoring Current Spindle, Vibration, dan Coolant.',
      'Membangun aplikasi predictive maintenance berbasis web dengan machine learning.',
      'Membuat dashboard KPI Maintenance interaktif menggunakan Power BI.',
      'Melakukan digitalisasi data manual dan standarisasi data.',
    ],
  },
  {
    company: 'PT Portal Seribu Bulan',
    role: 'Event Organizer',
    period: 'Jan 2025 — Sekarang',
    location: 'Jakarta',
    highlights: [
      'Mengelola operasional acara LDKS dan LDKO tingkat SMA.',
      'Berperan sebagai MC, PIC Games, dan PIC Kesehatan.',
      'Berkoordinasi dengan tim, sekolah, dan vendor.',
    ],
  },
  {
    company: 'PT Yamaha Music Manufacturing Indonesia',
    role: 'Quality Assurance',
    period: 'Sep 2020 — Apr 2024',
    location: 'Jakarta Timur',
    highlights: [
      'Memeriksa fungsi dan ukuran gitar listrik serta bass elektrik.',
      'Merakit produk dengan memperhatikan detail dan kualitas.',
      'Melakukan pengujian produk jadi sebelum pengiriman.',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Predictive Maintenance',
    category: 'Machine Learning',
    description: 'Aplikasi web ML untuk memprediksi kerusakan mesin berdasarkan data sensor.',
    color: 'from-blue-900 to-blue-950',
    year: '2025',
  },
  {
    id: 2,
    title: 'KPI Maintenance Dashboard',
    category: 'Power BI',
    description: 'Dashboard interaktif untuk memonitor performa pemeliharaan mesin di Toyota.',
    color: 'from-amber-900 to-orange-950',
    year: '2025',
  },
  {
    id: 3,
    title: 'IoT Sensor Monitoring',
    category: 'Arduino & IoT',
    description: 'Sistem sensor berbasis Arduino untuk monitoring kondisi mesin real-time.',
    color: 'from-emerald-900 to-green-950',
    year: '2025',
  },
  {
    id: 4,
    title: 'Data Digitalization',
    category: 'Data Engineering',
    description: 'Digitalisasi data manual dan penyusunan standar data perusahaan.',
    color: 'from-violet-900 to-purple-950',
    year: '2025',
  },
  {
    id: 5,
    title: 'PEKA Inovasi Nasional',
    category: 'Kompetisi',
    description: 'Silver Medalist — PEKA Inovasi Nasional, Universitas Mercu Buana.',
    color: 'from-rose-900 to-red-950',
    year: '2025',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'React.js',
    description: 'Website portofolio pribadi dengan animasi modern menggunakan React & Framer Motion.',
    color: 'from-cyan-900 to-teal-950',
    year: '2026',
  },
]

export const skills = [
  { name: 'Python', icon: 'Py', color: 'bg-[#3776AB]' },
  { name: 'SQL', icon: 'SQL', color: 'bg-[#336791]' },
  { name: 'Power BI', icon: 'BI', color: 'bg-[#F2C811] text-dark' },
  { name: 'React.js', icon: 'Re', color: 'bg-[#61DAFB] text-dark' },
  { name: 'JavaScript', icon: 'JS', color: 'bg-[#F7DF1E] text-dark' },
  { name: 'Machine Learning', icon: 'ML', color: 'bg-[#FF6F00]' },
]

export const skillCategories = [
  'Data Analysis & Visualization',
  'Machine Learning & Predictive Analytics',
  'Web Development (React, PHP, HTML/CSS)',
  'Dashboard & KPI Reporting (Power BI)',
  'IoT & Sensor Systems (Arduino)',
  'Database Management (PostgreSQL, MySQL)',
]
