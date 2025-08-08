import { N8N_CONFIG } from './constants.js';

// Fungsi untuk mengirim sinyal ke webhook N8N dan mengarahkan pengguna
export function trackAndRedirect(event, targetUrl) {
  // Mencegah aksi default dari link
  event.preventDefault();

  // Ekstrak informasi dari URL WhatsApp
  const urlParams = new URLSearchParams(new URL(targetUrl).search);
  const phoneNumber = new URL(targetUrl).pathname.split('/').pop() || 'unknown';
  const message = urlParams.get('text') || 'Klik tombol WhatsApp dari website';

  // Data yang akan dikirim ke N8N webhook
  const webhookData = {
    body: {
      message: message,
      from: phoneNumber,
      timestamp: new Date().toISOString(),
      source: 'website',
      page: window.location.pathname,
      referrer: document.referrer || 'direct'
    }
  };

  // Kirim permintaan ke webhook N8N dengan data yang sesuai
  fetch(N8N_CONFIG.production, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookData)
  })
    .then(response => {
      if (response.ok) {
        console.log('N8N webhook tracking berhasil');
      } else {
        console.warn('N8N webhook response tidak OK:', response.status);
      }
    })
    .catch(error => {
      console.error('N8N webhook tracking gagal:', error);
    })
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

    console.log(`WhatsApp tracker ditambahkan ke ${whatsappLinks.length} link`);
  });
}

// Fungsi alternatif untuk tracking manual (jika diperlukan)
export function trackWhatsAppClick(customMessage = '', customPhone = '') {
  const webhookData = {
    body: {
      message: customMessage || 'Manual WhatsApp click tracking',
      from: customPhone || 'manual',
      timestamp: new Date().toISOString(),
      source: 'website_manual',
      page: window.location.pathname,
      referrer: document.referrer || 'direct'
    }
  };

  return fetch(N8N_CONFIG.production, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookData)
  });
}

