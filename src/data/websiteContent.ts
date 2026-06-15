import { Service, Testimonial } from '../types';

export const servicesData: Service[] = [
  {
    id: 'web-design',
    title: {
      en: 'Premium Web Design',
      id: 'Desain Web Premium'
    },
    shortDesc: {
      en: 'Stunning minimalist design, pixel-perfect layout, and modern interactions focused on high conversion.',
      id: 'Desain visual memukau, tata letak sempurna, dan interaksi modern yang fokus pada konversi tinggi.'
    },
    fullDesc: {
      en: 'We create high-end visual experiences tailored for businesses and individuals who command a premium online presence. Built with responsive frameworks, fluid micro-animations, fast loading speed, and modern architectural principles typical of shadcn/ui and custom React frameworks.',
      id: 'Kami menciptakan pengalaman visual papan atas yang disesuaikan untuk bisnis dan perorangan yang membutuhkan representasi online premium. Dibangun dengan framework responsif, mikro-animasi halus, kecepatan muat instan, serta prinsip dasar optimal seperti shadcn/ui.'
    },
    features: {
      en: [
        'Bespoke User Interfaces (UI/UX)',
        'Fully Responsive & Mobile-Optimized Layouts',
        'Built-in Technical SEO Best Practices',
        'Interactive Motion & Smooth Scroll Features',
        'Optimized for Performance and Core Web Vitals'
      ],
      id: [
        'Desain Antarmuka Unik & Kustom (UI/UX)',
        'Tata Letak Responsif & Dioptimalkan untuk Seluler',
        'Optimasi SEO Teknis Mandiri',
        'Fitur Motion Interaktif & Scroll Halus',
        'Dioptimalkan untuk Performa & Core Web Vitals'
      ]
    },
    icon: 'LayoutTemplate',
    badge: {
      en: 'Visual-First',
      id: 'Fokus Visual'
    }
  },
  {
    id: 'software-dev',
    title: {
      en: 'Software Development',
      id: 'Pembuatan Software'
    },
    shortDesc: {
      en: 'Custom full-stack web platforms, reliable backend services, automation scripts, and database integrations tailored to your business operations.',
      id: 'Platform web kustom full-stack, layanan sistem backend handal, skrip otomatisasi, dan integrasi database untuk efisiensi bisnis Anda.'
    },
    fullDesc: {
      en: 'From database-driven internal portals to secure SaaS platforms, we write clean, type-safe, and highly-scalable code. We leverage modern server ecosystems, custom APIs, and secure architectures to make sure your applications run flawlessly under heavy workloads.',
      id: 'Dari portal internal berbasis database hingga platform SaaS yang aman, kami menulis kode yang bersih, type-safe, dan sangat dapat diskalakan. Kami memanfaatkan ekosistem modern, API kustom, dan arsitektur aman agar software berjalan lancar.'
    },
    features: {
      en: [
        'Custom Web Apps & Portal Development',
        'Secure APIs & Cloud-Ready Microservices',
        'Durable Databases (PostgreSQL, Firestore, SQL)',
        'Workflow Automation & Legacy System Modernization',
        'Codebase Maintainability & Comprehensive Types'
      ],
      id: [
        'Aplikasi Web Kustom & Pengembangan Portal',
        'Koneksi API Aman & Layanan Cloud',
        'Sistem Database Kuat (PostgreSQL, Firestore, SQL)',
        'Otomatisasi Alur Kerja & Modernisasi Sistem Lama',
        'Struktur Kode Tertata & Dukungan Tipe Aman'
      ]
    },
    icon: 'Terminal',
    badge: {
      en: 'Robust Stack',
      id: 'Arsitektur Kuat'
    }
  },
  {
    id: 'computer-install',
    title: {
      en: 'Computer & Hardware Installation',
      id: 'Instalasi Komputer & Hardware'
    },
    shortDesc: {
      en: 'Expert workspace configurations, customized PC assembly, physical network infrastructure, routing, and device deployment.',
      id: 'Konfigurasi komputer ruang kerja, perakitan PC kustom, infrastruktur jaringan fisik, konfigurasi router, dan deployment perangkat.'
    },
    fullDesc: {
      en: 'Get your physical tech up and running securely. We specialize in assembling high-performance workstations optimized for your specific tasks (rendering, coding, office administration), laying category-level cabling (Cat6), configuring switches or multi-access routers, and securely initializing operating environments.',
      id: 'Mulai jalankan teknologi fisik Anda secara aman. Kami ahli dalam merakit komputer performa tinggi (untuk rendering, koding, administrasi), instalasi kabel jaringan (Cat6), pengaturan switch/router multi-akses, dan inisialisasi lingkungan kerja.'
    },
    features: {
      en: [
        'Bespoke PC Assembly (Creator/Dev/Office)',
        'Smart Office Network & Cabling Setups',
        'Wi-Fi 6 Router & Firewall Configurations',
        'Peripheral Integration & Storage Array setups',
        'Workplace Ergodynamic & Tech Architecture Planning'
      ],
      id: [
        'Perakitan PC Kustom (Kreator/Dev/Kantor)',
        'Instalasi Kabel & Jaringan Kantor Modern',
        'Pengaturan Router Wi-Fi 6 & Proteksi Firewall',
        'Integrasi Aksesoris & Media Penyimpanan Data',
        'Perencanaan Tata Letak Area Kerja & Arsitektur Jaringan'
      ]
    },
    icon: 'Cpu',
    badge: {
      en: 'Hardware Expert',
      id: 'Ahli Perangkat Keras'
    }
  },
  {
    id: 'system-maintenance',
    title: {
      en: 'System Maintenance & Support',
      id: 'Perawatan Sistem & Dukungan'
    },
    shortDesc: {
      en: 'Proactive system updates, security patches, hardware tuning, crash recovery, and continuous diagnostics for individual or enterprise setups.',
      id: 'Pembaruan sistem berkala, patch keamanan, tuning perangkat, pemulihan crash, dan diagnosa berkelanjutan untuk perorangan maupun bisnis.'
    },
    fullDesc: {
      en: 'Prevent downtime before it affects your work or bottom line. Our comprehensive maintenance contracts and active on-demand support ensure your operating systems, databases, workstation hardware, network firewalls, and security policies are fully patched, optimized, and backed up.',
      id: 'Cegah kegagalan sistem sebelum mengganggu bisnis Anda. Kontrak perawatan berkala maupun bantuan on-demand memastikan sistem operasi, database, perangkat keras, firewall jaringan, serta backup Anda selalu aman dan optimal.'
    },
    features: {
      en: [
        'Routine OS Optimization & Deep Audits',
        'Redundant Cloud Backup Solutions',
        'Security Patch Enforcement & Malware Audits',
        'Hardware Dusting & Thermal Maintenance',
        'Rapid Remote & On-Site Emergency Support'
      ],
      id: [
        'Optimasi OS Rutin & Audit Diagnosa Sistem',
        'Solusi Cadangan Data Cloud Otomatis',
        'Penerapan Kepatuhan Keamanan & Audit Malware',
        'Pembersihan Fisik PC & Penggantian Thermal Paste',
        'Dukungan Cepat Secara Remote & Kunjungan Lapangan'
      ]
    },
    icon: 'ShieldCheck',
    badge: {
      en: 'Zero Downtime',
      id: 'Jaminan Aktif'
    }
  }
];

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: 'Andi Wijaya',
    role: {
      en: 'Operations Manager',
      id: 'Manajer Operasional'
    },
    company: 'Sinar Pangan Logistik',
    content: {
      en: 'Omniverse One modernized our logistics portal and workspace systems. The performance increase is incredible. Our local office network and custom dashboard have not crashed once.',
      id: 'Omniverse One memodernisasi portal logistik dan sistem komputer kantor kami. Peningkatan performa luar biasa. Jaringan lokal kantor dan dasbor kustom kami berjalan tanpa hambatan sekali pun.'
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 2,
    name: 'Sarah Elizabeth',
    role: {
      en: 'Creative Director',
      id: 'Direktur Kreatif'
    },
    company: 'Studio Arka Bogor',
    content: {
      en: 'The premium web design service completely transformed how our agency is perceived. Exceptional taste, extremely structured layout, and responsive on all devices.',
      id: 'Layanan desain web premium mengubah total citra agensi kreatif kami. Selera estetika yang luar biasa, layout yang tertata sangat bersih, dan super lancar di semua perangkat.'
    },
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 3,
    name: 'Rian Hidayat',
    role: {
      en: 'Founder',
      id: 'Pendiri'
    },
    company: 'Kopi Nusantara Group',
    content: {
      en: 'Highly recommended for tech installations and system tune-ups. They assembled and structured our corporate hardware workstations with high precision and configured a robust Wi-Fi mesh.',
      id: 'Sangat direkomendasikan untuk instalasi hardware dan optimalisasi sistem. Mereka merakit komputer kerja korporat kami dengan presisi tinggi dan mengatur jaringan Wi-Fi mesh yang handal.'
    },
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120'
  }
];

export const faqData = [
  {
    q: {
      en: 'What is Omniverse One?',
      id: 'Apa itu Omniverse One?'
    },
    a: {
      en: 'Omniverse One is a premium, professional tech service proprietorship by a dedicated expert, providing elite services including Web Design, Software Development, Computer Hardware Installations, and System Maintenance for corporate, SMBs, and professional individual clients.',
      id: 'Omniverse One adalah penyedia jasa teknologi premium terpercaya yang dikelola secara profesional, melayani kebutuhan Desain Web, Pembuatan Software kustom, Instalasi Komputer & Jaringan, serta Perawatan Sistem untuk korporat, UMKM, maupun perorangan.'
    }
  },
  {
    q: {
      en: 'How do we schedule a project or consultation?',
      id: 'Bagaimana cara menjadwalkan proyek atau konsultasi?'
    },
    a: {
      en: 'Simply fill in our interactive inquiry form at the bottom, which generates a pre-formatted WhatsApp message directly linked to our team, or click our instant WhatsApp link at 085542257000. We usually reply in minutes.',
      id: 'Silakan isi formulir konsultasi interaktif di bagian bawah, yang akan langsung menyusun pesan otomatis WhatsApp ke tim kami, atau klik langsung tombol WhatsApp kami di nomor 085542257000. Kami umumnya merespons dalam hitungan menit.'
    }
  },
  {
    q: {
      en: 'Do you offer on-site support outside Bogor?',
      id: 'Apakah melayani kunjungan kerja / dukungan langsung di luar Bogor?'
    },
    a: {
      en: 'Yes. For remote software and system diagnostic issues, we serve clients globally. For physical computer installation, local networks, and physical hardware maintenance, we serve the Jabodetabek area (Bogor, Jakarta, Depok, Tangerang, Bekasi) directly from our Tamansari, Bogor office.',
      id: 'Ya. Untuk dukungan perangkat lunak (software) dan bantuan diagnostik sistem komputer secara online, kami melayani klien di mana saja. Untuk instalasi fisik komputer, kabel, hardware, dan perakitan langsung, kami melayani area Jabodetabek dari kantor kami di Tamansari, Bogor.'
    }
  },
  {
    q: {
      en: 'Is there a warranty or SLA on your services?',
      id: 'Apakah layanan diberikan garansi atau kontrak SLA?'
    },
    a: {
      en: 'Absolutely. Web projects and custom systems come with standard 30-day monitoring support. For system maintenance and computer set-ups, we can establish active Service Level Agreements (SLA) depending on client operational needs.',
      id: 'Tentu saja. Proyek web design dan pembuatan software dilengkapi pemantauan gratis standar 30 hari. Untuk perawatan sistem rutin dan manajemen hardware, kami menawarkan kontrak kerja SLA per bulan/tahun atau on-call sesuai kebutuhan operasional.'
    }
  }
];

export const translationKeys = {
  navLogo: 'omniverse one',
  services: { en: 'Services', id: 'Layanan' },
  aboutName: { en: 'About', id: 'Tentang Kami' },
  faq: { en: 'FAQs', id: 'Tanya Jawab' },
  contact: { en: 'Contact', id: 'Hubungi Kami' },
  tagline: {
    en: 'Professional high-performance tech solutions crafted for modern business.',
    id: 'Solusi teknologi profesional berperforma tinggi untuk bisnis modern Anda.'
  },
  subTagline: {
    en: 'A premium, elite technology studio by a technical specialist. We design beautiful digital interfaces, develop solid software, assemble raw high-performance workstations, and secure network environments with a clean, meticulous standard.',
    id: 'Studio teknologi elit oleh spesialis teknis berpengalaman. Kami mendesain antarmuka digital yang mewah, membangun program handal, merakit komputer kerja, dan mengamankan sistem jaringan dengan standar tinggi.'
  },
  getInTouch: { en: 'Get Professional Service', id: 'Dapatkan Layanan Profesional' },
  whatsappDirect: { en: 'Chat WhatsApp Now', id: 'Hubungi WhatsApp Sekarang' },
  addressTitle: { en: 'Office Location', id: 'Lokasi Kantor' },
  addressBody: 'Omniverse One - Ciwaru Indah Residence Blok B5, Tamansari, Bogor 16610',
  whatsappNumber: '085542257000',
  phoneFormatted: '+62 855-4225-7000',
  mapsLink: 'https://maps.app.goo.gl/Xq8HtVoJCFwy4FpY9',
  formTitle: { en: 'Consultation Inquiry', id: 'Formulir Konsultasi' },
  formSubTitle: { en: 'Select services and send an instant formatted direct WhatsApp message.', id: 'Pilih layanan dan buat draf pesan WhatsApp instan sekali klik.' },
  fullName: { en: 'Your Name', id: 'Nama Lengkap' },
  clientCategory: { en: 'Client Type', id: 'Kategori Klien' },
  business: { en: 'Business / Company', id: 'Bisnis / Perusahaan' },
  individual: { en: 'Individual', id: 'Perorangan' },
  selectService: { en: 'Interested Service', id: 'Pilihan Jasa Jasa' },
  extraNotes: { en: 'Brief Requirements or Notes', id: 'Catatan Kebutuhan Singkat' },
  placeholderNotes: { en: 'e.g. Need a modern website for my coffee shop brand / workstation physical setup for 10 employees...', id: 'cth: Butuh website modern untuk brand kafe / perakitan komputer kerja untuk 10 orang staf...' },
  sendButton: { en: 'Generate WhatsApp Message', id: 'Kirim via WhatsApp Instan' },
  closeDetails: { en: 'Close Details', id: 'Tutup Detail' },
  viewDetails: { en: 'View service details', id: 'Lihat rincian jasa' },
  testimonialsTitle: { en: 'Client Retrospectives', id: 'Apa Kata Klien Kami' },
  testimonialsSub: { en: 'Elite responses from businesses and individuals we partner with.', id: 'Tanggapan terbaik dari bisnis maupun individu yang bekerja sama dengan kami.' },
  aboutTitle: { en: 'Elite Dedication. Single-Point Accountability.', id: 'Dedikasi Elit. Satu Titik Pertanggungjawaban Resmi.' },
  aboutParagraph1: {
    en: 'Unlike bloated agencies full of administrative overhead, Omniverse One is fueled by custom elite technical execution. When you hire us, you work directly with a senior technical specialist who architected your systems, codes your software, designs your visuals, and deploys your physical computers.',
    id: 'Berbeda dengan agensi besar yang sarat proses birokrasi, Omniverse One digerakkan oleh eksekusi teknis tingkat lanjut secara langsung. Anda terhubung dan bekerja langsung dengan spesialis teknis senior yang merancang arsitektur sistem Anda, menulis baris kode program, mendesain estetika halaman, serta merakit unit komputer Anda.'
  },
  aboutParagraph2: {
    en: 'We emphasize minimalist premium aesthetics, ultra-responsive modern React software stacks, network installations crafted to physical standards, and continuous maintenance that treats client infrastructure as our very own.',
    id: 'Kami mengutamakan estetika minimalis yang mewah, tumpukan program React modern yang cepat, pengerjaan pemasangan kabel jaringan fisik sesuai kriteria industri, serta pemeliharaan berkelanjutan seolah sistem Anda milik kami pribadi.'
  },
  aboutStats: [
    { value: '100%', label: { en: 'Client Satisfaction', id: 'Kepuasan Klien' } },
    { value: '50+', label: { en: 'Projects Deployed', id: 'Proyek Selesai' } },
    { value: 'Jabodetabek', label: { en: 'Direct On-Site Area', id: 'Kunjungan Langsung' } },
    { value: '24/7', label: { en: 'Critical Response', id: 'Dukungan Kritis' } }
  ]
};
