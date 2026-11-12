# Website TPA Daarul 'Auluum

Website profil TPA yang responsif untuk desktop dan ponsel. Dibuat menggunakan HTML, CSS, dan JavaScript tanpa backend.

## Cara membuka
1. Ekstrak folder `tpa-daarul-auluum`.
2. Klik dua kali `index.html` atau buka melalui browser.
3. Website akan berjalan secara lokal. Koneksi internet diperlukan untuk memuat font Google Fonts; tanpa internet, website tetap berfungsi dengan font pengganti.

## Pengaturan sebelum dipublikasikan
Buka `script.js`, lalu ubah objek `TPA_CONFIG` di bagian paling atas:

```js
const TPA_CONFIG = {
  whatsapp: "628xxxxxxxxxx", // nomor admin, format 62 tanpa +, spasi, atau tanda -
  address: "Alamat lengkap TPA",
  hours: "Hari dan jam layanan",
  phoneDisplay: "08xxxxxxxxxx"
};
```

PENTING: nomor `6281234567890` pada file bawaan hanya nomor contoh. Ganti dengan nomor WhatsApp admin TPA yang benar. Jika belum diganti, formulir tidak akan membuka WhatsApp agar tidak terkirim ke nomor yang keliru.

## Informasi yang sebaiknya diperbarui
- Alamat dan titik Google Maps (bagian kontak di `index.html`).
- Hari, jam belajar, dan jadwal kegiatan (bagian Jadwal di `index.html`).
- Program, rentang usia, biaya, dan persyaratan sesuai kebijakan TPA.
- Foto kegiatan dan logo resmi jika tersedia.

## Cara membuat website online
Unggah seluruh isi folder ini (index.html, styles.css, script.js, README.md) ke hosting statis seperti cPanel, Netlify, atau GitHub Pages. Pastikan ketiga file utama berada dalam folder/root yang sama.

## Catatan fitur
- Navigasi responsif dengan menu mobile.
- Katalog program pembelajaran.
- Informasi jadwal, FAQ, dan kontak.
- Form pendaftaran membuat pesan WhatsApp yang sudah terformat.
- Tidak menyimpan data pendaftar ke database. Pesan dikirim oleh pengguna melalui WhatsApp setelah tombol diklik.
