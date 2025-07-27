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
  
  // Hero section untuk halaman utama
  hero: {
    title: "Jasa Laser Cutting & CNC Router Profesional",
    subtitle: "Presisi Tinggi, Hasil Sempurna",
    text: "Spesialis laser cutting dan CNC router untuk berbagai material dengan teknologi terkini. Melayani kebutuhan industri, arsitektur, dan proyek kreatif.",
    image: "https://ddos-spec.github.io/rajacuttinglaser/placeholder/hero-image.jpg",
    imageAlt: "Mesin laser cutting modern di workshop Raja Metal Cutting",
    badge: {
      title: "10+ Tahun",
      subtitle: "Pengalaman"
    }
  },
  
  // Call-to-action buttons
  cta: {
    label1: "Konsultasi Gratis",
    link1: "https://wa.me/6285165693179?text=Halo%20Raja%20Metal%20Cutting,%20saya%20ingin%20konsultasi",
    label2: "Lihat Portfolio",
    link2: "portfolio"
  },
  
  // Why choose us section
  why: {
    title: "Mengapa Memilih Kami",
    subtitle: "Keunggulan layanan Raja Metal Cutting yang membedakan kami dari kompetitor",
    items: [
      {
        title: "Presisi Tinggi",
        text: "Hasil cutting dengan akurasi hingga 0.01mm untuk keperluan yang membutuhkan ketepatan maksimal",
        iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      },
      {
        title: "Teknologi Terkini",
        text: "Menggunakan mesin laser cutting dan CNC router generasi terbaru dengan kemampuan superior",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "Pengalaman 10+ Tahun",
        text: "Didukung tim teknisi berpengalaman yang telah menangani ribuan proyek kompleks",
        iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Layanan All-in-One",
        text: "Dari konsultasi desain hingga finishing dan pengiriman, semua dalam satu atap",
        iconPath: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      }
    ]
  }
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
      imageHero: `${SITE_CONFIG.url}/placeholder/service-1-hero.jpg`,
    imageHeroAlt: "Mesin CNC Router presisi tinggi sedang memotong material kayu",
    ctaButton1: "Konsultasi Gratis",
    ctaButton2: "Lihat Portfolio",
    ctaText: "Dapatkan penawaran terbaik untuk kebutuhan CNC Router Anda. Konsultasikan proyek Anda dengan tim ahli kami sekarang.",
    benefitsIntro: "Teknologi CNC Router menawarkan presisi dan fleksibilitas untuk berbagai material seperti kayu, MDF, akrilik, dan PVC.",
    benefits: [
      {
        title: "Presisi Tinggi",
        text: "Akurasi cutting hingga 0.01mm untuk detail terkecil sekalipun",
        iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      },
      {
        title: "Cutting 3D",
        text: "Kemampuan membuat relief dan bentuk 3D pada material",
        iconPath: "M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      },
      {
        title: "Multi Material",
        text: "Dapat mengerjakan kayu, MDF, akrilik, GRC, dan PVC dalam satu mesin",
        iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      }
    ],
    applicationsIntro: "CNC Router dapat diaplikasikan untuk berbagai kebutuhan industri dan kreatif dengan hasil yang presisi.",
    applications: [
      {
        title: "Furniture & Interior",
        text: "Pembuatan furniture custom, kitchen set, dan elemen interior",
        iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      },
      {
        title: "Signage & Display",
        text: "Huruf timbul, logo, dan display produk dengan detail sempurna",
        iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      },
      {
        title: "Maket & Arsitektur",
        text: "Pembuatan maket gedung, miniatur, dan elemen arsitektur",
        iconPath: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      },
      {
        title: "Kerajinan & Souvenir",
        text: "Cinderamata, hiasan, dan produk kreatif custom",
        iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      }
    ],
    galleryIntro: "Beberapa contoh hasil pengerjaan CNC Router yang telah kami selesaikan untuk berbagai klien.",
    gallery: [
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-cnc-1.jpg`,
        alt: "Furniture custom hasil CNC Router",
        title: "Furniture Custom",
        description: "Cutting dan engraving pada kayu jati dengan detail tinggi",
        src: `${SITE_CONFIG.url}/placeholder/gallery-cnc-1.jpg`,
        caption: "Cutting dan engraving pada kayu jati dengan detail tinggi"
      },
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-cnc-2.jpg`,
        alt: "Panel GRC krawangan hasil CNC Router",
        title: "Panel GRC Krawangan",
        description: "Cutting GRC 8mm untuk fasad bangunan",
        src: `${SITE_CONFIG.url}/placeholder/gallery-cnc-2.jpg`,
        caption: "Cutting GRC 8mm untuk fasad bangunan"
      },
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-cnc-3.jpg`,
        alt: "Maket arsitektur dari MDF hasil CNC Router",
        title: "Maket Arsitektur",
        description: "Cutting MDF 3mm untuk maket gedung perkantoran",
        src: `${SITE_CONFIG.url}/placeholder/gallery-cnc-3.jpg`,
        caption: "Cutting MDF 3mm untuk maket gedung perkantoran"
      }
    ],
    faqIntro: "Jawaban untuk pertanyaan umum tentang jasa CNC Router yang kami sediakan.",
    faq: [
      {
        question: "Berapa ketebalan maksimal material yang bisa dipotong dengan CNC Router?",
        answer: "Untuk kayu dan MDF, kami dapat memotong hingga ketebalan 50mm. Untuk akrilik, ketebalan maksimal adalah 30mm, dan untuk GRC sekitar 20mm. Ketebalan optimal untuk hasil terbaik adalah 3-25mm tergantung jenis material."
      },
      {
        question: "Apakah CNC Router bisa membuat relief 3D?",
        answer: "Ya, CNC Router kami dilengkapi dengan kemampuan 3D carving yang dapat membuat relief dan bentuk 3D pada material seperti kayu, MDF, dan akrilik. Ideal untuk membuat logo timbul, ornamen dekoratif, dan detail artistik pada furniture."
      },
      {
        question: "Berapa lama waktu pengerjaan untuk CNC Router?",
        answer: "Waktu pengerjaan bervariasi tergantung kompleksitas desain, ketebalan material, dan jumlah pesanan. Untuk proyek sederhana, kami bisa menyelesaikan dalam 1-3 hari kerja. Untuk proyek besar atau kompleks, mungkin membutuhkan 4-10 hari kerja."
      },
      {
        question: "Apakah saya perlu menyediakan file desain sendiri?",
        answer: "Anda bisa menyediakan file desain sendiri dalam format AI, CDR, DXF, atau PDF. Jika Anda belum memiliki desain, tim desain kami siap membantu membuat desain sesuai kebutuhan Anda dengan biaya tambahan yang terjangkau."
      }
    ],
  },
  {
    id: "laser-co2",
    name: "Jasa CNC Laser Cutting CO₂",
    slug: "jasa-cnc-laser-cutting-co2",
    description: "Cutting akrilik, kayu, dan material non-metal lainnya dengan presisi mikron. Hasil potongan yang halus dan bersih tanpa bekas bakar.",
    keywords: "laser cutting co2, potong akrilik, cutting kayu",
    image: `${SITE_CONFIG.url}/placeholder/service-2.jpg`, // Path absolut untuk GitHub Pages
    alt: "Sinar laser CO2 sedang memotong plat akrilik.",
    imageHero: `${SITE_CONFIG.url}/placeholder/service-2-hero.jpg`,
    imageHeroAlt: "Mesin laser CO2 sedang memotong material akrilik dengan presisi tinggi",
    ctaButton1: "Konsultasi Gratis",
    ctaButton2: "Lihat Portfolio",
    ctaText: "Dapatkan penawaran terbaik untuk kebutuhan laser cutting CO₂ Anda. Konsultasikan proyek Anda dengan tim ahli kami sekarang.",
    benefitsIntro: "Teknologi laser CO₂ menawarkan presisi dan kualitas terbaik untuk material non-metal seperti akrilik, kayu, dan MDF.",
    benefits: [
      {
        title: "Presisi Mikron",
        text: "Akurasi cutting hingga 0.01mm untuk detail terkecil sekalipun",
        iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      },
      {
        title: "Hasil Bersih",
        text: "Potongan halus tanpa bekas bakar dan minim serpihan",
        iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      },
      {
        title: "Material Beragam",
        text: "Cocok untuk akrilik, kayu, MDF, kulit, kain, dan material non-metal lainnya",
        iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      }
    ],
    applicationsIntro: "Teknologi laser CO₂ dapat diaplikasikan untuk berbagai kebutuhan industri dan kreatif dengan hasil yang presisi.",
    applications: [
      {
        title: "Signage & Display",
        text: "Huruf timbul, logo, dan display produk dengan detail sempurna",
        iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      },
      {
        title: "Arsitektur & Interior",
        text: "Maket, partisi, dan elemen dekoratif untuk ruangan",
        iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      },
      {
        title: "Kerajinan & Souvenir",
        text: "Cinderamata, hiasan, dan produk kreatif custom",
        iconPath: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      },
      {
        title: "Industri & Manufaktur",
        text: "Komponen presisi, template, dan prototipe produk",
        iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      }
    ],
    galleryIntro: "Beberapa contoh hasil pengerjaan laser cutting CO₂ yang telah kami selesaikan untuk berbagai klien.",
    gallery: [
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-co2-1.jpg`,
        alt: "Signage akrilik hasil laser cutting CO₂",
        title: "Signage Akrilik",
        description: "Cutting akrilik bening 3mm dengan hasil edge crystal clear",
        src: `${SITE_CONFIG.url}/placeholder/gallery-co2-1.jpg`,
        caption: "Cutting akrilik bening 3mm dengan hasil edge crystal clear"
      },
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-co2-2.jpg`,
        alt: "Ornamen kayu hasil laser cutting dan engraving",
        title: "Ornamen Kayu",
        description: "Cutting dan engraving pada kayu jati dengan detail tinggi",
        src: `${SITE_CONFIG.url}/placeholder/gallery-co2-2.jpg`,
        caption: "Cutting dan engraving pada kayu jati dengan detail tinggi"
      },
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-co2-3.jpg`,
        alt: "Maket arsitektur dari MDF hasil laser cutting",
        title: "Maket Arsitektur",
        description: "Cutting MDF 3mm untuk maket gedung perkantoran",
        src: `${SITE_CONFIG.url}/placeholder/gallery-co2-3.jpg`,
        caption: "Cutting MDF 3mm untuk maket gedung perkantoran"
      }
    ],
    faqIntro: "Jawaban untuk pertanyaan umum tentang jasa laser cutting CO₂ yang kami sediakan.",
    faq: [
      {
        question: "Berapa ketebalan maksimal material yang bisa dipotong dengan laser CO₂?",
        answer: "Untuk akrilik, kami dapat memotong hingga ketebalan 20mm dengan hasil edge yang bening. Untuk kayu, ketebalan maksimal adalah 12mm, dan untuk MDF sekitar 10mm. Ketebalan optimal untuk hasil terbaik adalah 3-8mm."
      },
      {
        question: "Apakah laser CO₂ bisa memotong material metal?",
        answer: "Laser CO₂ tidak direkomendasikan untuk memotong material metal. Untuk kebutuhan cutting metal seperti stainless steel, mild steel, atau aluminium, kami menyarankan menggunakan jasa laser cutting fiber yang memang didesain khusus untuk material metal."
      },
      {
        question: "Berapa lama waktu pengerjaan untuk laser cutting CO₂?",
        answer: "Waktu pengerjaan bervariasi tergantung kompleksitas desain, ketebalan material, dan jumlah pesanan. Untuk proyek sederhana, kami bisa menyelesaikan dalam 1-2 hari kerja. Untuk proyek besar atau kompleks, mungkin membutuhkan 3-7 hari kerja."
      },
      {
        question: "Apakah saya perlu menyediakan file desain sendiri?",
        answer: "Anda bisa menyediakan file desain sendiri dalam format AI, CDR, DXF, atau PDF. Jika Anda belum memiliki desain, tim desain kami siap membantu membuat desain sesuai kebutuhan Anda dengan biaya tambahan yang terjangkau."
      }
    ],
  },
  {
    id: "galvo-30-watt", // <-- GANTI DARI 'galvo-fiber'
    name: "Jasa Laser Galvo & Fiber",
    slug: "jasa-galvo-30-watt",
    description: "Marking dan engraving super cepat pada material metal dan non-metal. Ideal untuk branding, penandaan part, dan produksi massal.",
    keywords: "laser marking, laser engraving, galvo fiber, marking metal",
    image: `${SITE_CONFIG.url}/placeholder/service-3.jpg`, // Path absolut untuk GitHub Pages
    alt: "Proses laser marking pada plat metal dengan mesin Galvo Fiber.",
    imageHero: `${SITE_CONFIG.url}/placeholder/service-3-hero.jpg`,
    imageHeroAlt: "Mesin laser galvo fiber sedang melakukan marking pada komponen metal",
    ctaButton1: "Konsultasi Gratis",
    ctaButton2: "Lihat Portfolio",
    ctaText: "Dapatkan penawaran terbaik untuk kebutuhan laser marking dan engraving Anda. Konsultasikan proyek Anda dengan tim ahli kami sekarang.",
    benefitsIntro: "Teknologi laser galvo dan fiber menawarkan kecepatan dan presisi tinggi untuk marking dan engraving pada berbagai material.",
    benefits: [
      {
        title: "Kecepatan Tinggi",
        text: "Proses marking hingga 10x lebih cepat dibanding teknologi konvensional",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "Permanen & Tahan Lama",
        text: "Hasil marking yang tidak akan pudar atau terhapus seiring waktu",
        iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      },
      {
        title: "Multi Material",
        text: "Dapat diaplikasikan pada metal, plastik, dan berbagai material lainnya",
        iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      }
    ],
    applicationsIntro: "Teknologi laser galvo dan fiber dapat diaplikasikan untuk berbagai kebutuhan industri dan produksi dengan hasil yang presisi.",
    applications: [
      {
        title: "Penandaan Part",
        text: "Serial number, barcode, dan kode identifikasi pada komponen",
        iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      },
      {
        title: "Branding Produk",
        text: "Logo dan informasi produk pada kemasan atau produk jadi",
        iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      },
      {
        title: "Dekorasi & Personalisasi",
        text: "Engraving gambar dan teks untuk souvenir dan hadiah",
        iconPath: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      },
      {
        title: "Industri Elektronik",
        text: "Marking PCB dan komponen elektronik dengan presisi tinggi",
        iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      }
    ],
    galleryIntro: "Beberapa contoh hasil pengerjaan laser galvo dan fiber yang telah kami selesaikan untuk berbagai klien.",
    gallery: [
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-galvo-1.jpg`,
        alt: "Marking serial number pada komponen metal",
        title: "Serial Number",
        description: "Marking kode dan serial number pada komponen industri",
        src: `${SITE_CONFIG.url}/placeholder/gallery-galvo-1.jpg`,
        caption: "Marking kode dan serial number pada komponen industri"
      },
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-galvo-2.jpg`,
        alt: "Logo brand pada produk metal",
        title: "Branding Metal",
        description: "Engraving logo perusahaan pada produk stainless steel",
        src: `${SITE_CONFIG.url}/placeholder/gallery-galvo-2.jpg`,
        caption: "Engraving logo perusahaan pada produk stainless steel"
      },
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-galvo-3.jpg`,
        alt: "Engraving dekoratif pada tumbler",
        title: "Personalisasi Produk",
        description: "Engraving nama dan desain pada tumbler stainless steel",
        src: `${SITE_CONFIG.url}/placeholder/gallery-galvo-3.jpg`,
        caption: "Engraving nama dan desain pada tumbler stainless steel"
      }
    ],
    faqIntro: "Jawaban untuk pertanyaan umum tentang jasa laser galvo dan fiber yang kami sediakan.",
    faq: [
      {
        question: "Apa perbedaan laser galvo dengan laser cutting?",
        answer: "Laser galvo dioptimalkan untuk marking dan engraving permukaan, bukan untuk memotong material. Teknologi ini menggunakan cermin galvanometer yang bergerak sangat cepat untuk mengarahkan sinar laser, sehingga proses marking bisa dilakukan dalam hitungan detik."
      },
      {
        question: "Apakah hasil marking dengan laser galvo bisa terhapus?",
        answer: "Tidak, hasil marking dengan laser galvo bersifat permanen dan tidak akan terhapus oleh gesekan, air, atau bahan kimia. Ini karena laser mengubah struktur permukaan material, bukan hanya menambahkan lapisan tinta seperti pada printing konvensional."
      },
      {
        question: "Material apa saja yang bisa di-marking dengan laser galvo?",
        answer: "Laser galvo fiber dapat digunakan untuk marking pada hampir semua jenis metal seperti stainless steel, aluminium, dan kuningan. Selain itu, dengan pengaturan yang tepat, juga bisa digunakan untuk marking pada plastik, akrilik, dan beberapa jenis keramik."
      },
      {
        question: "Berapa lama waktu pengerjaan untuk laser galvo?",
        answer: "Proses marking dengan laser galvo sangat cepat, biasanya hanya membutuhkan waktu beberapa detik hingga menit per item tergantung kompleksitas desain. Untuk produksi massal, kami dapat memproses ratusan hingga ribuan item per hari."
      }
    ],
  },
  {
    id: "fiber-metal",
    name: "Jasa Laser Cutting Fiber Metal",
    slug: "jasa-laser-cutting-fiber-metal",
    description: "Cutting presisi untuk plat metal seperti Stainless Steel, Mild Steel, dan Galvanis. Cepat dan akurat untuk kebutuhan industri, otomotif, dan konstruksi.",
    keywords: "laser cutting metal, potong stainless, plat besi, cutting galvanis, fiber laser",
    image: `${SITE_CONFIG.url}/placeholder/service-4.jpg`,
    alt: "Mesin laser fiber memotong plat metal dengan presisi tinggi.",
    imageHero: `${SITE_CONFIG.url}/placeholder/service-4-hero.jpg`,
    imageHeroAlt: "Mesin laser fiber sedang memotong plat stainless steel dengan presisi tinggi",
    ctaButton1: "Konsultasi Gratis",
    ctaButton2: "Lihat Portfolio",
    ctaText: "Dapatkan penawaran terbaik untuk kebutuhan laser cutting metal Anda. Konsultasikan proyek Anda dengan tim ahli kami sekarang.",
    benefitsIntro: "Teknologi laser fiber menawarkan keunggulan dalam pemotongan material metal dengan presisi dan kecepatan tinggi.",
    benefits: [
      {
        title: "Presisi Tinggi",
        text: "Hasil potong dengan toleransi hingga 0.1mm untuk detail sempurna",
        iconPath: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      },
      {
        title: "Kecepatan Produksi",
        text: "Proses cutting yang cepat untuk efisiensi waktu dan biaya",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "Hasil Rapih",
        text: "Tepi potong yang bersih tanpa perlu proses finishing tambahan",
        iconPath: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      },
      {
        title: "Multi Material Metal",
        text: "Dapat memotong stainless steel, aluminium, brass, dan mild steel",
        iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      }
    ],
    applicationsIntro: "Teknologi laser fiber cutting dapat diaplikasikan untuk berbagai kebutuhan industri dan manufaktur dengan hasil yang presisi.",
    applications: [
      {
        title: "Komponen Mesin",
        text: "Pembuatan part dan komponen mesin dengan presisi tinggi",
        iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      },
      {
        title: "Furniture Metal",
        text: "Pemotongan komponen untuk furniture dan dekorasi interior",
        iconPath: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      },
      {
        title: "Signage & Display",
        text: "Pembuatan huruf timbul, logo, dan display untuk toko",
        iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
      },
      {
        title: "Otomotif & Aerospace",
        text: "Komponen presisi untuk industri otomotif dan aerospace",
        iconPath: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      }
    ],
    galleryIntro: "Beberapa contoh hasil pengerjaan laser cutting fiber metal yang telah kami selesaikan untuk berbagai klien.",
    gallery: [
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-fiber-1.jpg`,
        alt: "Komponen mesin dari stainless steel",
        title: "Komponen Mesin",
        description: "Cutting part mesin dari stainless steel 3mm",
        src: `${SITE_CONFIG.url}/placeholder/gallery-fiber-1.jpg`,
        caption: "Cutting part mesin dari stainless steel 3mm"
      },
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-fiber-2.jpg`,
        alt: "Logo timbul dari aluminium",
        title: "Signage Metal",
        description: "Logo timbul dari aluminium 2mm untuk branding perusahaan",
        src: `${SITE_CONFIG.url}/placeholder/gallery-fiber-2.jpg`,
        caption: "Logo timbul dari aluminium 2mm untuk branding perusahaan"
      },
      {
        image: `${SITE_CONFIG.url}/placeholder/gallery-fiber-3.jpg`,
        alt: "Komponen furniture dari mild steel",
        title: "Furniture Metal",
        description: "Komponen untuk meja dan kursi dari mild steel 5mm",
        src: `${SITE_CONFIG.url}/placeholder/gallery-fiber-3.jpg`,
        caption: "Komponen untuk meja dan kursi dari mild steel 5mm"
      }
    ],
    faqIntro: "Jawaban untuk pertanyaan umum tentang jasa laser cutting fiber metal yang kami sediakan.",
    faq: [
      {
        question: "Berapa ketebalan maksimal yang bisa dipotong dengan laser fiber?",
        answer: "Mesin laser fiber kami dapat memotong stainless steel hingga ketebalan 8mm, mild steel hingga 12mm, dan aluminium hingga 10mm dengan hasil yang presisi. Ketebalan optimal untuk hasil terbaik adalah 0.5mm hingga 6mm."
      },
      {
        question: "Apakah laser fiber bisa memotong semua jenis metal?",
        answer: "Laser fiber sangat efektif untuk memotong stainless steel, mild steel, aluminium, brass, copper, dan galvanized steel. Namun, untuk material seperti titanium dan beberapa paduan khusus mungkin memerlukan pengaturan khusus atau metode cutting lain."
      },
      {
        question: "Berapa ukuran material maksimal yang bisa diproses?",
        answer: "Mesin laser fiber kami dapat memproses material dengan ukuran maksimal 1500mm x 3000mm. Untuk ukuran yang lebih besar, kami dapat melakukan pemotongan secara bertahap dan kemudian menggabungkannya."
      },
      {
        question: "Berapa lama waktu pengerjaan untuk laser cutting fiber?",
        answer: "Waktu pengerjaan bervariasi tergantung kompleksitas desain, ketebalan material, dan jumlah item. Untuk proyek sederhana, kami dapat menyelesaikannya dalam 1-2 hari kerja. Untuk proyek besar atau kompleks, mungkin membutuhkan waktu 3-7 hari kerja."
      }
    ],
  }
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
  { name: "Beranda", href: "" },
  { name: "Layanan", href: "layanan" },
  { name: "Material", href: "material" },
  { name: "Blog", href: "blog" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Kontak", href: "kontak" },
];

// 5. LINK MEDIA SOSIAL
// =================================================================================
export const SOCIAL_MEDIA = [
  { name: "Instagram", url: "https://instagram.com/rajacutting", icon: "instagram" },
  { name: "Facebook", url: "https://facebook.com/rajacutting", icon: "facebook" },
  { name: "TikTok", url: "https://tiktok.com/@rajacutting", icon: "tiktok" }
];

// 6. BLOG POSTS
// =================================================================================
export const BLOG_POSTS = [
  {
    id: "akrilik-vs-mdf",
    title: "Akrilik vs MDF: Material Mana yang Terbaik untuk Proyek Anda?",
    slug: "akrilik-vs-mdf-material-terbaik",
    url: "blog/akrilik-vs-mdf-material-terbaik",
    excerpt: "Perbandingan lengkap antara akrilik dan MDF untuk laser cutting. Pelajari kelebihan, kekurangan, dan aplikasi terbaik masing-masing material.",
    date: "23 Juli 2024",
    readTime: "7",
    category: "material",
    categoryLabel: "Material Guide",
    image: `${SITE_CONFIG.url}/placeholder/blog-1.jpg`,
    alt: "Perbandingan material akrilik dan MDF untuk laser cutting"
  },
  {
    id: "panduan-laser-cutting",
    title: "Panduan Lengkap Laser Cutting untuk Pemula",
    slug: "panduan-lengkap-laser-cutting",
    url: "blog/panduan-lengkap-laser-cutting",
    excerpt: "Semua yang perlu Anda ketahui tentang teknologi laser cutting, dari prinsip kerja hingga tips memilih jasa yang tepat untuk proyek Anda.",
    date: "15 Juli 2024",
    readTime: "10",
    category: "tutorial",
    categoryLabel: "Tutorial",
    image: `${SITE_CONFIG.url}/placeholder/blog-2.jpg`,
    alt: "Ilustrasi proses laser cutting untuk pemula"
  },
  {
    id: "tren-desain-2024",
    title: "Tren Desain Laser Cutting 2024 yang Wajib Anda Ketahui",
    slug: "tren-desain-laser-cutting-2024",
    url: "blog/tren-desain-laser-cutting-2024",
    excerpt: "Eksplorasi tren terbaru dalam desain laser cutting tahun 2024, dari pola geometris kompleks hingga teknik hybrid yang menggabungkan beberapa material.",
    date: "5 Juli 2024",
    readTime: "8",
    category: "design",
    categoryLabel: "Design Trends",
    image: `${SITE_CONFIG.url}/placeholder/blog-3.jpg`,
    alt: "Contoh tren desain laser cutting terbaru tahun 2024"
  }
];

// 7. KATEGORI BLOG
// =================================================================================
export const NAV_CATEGORIES = [
  { id: "all", label: "Semua Artikel" },
  { id: "tutorial", label: "Tutorial" },
  { id: "material", label: "Material Guide" },
  { id: "design", label: "Design Trends" },
  { id: "business", label: "Business Tips" }
];

// 8. PROJECTS/PORTFOLIO
// =================================================================================
export const PROJECTS = [
  {
    id: "project-1",
    title: "Signage Akrilik untuk Bank BCA",
    caption: "Cutting akrilik presisi untuk signage corporate",
    image: `${SITE_CONFIG.url}/placeholder/project-1.jpg`,
    alt: "Signage akrilik BCA hasil laser cutting"
  },
  {
    id: "project-2",
    title: "Ornamen GRC Masjid Al-Hikmah",
    caption: "Cutting GRC krawangan untuk fasad masjid",
    image: `${SITE_CONFIG.url}/placeholder/project-2.jpg`,
    alt: "Ornamen GRC krawangan masjid hasil cutting CNC"
  },
  {
    id: "project-3",
    title: "Komponen Metal untuk Industri Otomotif",
    caption: "Laser cutting presisi untuk part metal",
    image: `${SITE_CONFIG.url}/placeholder/project-3.jpg`,
    alt: "Komponen metal hasil laser cutting untuk industri otomotif"
  }
];