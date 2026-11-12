/* =============================================================
   PENGATURAN WEBSITE TPA DAARUL 'AULUUM
   Ubah data di bawah ini sebelum website dipublikasikan.
   Nomor WhatsApp gunakan format internasional tanpa + atau spasi.
   Contoh Indonesia: 6281234567890
   ============================================================= */
const TPA_CONFIG = {
  whatsapp: "081803377800", // GANTI dengan nomor WhatsApp admin TPA
  address: "Jl. AMD Cibentang RT.02/01. Kec.Ciseeng Kab.Bogor-Jawa Barat",
  hours: "17:00-21:00",
  phoneDisplay: "081803377800"
};

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('addressText').textContent = TPA_CONFIG.address;
document.getElementById('hoursText').textContent = TPA_CONFIG.hours;
document.getElementById('phoneText').textContent = TPA_CONFIG.phoneDisplay;

const registrationForm = document.getElementById('registrationForm');
const formFeedback = document.getElementById('formFeedback');
registrationForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formFeedback.textContent = '';
  if (!registrationForm.reportValidity()) return;

  const data = new FormData(registrationForm);
  const childName = String(data.get('childName') || '').trim();
  const age = String(data.get('age') || '').trim();
  const parentName = String(data.get('parentName') || '').trim();
  const parentPhone = String(data.get('parentPhone') || '').trim();
  const program = String(data.get('program') || '').trim();
  const notes = String(data.get('notes') || '').trim();

  const message = [
    'Assalamu’alaikum, Admin TPA Daarul ‘Auluum.',
    '',
    'Saya ingin mendaftarkan calon santri dengan data berikut:',
    `Nama anak: ${childName}`,
    `Usia: ${age} tahun`,
    `Nama orang tua/wali: ${parentName}`,
    `Nomor WhatsApp: ${parentPhone}`,
    `Program diminati: ${program}`,
    `Catatan: ${notes || '-'}`,
    '',
    'Mohon informasi mengenai jadwal, biaya (bila ada), dan proses pendaftaran selanjutnya.',
    'Terima kasih.'
  ].join('\n');

  const number = String(TPA_CONFIG.whatsapp || '').replace(/\D/g, '');
  if (!number || number === '6281234567890') {
    formFeedback.textContent = 'Admin: atur nomor WhatsApp TPA pada bagian TPA_CONFIG di file script.js sebelum menerima pendaftaran.';
    return;
  }
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});

const floatingWa = document.getElementById('floatingWa');
floatingWa?.addEventListener('click', (event) => {
  const number = String(TPA_CONFIG.whatsapp || '').replace(/\D/g, '');
  if (!number || number === '6281234567890') {
    event.preventDefault();
    document.getElementById('pendaftaran').scrollIntoView({behavior: 'smooth'});
    formFeedback.textContent = 'Admin: atur nomor WhatsApp TPA pada bagian TPA_CONFIG di file script.js.';
    return;
  }
  event.preventDefault();
  const message = 'Assalamu’alaikum, saya ingin bertanya tentang TPA Daarul ‘Auluum.';
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
