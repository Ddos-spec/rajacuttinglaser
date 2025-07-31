// src/utils/constants.js

export const SITE_CONFIG = {
  name: "LaserCut Pro",
  title: "Jasa Laser Cutting Akurat & Cepat #1 Jabodetabek - Akrilik, Kayu, Metal",
  description: "Laser cutting presisi tinggi & pengerjaan cepat di Jabodetabek! Spesialis akrilik, kayu, metal dengan teknologi terdepan. 10+ tahun pengalaman, hasil akurat, garansi kualitas. Melayani Jakarta, Bogor, Depok, Tangerang, Bekasi.",
  url: "https://ddos-spec.github.io/rajacuttinglaser/",
  author: "LaserCut Pro Team",
  whatsapp: "6285165693179",
  email: "info@rajacuttinglaser.com",
  address: "Jl. Raya Bogor No. 123, Jakarta Timur",
  phone: "+62 851 6569 3179"
};

export const NAVIGATION = [
  { name: 'Beranda', url: '/' },
  { name: 'Tentang Kami', url: '/about' },
  { name: 'Layanan', url: '/jasa-laser-co2' },
  { name: 'Material', url: '/material-acrylic' },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Blog', url: '/blog' },
  { name: 'Kontak', url: '/contact' }
];

export const SERVICES = [
  {
    id: "laser-co2",
    name: "Laser CO2",
    slug: "jasa-laser-co2",
    description: "Cutting presisi tinggi untuk material non-metal seperti akrilik, kayu, MDF, kertas, kain, dan karet",
    features: [
      "Ketebalan material hingga 20mm",
      "Presisi hingga 0.1mm",
      "Finishing halus dan clean",
      "Ideal untuk signage, dekorasi, prototyping"
    ],
    applications: ["Signage", "Dekorasi", "Prototyping", "Kemasan"],
    image: "/images/co2.webp", // Diperbaiki
    keywords: "jasa laser co2 jakarta, cutting akrilik bogor, laser kayu depok, potong mdf tangerang, laser cutting bekasi, cutting kain jakarta, laser karet bogor"
  },
  {
    id: "laser-fiber",
    name: "Laser Fiber",
    slug: "jasa-laser-fiber",
    description: "Solusi cutting & marking presisi untuk material metal seperti stainless steel, aluminium, besi, dan tembaga",
    features: [
      "Marking permanen & tahan lama",
      "Cutting metal hingga 10mm",
      "Kecepatan tinggi dan efisiensi biaya",
      "Tidak memerlukan bahan kimia berbahaya"
    ],
    applications: ["Industri", "Automotif", "Elektronik", "Branding"],
    image: "/images/laserfiber.webp", // Diperbaiki
    keywords: "jasa laser fiber jakarta, cutting stainless bogor, laser alumunium depok, potong besi tangerang, laser cutting metal bekasi, marking tembaga jakarta"
  },
  {
    id: "cnc-router",
    name: "CNC Router",
    slug: "jasa-cnc-router",
    description: "Pengerjaan kompleks untuk material keras seperti ACP, GRC, kayu keras, dan plastik tebal",
    features: [
      "3D carving dan profiling",
      "Kemampuan memotong material tebal",
      "Repeatability tinggi untuk produksi massal",
      "Finishing presisi untuk detail rumit"
    ],
    applications: ["Fasad", "Furniture", "Moulding", "Signage"],
    image: "/images/cncrouter.webp", // Diperbaiki
    keywords: "jasa cnc router jakarta, cutting acp bogor, laser grc depok, potong kayu tangerang, cnc router bekasi, carving akrilik jakarta"
  },
  {
    id: "galvo-engraving",
    name: "Galvo Engraving",
    slug: "jasa-galvo-engraving",
    description: "Engraving kecepatan tinggi untuk personalisasi dan branding produk pada berbagai material",
    features: [
      "Kecepatan engraving hingga 10x lebih cepat",
      "Resolusi tinggi untuk detail kompleks",
      "Personalisasi batch dalam waktu singkat",
      "Ideal untuk serial number, logo, QR code"
    ],
    applications: ["Branding", "Personalisasi", "Traceability", "Promosi"],
    image: "/images/galvo.webp", // Diperbaiki
    keywords: "jasa galvo engraving jakarta, laser engraving bogor, engrave depok, potong engraving tangerang, laser engrave bekasi, branding produk jakarta"
  }
];

export const MATERIALS = [
  {
    id: "acrylic",
    name: "Akrilik",
    slug: "material-acrylic",
    description: "Material transparan berkualitas tinggi untuk berbagai aplikasi signage dan dekorasi",
    thickness: "1mm - 20mm",
    applications: ["Signage", "Display", "Dekorasi", "Prototyping"],
    image: "/images/Acrylic.webp", // Diperbaiki
    keywords: "potong akrilik jakarta, cutting acrylic bekasi, laser acrylic bogor, potong acrylic depok, cutting acrylic tangerang"
  },
  {
    id: "mdf",
    name: "MDF",
    slug: "material-mdf",
    description: "Kayu engineered dengan permukaan halus, ideal untuk painting dan aplikasi dekoratif",
    thickness: "3mm - 25mm",
    applications: ["Furniture", "Dekorasi", "Craft", "Model"],
    image: "/images/MDF.webp", // Diperbaiki
    keywords: "potong mdf jakarta, laser cutting mdf bekasi, cutting mdf bogor, potong mdf depok, laser mdf tangerang"
  },
  {
    id: "plywood",
    name: "Plywood/Multiplex",
    slug: "material-ply-wood-multiplex",
    description: "Kayu lapis berkualitas untuk kekuatan struktural dan tampilan alami yang menarik",
    thickness: "3mm - 25mm",
    applications: ["Furniture", "Dekorasi", "Kerajinan", "Interior"],
    image: "/images/Ply Wood.webp", // Diperbaiki
    keywords: "potong plywood jakarta, laser kayu bekasi, cutting multiplex bogor, potong kayu depok, laser plywood tangerang"
  },
  {
    id: "metal",
    name: "Metal (Stainless, Aluminium)",
    slug: "material-metal",
    description: "Berbagai jenis logam untuk aplikasi industri, arsitektur, dan branding produk",
    thickness: "0.5mm - 10mm",
    applications: ["Industri", "Arsitektur", "Automotif", "Branding"],
    image: "/images/Metal.webp", // Diperbaiki
    keywords: "potong stainless jakarta, laser cutting metal bekasi, cutting alumunium bogor, potong besi depok, laser stainless tangerang"
  },
  {
    id: "acp",
    name: "ACP (Aluminium Composite Panel)",
    slug: "material-acp",
    description: "Panel komposit ringan namun kuat untuk aplikasi fasad dan signage premium",
    thickness: "2mm - 6mm",
    applications: ["Signage", "Fasad", "Interior", "Eksterior"],
    image: "/images/acp.webp", // Diperbaiki
    keywords: "potong acp aluminium jakarta, cutting acp bekasi, acp laser bogor, potong acp depok, cutting acp tangerang"
  },
  {
    id: "pvc",
    name: "PVC Plastik",
    slug: "material-pvc",
    description: "Cutting PVC custom untuk berbagai keperluan industri dan kreatif",
    thickness: "1mm - 10mm",
    applications: ["Signage", "Prototype", "Display", "Packaging"],
    image: "/images/pvc.webp", // Diperbaiki
    keywords: "potong pvc jakarta, cutting pvc bekasi, laser pvc bogor, potong pvc depok, cutting pvc tangerang"
  },
  {
    id: "grc",
    name: "GRC",
    slug: "material-grc",
    description: "Cutting GRC (Glassfibre Reinforced Concrete) untuk fasad dan ornamen bangunan",
    thickness: "8mm - 15mm",
    applications: ["Fasad", "Ornamen", "Panel", "Eksterior"],
    image: "/images/grc.webp", // Diperbaiki
    keywords: "potong grc jakarta, grc laser cutting bekasi, fasad grc bogor, cutting grc depok, laser grc tangerang"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    company: "PT. Kreatif Nusantara Jakarta",
    position: "Project Manager",
    content: "Kualitas laser cutting terbaik yang pernah kami gunakan di Jakarta. Presisi tinggi dan hasil sempurna untuk semua project signage kami.",
    rating: 5,
    image: "/images/budisantoso.webp" // Diperbaiki
  },
  {
    id: 2,
    name: "Sari Dewi",
    company: "Studio Arsitektur Modern Bekasi",
    position: "Lead Architect",
    content: "Pelayanan profesional dan hasil cutting yang sangat memuaskan. Recommended untuk semua kebutuhan laser cutting di Jabodetabek.",
    rating: 5,
    image: "/images/Sari Dewi.webp" // Diperbaiki
  },
  {
    id: 3,
    name: "Ahmad Rizki",
    company: "Furniture Mebel Jaya Bogor",
    position: "Owner",
    content: "Sudah 3 tahun menggunakan jasa LaserCut Pro. Selalu puas dengan kualitas dan ketepatan waktu pengerjaan, pengiriman ke Bogor juga cepat.",
    rating: 5,
    image: "/images/Ahmad Rizki.webp" // Diperbaiki
  }
];

export const PORTFOLIO = [
  {
    id: 1,
    title: "Signage Hotel Bintang 5 Jakarta",
    category: "Commercial",
    material: "ACP Aluminium",
    service: "CNC Router",
    image: "/images/singagehote.webp", // Diperbaiki
    description: "Pembuatan signage premium untuk hotel bintang 5 di Jakarta dengan detail presisi tinggi"
  },
  {
    id: 2,
    title: "Furniture Custom Stainless Bekasi",
    category: "Industrial",
    material: "Stainless Steel",
    service: "Laser Fiber",
    image: "/images/furnituremetal.webp", // Diperbaiki
    description: "Cutting furniture stainless steel custom untuk restaurant modern di Bekasi"
  },
  {
    id: 3,
    title: "Display Acrylic Premium Bogor",
    category: "Retail",
    material: "Acrylic",
    service: "Laser CO2",
    image: "/images/displyacrylic.webp", // Diperbaiki
    description: "Display acrylic premium untuk toko retail di Bogor dengan engraving logo"
  },
  {
    id: 4,
    title: "Prototype Industri Tangerang",
    category: "Manufacturing",
    material: "PVC",
    service: "CNC Router",
    image: "/images/prototype.webp", // Diperbaiki
    description: "Prototype komponen industri dengan presisi tinggi menggunakan PVC untuk klien di Tangerang"
  }
];

export const FAQ = [
  {
    id: 1,
    question: "Berapa lama waktu pengerjaan laser cutting?",
    answer: "Waktu pengerjaan tergantung kompleksitas desain dan jumlah item. Untuk project standar, estimasi pengerjaan adalah 2-5 hari kerja setelah desain disetujui. Untuk project mendesak, kami menyediakan layanan express dengan tambahan biaya."
  },
  {
    id: 2,
    question: "Apakah saya perlu menyediakan file desain?",
    answer: "Ya, file desain sangat diperlukan. Kami menerima file dalam format .AI, .EPS, .SVG, .DXF, .PDF, atau .CDR. Jika Anda tidak memiliki desain, tim kami siap membantu membuatkan desain dasar sesuai kebutuhan Anda dengan biaya tambahan."
  },
  {
    id: 3,
    question: "Material apa saja yang bisa dipotong dengan laser?",
    answer: "Kami menyediakan berbagai pilihan material seperti akrilik, kayu (MDF, Plywood), metal (stainless steel, aluminium), karet, kain, kertas, dan PVC. Untuk informasi lengkap dan ketersediaan material terbaru, silakan hubungi tim kami."
  },
  {
    id: 4,
    question: "Bagaimana kualitas hasil potongan laser?",
    answer: "Kualitas hasil potongan laser kami sangat tinggi dengan presisi hingga 0.1mm. Tepi potongan sangat halus dan clean, minim sisa material. Untuk material tertentu seperti akrilik, hasil potongan bahkan tidak memerlukan finishing tambahan."
  },
  {
    id: 5,
    question: "Apakah menyediakan jasa konsultasi desain?",
    answer: "Tentu, kami menyediakan layanan konsultasi desain gratis untuk membantu Anda memahami kelayakan teknis dan optimalisasi desain sebelum proses produksi dimulai. Untuk jasa pembuatan desain khusus dari nol, terdapat biaya tambahan yang akan diinformasikan oleh tim kami."
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Cara Memilih Material yang Tepat untuk Laser Cutting di Jakarta",
    slug: "cara-memilih-material-laser-cutting-jakarta",
    excerpt: "Panduan lengkap memilih material yang sesuai untuk project laser cutting Anda di Jabodetabek",
    category: "Tutorial",
    readTime: "5 menit",
    publishDate: "2024-01-15",
    image: "/images/acp.webp" // Diperbaiki
  },
  {
    id: 2,
    title: "Perbedaan Utama Antara Laser CO2 dan Laser Fiber untuk Bisnis Anda",
    slug: "perbedaan-laser-co2-dan-laser-fiber",
    excerpt: "Analisis teknis dan aplikatif antara teknologi laser CO2 dan Fiber untuk kebutuhan bisnis Anda",
    category: "Technical",
    readTime: "7 menit",
    publishDate: "2024-01-10",
    image: "/images/laserfiber.webp" // Diperbaiki
  },
  {
    id: 3,
    title: "Tren Industri Kreatif Jakarta 2024: Peluang Laser Cutting",
    slug: "tren-industri-kreatif-jakarta-2024",
    excerpt: "Insight tentang perkembangan industri kreatif di Jakarta dan peluang bisnis laser cutting",
    category: "Industry",
    readTime: "6 menit",
    publishDate: "2024-01-05",
    image: "/images/cncrouter.webp" // Diperbaiki
  },
  {
    id: 4,
    title: "5 Kesalahan Umum Saat Memilih Jasa Laser Cutting di Jabodetabek",
    slug: "kesalahan-umum-memilih-jasa-laser-cutting-jabodetabek",
    excerpt: "Hindari kesalahan fatal yang bisa merugikan project Anda dengan tips dari ahli laser cutting Jabodetabek",
    category: "Tips",
    readTime: "8 menit",
    publishDate: "2024-01-20",
    image: "/images/co2.webp" // Diperbaiki
  },
  {
    id: 5,
    title: "Panduan Lengkap: Cara Menyiapkan File Desain untuk Laser Cutting Akurat",
    slug: "panduan-file-desain-laser-cutting-akurat",
    excerpt: "Tutorial step-by-step menyiapkan file desain yang optimal untuk hasil laser cutting terbaik dan akurat",
    category: "Tutorial",
    readTime: "10 menit",
    publishDate: "2024-01-18",
    image: "/images/engraving.webp" // Diperbaiki
  },
  {
    id: 6,
    title: "Analisis Biaya: Apakah Laser Cutting Lebih Efisien daripada Metode Tradisional?",
    slug: "analisis-biaya-laser-cutting-vs-tradisional",
    excerpt: "Breakdown biaya komprehensif membandingkan laser cutting dengan metode konvensional untuk berbagai material",
    category: "Analysis",
    readTime: "9 menit",
    publishDate: "2024-01-08",
    image: "/images/Metal.webp" // Diperbaiki
  },
  {
    id: 7,
    title: "Teknik Laser Engraving Tercepat untuk Personalisasi Massal",
    slug: "teknik-laser-engraving-personalisasi-massal",
    excerpt: "Eksplorasi teknik laser engraving cepat pada berbagai material untuk menciptakan branding produk yang memorable",
    category: "Technical",
    readTime: "12 menit",
    publishDate: "2024-01-14",
    image: "/images/galvo.webp" // Diperbaiki
  },
  {
    id: 8,
    title: "Studi Kasus: Bagaimana CNC Router Mengubah Industri Furniture Custom di Bekasi",
    slug: "cnc-router-industri-furniture-custom-bekasi",
    excerpt: "Analisis mendalam bagaimana teknologi CNC Router merevolusi industri furniture custom di Bekasi dan sekitarnya",
    category: "Case Study",
    readTime: "11 menit",
    publishDate: "2024-01-12",
    image: "/images/Ply Wood.webp" // Diperbaiki
  }
];