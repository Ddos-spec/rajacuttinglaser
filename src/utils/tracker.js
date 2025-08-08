import { N8N_CONFIG } from './constants.js';

// Fungsi untuk mengirim sinyal ke webhook N8N dan mengarahkan pengguna
export function trackAndRedirect(event, targetUrl) {
  // Mencegah aksi default dari link
  event.preventDefault();

  // Kirim permintaan ke webhook N8N (fire and forget)
  fetch(N8N_CONFIG.production)
    .catch(error => console.error('N8N webhook tracking failed:', error))
    .finally(() => {
      // Arahkan pengguna ke tujuan WhatsApp setelah fetch selesai (baik berhasil maupun gagal)
      window.open(targetUrl, '_blank');
    });
}

// Fungsi untuk menambahkan event listener ke semua link WhatsApp di halaman
export function addWhatsAppTrackers() {
  document.addEventListener('DOMContentLoaded', () => {
    const whatsappLinks = document.querySelectorAll('a[href*="api.whatsapp.com"]');
    
    whatsappLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        trackAndRedirect(event, link.href);
      });
    });
  });
}
