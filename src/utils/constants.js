// src/utils/constants.js

/**
 * =================================================================================
 * PUSAT DATA WEBSITE (SINGLE SOURCE OF TRUTH)
 * Ganti semua info di sini, dan seluruh website akan otomatis ter-update.
 * =================================================================================
 */

// 1. INFORMASI UTAMA WEBSITE & KONTAK
// =================================================================================
export const SITE_CONFIG = {
  name: "Raja Metal Cutting",
  title: "Raja Metal Cutting - Jasa Laser Cutting & CNC Profesional",
  description: "Jasa laser cutting dan CNC router presisi untuk metal, akrilik, kayu, GRC di Bintaro & BSD. Solusi untuk industri, arsitektur, dan proyek kustom.",
  whatsapp: "6285165693179", // <-- NOMOR WA DARI KODE LAMA
  email: "info@rajacutting.com", // <-- GANTI DENGAN EMAIL ASLI
  address: "Jalan Cendrawasih IV No. 1, Sawah Baru, Ciputat, Tangerang Selatan",
  url: "https://ddos-spec.github.io/rajacuttinglaser", // URL GitHub Pages
};


// 2. SEMUA LAYANAN / JASA YANG DITAWARKAN
// =================================================================================
export const SERVICES = [
  {
    id: "cnc-router",
    name: "Jasa CNC Router",
    slug: "jasa-cnc-router",
    description: "Layanan CNC Router profesional untuk cutting dan engraving kayu, MDF, akrilik, GRC, dan PVC dengan presisi tinggi untuk hasil yang sempurna.",
    keywords: "jasa cnc router, cnc router bintaro, cutting kayu, engraving mdf",
    image: `${SITE_CONFIG.url}/placeholder/service-1.jpg`, // Path absolut untuk GitHub Pages
    alt: "Mesin CNC Router sedang bekerja pada material kayu.",
  },
  {
    id: "laser-co2",
    name: "Jasa CNC Laser Cutting CO₂",
    slug: "jasa-cnc-laser-cutting-co2",
    description: "Cutting akrilik, kayu, dan material non-metal lainnya dengan presisi mikron. Hasil potongan yang halus dan bersih tanpa bekas bakar.",
    keywords: "laser cutting co2, potong akrilik, cutting kayu",
    image: `${SITE_CONFIG.url}/placeholder/service-2.jpg`, // Path absolut untuk GitHub Pages
    alt: "Sinar laser CO2 sedang memotong plat akrilik.",
  },
  {
    id: "galvo-fiber",
    name: "Jasa Laser Galvo & Fiber",
    slug: "jasa-galvo-30-watt",
    description: "Marking dan engraving super cepat pada material metal dan non-metal. Ideal untuk branding, penandaan part, dan produksi massal.",
    keywords: "laser marking, laser engraving, galvo fiber, marking metal",
    image: `${SITE_CONFIG.url}/placeholder/service-3.jpg`, // Path absolut untuk GitHub Pages
    alt: "Proses laser marking pada plat metal dengan mesin Galvo Fiber.",
  },
];


// 3. SEMUA MATERIAL YANG BISA DIKERJAKAN
// =================================================================================
export const MATERIALS = [
  {
    id: "acrylic",
    name: "Acrylic / Perspex",
    slug: "material/acrylic",
    title: "Laser Cutting Acrylic/Perspex",
    description: "Jasa laser cutting acrylic/perspex dengan hasil potongan yang bening seperti kristal. Sempurna untuk display, signage, dan dekorasi premium.",
    keywords: "laser cutting acrylic, potong acrylic, acrylic bening, signage akrilik",
    image: `${SITE_CONFIG.url}/placeholder/material-1.jpg`, // Path absolut untuk GitHub Pages
    alt: "Contoh hasil potongan laser pada material acrylic bening.",
    benefits: [
      "Edge Crystal Clear: Pinggiran potongan sangat halus dan bening seperti kaca.",
      "Presisi Mikron: Mampu memotong detail desain yang paling rumit sekalipun.",
      "Finishing Sempurna: Tidak memerlukan proses poles tambahan.",
      "Versatilitas Warna: Dapat diaplikasikan pada berbagai warna dan ketebalan akrilik."
    ],
    applications: [
      "Signage & Huruf Timbul",
      "Display Produk & POP",
      "Plakat & Penghargaan",
      "Partisi & Dekorasi Interior",
      "Merchandise & Cinderamata"
    ],
    properties: [
        "Transparansi Tinggi: Kejernihan menyerupai kaca.",
        "Ringan & Kuat: Lebih tahan benturan dibanding kaca dengan berat setengahnya.",
        "Tahan Cuaca: Tidak mudah menguning atau rapuh saat terkena sinar matahari.",
        "Isolator Listrik: Tidak menghantarkan listrik dengan baik."
    ]
  },
  {
    id: "acp",
    name: "Aluminium Composite Panel (ACP)",
    slug: "material/acp",
    title: "Cutting & Grooving ACP",
    description: "Jasa cutting dan grooving (tekuk) Aluminium Composite Panel (ACP) presisi menggunakan CNC Router untuk kebutuhan fasad bangunan, partisi, dan interior.",
    keywords: "cutting acp, grooving acp, tekuk acp, fasad acp",
    image: `${SITE_CONFIG.url}/placeholder/material-2.jpg`, // Path absolut untuk GitHub Pages
    alt: "Panel ACP yang sudah di-cutting dan siap untuk ditekuk.",
    benefits: [
      "Grooving Presisi: Sudut tekukan yang tajam dan konsisten.",
      "Cutting Cepat: Proses pengerjaan efisien untuk proyek volume besar.",
      "Fleksibilitas Desain: Mampu mengikuti pola desain fasad yang kompleks.",
      "Minim Goresan: Proses pengerjaan yang hati-hati menjaga permukaan ACP."
    ],
    applications: [
      "Fasad Gedung & Bangunan",
      "Pelapis Dinding Interior",
      "Signage & Billboard Besar",
      "Kitchen Set & Furniture",
      "Partisi Ruangan"
    ],
    properties: [
        "Ringan namun Kuat: Kombinasi aluminium dan material komposit.",
        "Tahan Cuaca: Cocok untuk aplikasi indoor dan outdoor.",
        "Mudah Dibentuk: Fleksibel untuk berbagai desain.",
        "Pilihan Warna Beragam: Tersedia dalam berbagai finishing dan warna."
    ]
  },
  {
    id: "grc",
    name: "Glass-fibre Reinforced Concrete (GRC)",
    slug: "material/grc",
    title: "Cutting GRC Krawangan",
    description: "Jasa cutting GRC untuk ornamen krawangan, fasad, dan panel dekoratif dengan motif custom. Hasil potongan rapi dan presisi sesuai desain.",
    keywords: "cutting grc, grc krawangan, panel grc, fasad grc",
    image: `${SITE_CONFIG.url}/placeholder/material-3.jpg`, // Path absolut untuk GitHub Pages
    alt: "Ornamen GRC krawangan hasil cutting CNC.",
    benefits: [
      "Motif Custom: Bebas menentukan desain ornamen sesuai keinginan.",
      "Tahan Cuaca: GRC adalah material yang kuat dan tahan lama untuk eksterior.",
      "Presisi Tinggi: Detail ornamen yang rumit dapat dipotong dengan akurat.",
      "Efisiensi Waktu: Proses CNC jauh lebih cepat dibanding metode manual."
    ],
    applications: [
      "Ornamen Krawangan Masjid & Bangunan",
      "Fasad Dekoratif",
      "Pagar & Partisi Eksterior",
      "Lisplang & Elemen Arsitektur",
      "Ventilasi Udara Estetis"
    ],
    properties: [
        "Kuat & Tahan Benturan: Lebih kuat dari beton biasa karena diperkuat serat kaca.",
        "Tahan Api & Air: Tidak mudah terbakar dan tahan terhadap kelembaban.",
        "Ringan: Lebih ringan dari beton precast konvensional.",
        "Fleksibel Dibentuk: Dapat dicetak menjadi berbagai bentuk ornamen kompleks."
    ]
  },
  {
    id: "plywood",
    name: "Plywood / Multiplex",
    slug: "material/ply-wood-multiplex",
    title: "Cutting Plywood & Multiplex",
    description: "Jasa cutting dan engraving Plywood/Multiplex untuk pembuatan furniture, dekorasi, maket, dan berbagai kerajinan kayu dengan hasil yang presisi.",
    keywords: "cutting plywood, potong multiplex, engraving kayu, furniture custom",
    image: `${SITE_CONFIG.url}/placeholder/material-4.jpg`, // Path absolut untuk GitHub Pages
    alt: "Pola rumit di-engraving pada selembar plywood.",
    benefits: [
      "Potongan Bersih: Meminimalisir serpihan pada pinggiran potongan.",
      "Engraving Detail: Mampu mengukir gambar dan tulisan dengan sangat detail.",
      "Efisiensi Material: Optimalisasi penempatan pola untuk mengurangi sisa bahan.",
      "Konsistensi Hasil: Hasil potongan identik untuk produksi massal."
    ],
    applications: [
      "Furniture & Kabinet",
      "Dekorasi Dinding & Wall Art",
      "Mainan Edukasi Anak",
      "Maket Arsitektur",
      "Kotak & Kemasan Kayu"
    ],
    properties: [
        "Stabilitas Dimensi: Tidak mudah melengkung atau menyusut.",
        "Kekuatan Merata: Kuat di semua arah karena lapisan kayu yang bersilangan.",
        "Permukaan Halus: Mudah untuk di-finishing (cat, vernis, HPL).",
        "Tersedia Berbagai Ketebalan: Fleksibel untuk berbagai kebutuhan proyek."
    ]
  },
  {
    id: "pvc",
    name: "PVC Board / Foam Board",
    slug: "material/pvc",
    title: "Cutting PVC Board",
    description: "Jasa cutting PVC Board / Foam Board yang ringan dan serbaguna. Ideal untuk pembuatan huruf timbul, partisi, dan display promosi dengan hasil yang rapi.",
    keywords: "cutting pvc board, potong pvc, huruf timbul pvc, display promosi",
    image: `${SITE_CONFIG.url}/placeholder/material-5.jpg`, // Path absolut untuk GitHub Pages
    alt: "Huruf timbul dari bahan PVC Board putih.",
    benefits: [
      "Ringan & Kuat: Material mudah dipindah dan cukup tahan lama.",
      "Hasil Rapi: Potongan bersih tanpa lelehan di pinggiran.",
      "Tahan Air: Cocok untuk penggunaan di area yang lembab.",
      "Mudah Dicat: Permukaan halus yang siap untuk proses finishing cat."
    ],
    applications: [
      "Huruf Timbul & Signage Indoor",
      "Maket & Diorama",
      "Display Pameran (Booth)",
      "Partisi Non-struktural",
      "Kerajinan Tangan & Prototyping"
    ],
    properties: [
        "Sangat Ringan: Mudah diangkat dan dipasang.",
        "Anti Rayap & Jamur: Tahan terhadap serangan hama dan kelembaban.",
        "Tidak Merambatkan Api: Material memiliki sifat 'self-extinguishing'.",
        "Kedap Suara: Mampu meredam suara dengan cukup baik."
    ]
  },
  {
    id: "stainless",
    name: "Stainless Steel & Metal",
    slug: "material/stainless-steel-metal",
    title: "Laser Cutting Stainless Steel & Metal",
    description: "Jasa laser cutting plat metal seperti Stainless Steel, Mild Steel, dan Galvanis. Presisi tinggi untuk kebutuhan industri, otomotif, dan konstruksi.",
    keywords: "laser cutting metal, potong stainless, plat besi, cutting galvanis",
    image: `${SITE_CONFIG.url}/placeholder/material-6.jpg`, // Path absolut untuk GitHub Pages
    alt: "Proses laser cutting pada plat stainless steel tebal.",
    benefits: [
      "Presisi Sangat Tinggi: Toleransi ketat untuk part-part kritikal.",
      "Potongan Halus: Hasil bersih dengan minim zona terpengaruh panas (HAZ).",
      "Kecepatan Tinggi: Proses pengerjaan cepat untuk berbagai ketebalan.",
      "Desain Kompleks: Mampu memotong bentuk-bentuk yang sangat rumit."
    ],
    applications: [
      "Komponen Mesin & Industri",
      "Bracket & Flange Custom",
      "Pagar & Railing Modern",
      "Fasad & Ornamen Metal",
      "Peralatan Dapur & Medis"
    ],
    properties: [
      "Tahan Karat: Sifat utama dari stainless steel.",
      "Sangat Kuat & Keras: Tahan terhadap deformasi dan aus.",
      "Tahan Suhu Tinggi: Tidak mudah rusak oleh panas.",
      "Tampilan Mewah: Memberikan kesan bersih, modern, dan profesional."
    ]
  }
];

// 4. KONFIGURASI NAVIGASI MENU
// =================================================================================
export const NAVIGATION = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/#layanan" },
  { name: "Material", href: "/#material" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Kontak", href: "/kontak" },
];

// 5. LINK MEDIA SOSIAL
// =================================================================================
export const SOCIAL_MEDIA = [
  { name: "Instagram", url: "https://instagram.com/rajacutting", icon: "instagram" },
  { name: "Facebook", url: "https://facebook.com/rajacutting", icon: "facebook" },
  { name: "TikTok", url: "https://tiktok.com/@rajacutting", icon: "tiktok" }
];