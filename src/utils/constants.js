export const SITE_CONFIG = {
  name: "LaserCut Pro",
  title: "Jasa Laser Cutting Terpercaya #1 di Jawa Barat",
  description: "Solusi laser cutting profesional dengan teknologi terdepan. 10+ tahun pengalaman, 1000+ proyek selesai, garansi kualitas premium. Melayani CNC Router, Laser Fiber, Laser CO2, dan Galvo Engraving.",
  url: "https://ddos-spec.github.io/rajacuttinglaser", // PENTING: HANYA domain utama, tanpa nama repo
  author: "LaserCut Pro Team",
  keywords: "jasa laser cutting, cnc router, laser fiber, laser co2, galvo engraving, jawa barat, bandung, bekasi, bogor, depok, cimahi, sukabumi",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890", 
  email: "info@lasercut-pro.com",
  address: "Jl. Industri Raya No. 123, Bandung, Jawa Barat 40123",
  businessHours: "Senin - Sabtu: 08:00 - 17:00 WIB",
  socialMedia: {
    facebook: "https://facebook.com/lasercutpro",
    instagram: "https://instagram.com/lasercutpro",
    youtube: "https://youtube.com/lasercutpro",
    linkedin: "https://linkedin.com/company/lasercutpro"
  }
};

export const SERVICES = [
  {
    id: "cnc-router",
    name: "Jasa CNC Router",
    slug: "jasa-cnc-router",
    description: "Layanan CNC Router presisi tinggi untuk berbagai material kayu, MDF, dan plastik",
    features: ["Presisi 0.1mm", "Material Kayu & MDF", "Ukuran hingga 2x3 meter", "Finishing Premium"],
    price: "Mulai dari Rp 50.000/m²",
    image: "/rajacuttinglaser/cncrouter.webp",
    keywords: "jasa cnc router bandung, cnc router bekasi, cnc router bogor"
  },
  {
    id: "laser-fiber",
    name: "Jasa Laser Fiber",
    slug: "jasa-laser-fiber",
    description: "Laser Fiber cutting untuk material metal dengan hasil sempurna dan presisi tinggi",
    features: ["Cutting Metal", "Presisi 0.05mm", "Stainless Steel", "Aluminium & Besi"],
    price: "Mulai dari Rp 75.000/m²",
    image: "/rajacuttinglaser/mesin-laser-fiber.webp",
    keywords: "laser fiber cutting, potong stainless steel, laser metal bekasi"
  },
  {
    id: "laser-co2",
    name: "Jasa Laser CO2",
    slug: "jasa-laser-co2",
    description: "Laser CO2 untuk material non-metal seperti acrylic, kayu, dan kain dengan detail sempurna",
    features: ["Acrylic & Kayu", "Engraving Detail", "Cutting Presisi", "Finishing Halus"],
    price: "Mulai dari Rp 40.000/m²",
    image: "/rajacuttinglaser/mesin-laser-co2.webp",
    keywords: "laser co2 acrylic bogor, potong acrylic bandung, laser kayu"
  },
  {
    id: "galvo-engraving",
    name: "Laser Engraving",
    slug: "jasa-galvo-engraving",
    description: "Galvo laser engraving untuk marking, logo, dan detail halus pada berbagai material",
    features: ["Marking Presisi", "Logo & Text", "Material Beragam", "Hasil Permanen"],
    price: "Mulai dari Rp 25.000/pcs",
    image: "/rajacuttinglaser/mesin-galvo-engraving.webp",
    keywords: "laser engraving depok, marking laser, logo engraving"
  }
];

export const MATERIALS = [
  {
    id: "acp",
    name: "ACP",
    slug: "material-acp",
    description: "Cutting ACP (Aluminium Composite Panel) untuk signage dan fasad bangunan",
    thickness: "3mm - 6mm",
    applications: ["Signage", "Fasad", "Interior", "Eksterior"],
    image: "/rajacuttinglaser/material-acp-sample.webp",
    keywords: "potong acp aluminium cimahi, cutting acp bandung"
  },
  {
    id: "pvc",
    name: "PVC Plastik",
    slug: "material-pvc",
    description: "Cutting PVC custom untuk berbagai keperluan industri dan kreatif",
    thickness: "1mm - 10mm",
    applications: ["Signage", "Prototype", "Display", "Packaging"],
    image: "/rajacuttinglaser/material-pvc-sample.webp",
    keywords: "cutting pvc custom sukabumi, potong pvc plastik"
  },
  {
    id: "metal",
    name: "Stainless Steel / Metal",
    slug: "material-metal",
    description: "Laser cutting stainless steel dengan presisi tinggi untuk industri",
    thickness: "0.5mm - 20mm",
    applications: ["Industri", "Arsitektur", "Furniture", "Dekorasi"],
    image: "/rajacuttinglaser/material-metal-sample.webp",
    keywords: "laser cutting stainless steel, potong besi presisi"
  },
  {
    id: "acrylic",
    name: "Acrylic Kaca",
    slug: "material-acrylic",
    description: "Cutting dan engraving acrylic untuk display dan dekorasi premium",
    thickness: "2mm - 30mm",
    applications: ["Display", "Signage", "Dekorasi", "Prototype"],
    image: "/rajacuttinglaser/material-acrylic-sample.webp",
    keywords: "potong acrylic kaca, laser acrylic bandung"
  },
  {
    id: "ply-wood-multiplex",
    name: "Ply Wood / Multiplex",
    slug: "material-ply-wood-multiplex",
    description: "Cutting dan engraving Ply Wood / Multiplex untuk furniture dan dekorasi",
    thickness: "3mm - 20mm",
    applications: ["Furniture", "Dekorasi", "Kerajinan", "Interior"],
    image: "/rajacuttinglaser/material-plywood-sample.webp",
    keywords: "potong plywood, laser kayu, multiplex"
  },
  {
    id: "grc",
    name: "GRC",
    slug: "material-grc",
    description: "Cutting GRC (Glassfibre Reinforced Concrete) untuk fasad dan ornamen bangunan",
    thickness: "8mm - 15mm",
    applications: ["Fasad", "Ornamen", "Panel", "Eksterior"],
    image: "/rajacuttinglaser/material-grc-sample.webp",
    keywords: "potong grc, grc laser cutting, fasad grc"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    company: "PT. Kreatif Nusantara",
    position: "Project Manager",
    content: "Kualitas laser cutting terbaik yang pernah kami gunakan. Presisi tinggi dan hasil sempurna untuk semua project signage kami.",
    rating: 5,
    image: "/rajacuttinglaser/testimonial-1.webp"
  },
  {
    id: 2,
    name: "Sari Dewi",
    company: "Studio Arsitektur Modern",
    position: "Lead Architect",
    content: "Pelayanan profesional dan hasil cutting yang sangat memuaskan. Recommended untuk semua kebutuhan laser cutting.",
    rating: 5,
    image: "/rajacuttinglaser/testimonial-2.webp"
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    company: "Furniture Mebel Jaya",
    position: "Owner",
    content: "Sudah 3 tahun menggunakan jasa LaserCut Pro. Selalu puas dengan kualitas dan ketepatan waktu pengerjaan.",
    rating: 5,
    image: "/rajacuttinglaser/testimonial-3.webp"
  }
];

export const PORTFOLIO = [
  {
    id: 1,
    title: "Signage Hotel Bintang 5",
    category: "Commercial",
    material: "ACP Aluminium",
    service: "CNC Router",
    image: "/rajacuttinglaser/portfolio-hotel-signage.webp",
    description: "Pembuatan signage premium untuk hotel bintang 5 dengan detail presisi tinggi"
  },
  {
    id: 2,
    title: "Furniture Custom Stainless",
    category: "Industrial",
    material: "Stainless Steel",
    service: "Laser Fiber",
    image: "/rajacuttinglaser/portfolio-furniture-steel.webp",
    description: "Cutting furniture stainless steel custom untuk restaurant modern"
  },
  {
    id: 3,
    title: "Display Acrylic Premium",
    category: "Retail",
    material: "Acrylic",
    service: "Laser CO2",
    image: "/rajacuttinglaser/portfolio-acrylic-display.webp",
    description: "Display acrylic premium untuk toko retail dengan engraving logo"
  },
  {
    id: 4,
    title: "Prototype Industri",
    category: "Manufacturing",
    material: "PVC",
    service: "CNC Router",
    image: "/rajacuttinglaser/portfolio-prototype-pvc.webp",
    description: "Prototype komponen industri dengan presisi tinggi menggunakan PVC"
  }
];

export const FAQ = [
  {
    id: 1,
    question: "Berapa lama waktu pengerjaan laser cutting?",
    answer: "Waktu pengerjaan tergantung kompleksitas dan volume order. Untuk project standar 1-3 hari kerja, project besar 1-2 minggu. Kami selalu memberikan estimasi waktu yang akurat setelah konsultasi."
  },
  {
    id: 2,
    question: "Apakah ada minimum order untuk jasa laser cutting?",
    answer: "Tidak ada minimum order. Kami melayani dari order satuan hingga produksi massal. Harga akan disesuaikan dengan volume dan kompleksitas pekerjaan."
  },
  {
    id: 3,
    question: "Material apa saja yang bisa di-cutting?",
    answer: "Kami melayani cutting untuk berbagai material: ACP, Stainless Steel, Aluminium, Acrylic, Kayu, MDF, PVC, Kain, Kulit, dan material lainnya. Konsultasikan material Anda dengan tim kami."
  },
  {
    id: 4,
    question: "Bagaimana cara mendapatkan quote harga?",
    answer: "Kirimkan file design (AI, CDR, DWG, PDF) dan spesifikasi material via WhatsApp. Tim kami akan memberikan quote dalam 24 jam beserta saran optimasi jika diperlukan."
  },
  {
    id: 5,
    question: "Apakah ada garansi untuk hasil cutting?",
    answer: "Ya, kami memberikan garansi kualitas 100%. Jika hasil tidak sesuai spesifikasi yang disepakati, kami akan mengulang pekerjaan tanpa biaya tambahan."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Cara Memilih Material yang Tepat untuk Laser Cutting",
    slug: "cara-memilih-material-laser-cutting",
    excerpt: "Panduan lengkap memilih material yang sesuai untuk project laser cutting Anda",
    category: "Tutorial",
    readTime: "5 menit",
    publishDate: "2024-01-15",
    image: "/rajacuttinglaser/blog-material-guide.webp"
  },
  {
    id: 2,
    title: "Perbedaan Laser Fiber vs Laser CO2: Mana yang Lebih Baik?",
    slug: "perbedaan-laser-fiber-vs-co2",
    excerpt: "Analisis mendalam tentang kelebihan dan kekurangan masing-masing teknologi laser",
    category: "Technical",
    readTime: "7 menit",
    publishDate: "2024-01-10",
    image: "/rajacuttinglaser/blog-laser-comparison.webp"
  },
  {
    id: 3,
    title: "Tren Industri Kreatif Bandung 2024",
    slug: "tren-industri-kreatif-bandung-2024",
    excerpt: "Insight tentang perkembangan industri kreatif di Bandung dan peluang bisnis",
    category: "Industry",
    readTime: "6 menit",
    publishDate: "2024-01-05",
    image: "/rajacuttinglaser/blog-industry-trends.webp"
  },
  {
    id: 4,
    title: "5 Kesalahan Umum Saat Memilih Jasa Laser Cutting (dan Cara Menghindarinya)",
    slug: "kesalahan-umum-memilih-jasa-laser-cutting",
    excerpt: "Hindari kesalahan fatal yang bisa merugikan project Anda dengan tips dari ahli laser cutting",
    category: "Tips",
    readTime: "8 menit",
    publishDate: "2024-01-20",
    image: "/rajacuttinglaser/blog-common-mistakes.webp"
  },
  {
    id: 5,
    title: "Panduan Lengkap: Cara Menyiapkan File Desain (DXF, AI, CDR) untuk Laser Cutting",
    slug: "panduan-file-desain-laser-cutting",
    excerpt: "Tutorial step-by-step menyiapkan file desain yang optimal untuk hasil laser cutting terbaik",
    category: "Tutorial",
    readTime: "10 menit",
    publishDate: "2024-01-18",
    image: "/rajacuttinglaser/blog-file-preparation.webp"
  },
  {
    id: 6,
    title: "GRC vs ACP: Mana Material Terbaik untuk Fasad Bangunan Anda?",
    slug: "grc-vs-acp-material-fasad-bangunan",
    excerpt: "Perbandingan komprehensif antara GRC dan ACP untuk membantu Anda memilih material fasad yang tepat",
    category: "Comparison",
    readTime: "9 menit",
    publishDate: "2024-01-16",
    image: "/rajacuttinglaser/blog-grc-vs-acp.webp"
  },
  {
    id: 7,
    title: "Teknik Laser Engraving: Dari Kayu hingga Metal untuk Branding Produk Anda",
    slug: "teknik-laser-engraving-branding-produk",
    excerpt: "Eksplorasi teknik laser engraving pada berbagai material untuk menciptakan branding produk yang memorable",
    category: "Technical",
    readTime: "12 menit",
    publishDate: "2024-01-14",
    image: "/rajacuttinglaser/blog-laser-engraving-techniques.webp"
  },
  {
    id: 8,
    title: "Studi Kasus: Bagaimana CNC Router Mengubah Industri Furniture Custom",
    slug: "cnc-router-industri-furniture-custom",
    excerpt: "Analisis mendalam bagaimana teknologi CNC Router merevolusi industri furniture custom di Indonesia",
    category: "Case Study",
    readTime: "11 menit",
    publishDate: "2024-01-12",
    image: "/rajacuttinglaser/blog-cnc-furniture-case-study.webp"
  },
  {
    id: 9,
    title: "Perawatan Hasil Laser Cutting pada Stainless Steel agar Tidak Kusam",
    slug: "perawatan-laser-cutting-stainless-steel",
    excerpt: "Tips dan trik profesional untuk menjaga hasil laser cutting stainless steel tetap berkilau dan awet",
    category: "Maintenance",
    readTime: "6 menit",
    publishDate: "2024-01-08",
    image: "/rajacuttinglaser/blog-stainless-steel-maintenance.webp"
  }
];

export const NAVIGATION = [
  { name: "Beranda", href: "/rajacuttinglaser/", active: true },
  { 
    name: "Layanan", 
    href: "/rajacuttinglaser/#services",
    submenu: [
      { name: "CNC Router", href: "/rajacuttinglaser/jasa-cnc-router" },
      { name: "Laser Fiber", href: "/rajacuttinglaser/jasa-laser-fiber" },
      { name: "Laser CO2", href: "/rajacuttinglaser/jasa-laser-co2" },
      { name: "Galvo Engraving", href: "/rajacuttinglaser/jasa-galvo-engraving" }
    ]
  },
  { 
    name: "Material", 
    href: "/rajacuttinglaser/#materials",
    submenu: [
      { name: "ACP", href: "/rajacuttinglaser/material-acp" },
      { name: "PVC Plastik", href: "/rajacuttinglaser/material-pvc" },
      { name: "Stainless Steel / Metal", href: "/rajacuttinglaser/material-metal" },
      { name: "Acrylic Kaca", href: "/rajacuttinglaser/material-acrylic" },
      { name: "Ply Wood / Multiplex", href: "/rajacuttinglaser/material-ply-wood-multiplex" },
      { name: "GRC", href: "/rajacuttinglaser/material-grc" }
    ]
  },
  { name: "Portfolio", href: "/rajacuttinglaser/portfolio" },
  { name: "Blog", href: "/rajacuttinglaser/blog" },
  { name: "Tentang", href: "/rajacuttinglaser/about" },
  { name: "Kontak", href: "/rajacuttinglaser/contact" }
];

export const WHATSAPP_MESSAGES = {
  default: "Halo, saya tertarik dengan jasa laser cutting. Bisa konsultasi?",
  cnc: "Halo, saya butuh informasi tentang jasa CNC Router. Bisa bantu?",
  fiber: "Halo, saya ingin tanya tentang laser fiber cutting untuk material metal.",
  co2: "Halo, saya tertarik dengan laser CO2 untuk cutting acrylic.",
  engraving: "Halo, saya butuh jasa laser engraving. Bisa konsultasi?",
  quote: "Halo, saya ingin request quote untuk project laser cutting."
};