---
title: Tahun Ajaran dan Semester
module: Master Data
status: active
---

# Tahun Ajaran dan Semester

Tahun Ajaran mengontrol context periodik SisFour. Hanya satu periode operasional yang aktif.

Format periode menggunakan tahun akademik dan semester Ganjil atau Genap.

## Ganjil ke Genap pada tahun yang sama

Gunakan workflow **Siapkan Genap**.

<div class="sf-flow">
  <div><strong>Mulai dari Ganjil aktif</strong>Server melakukan precheck terhadap periode yang sedang aktif.</div>
  <div><strong>Buat baseline Genap</strong>Kelas, anggota siswa aktif, Mapping Wali, dan Jadwal disalin sebagai baseline.</div>
  <div><strong>Tutup histori Ganjil</strong>History periode lama dipertahankan.</div>
  <div><strong>Aktifkan Genap</strong>Ganjil dinonaktifkan dan Genap menjadi periode operasional aktif.</div>
  <div><strong>Verifikasi</strong>Periksa kelas, anggota, Wali, dan Jadwal pada semester baru.</div>
</div>

Presensi dan Jurnal historis **tidak disalin** ke semester baru.

## Genap ke Ganjil tahun berikutnya

Jangan memakai Siapkan Genap. Gunakan workflow Kenaikan Kelas dan Kelulusan menuju Tahun Ajaran berikutnya.

## Yang harus dihindari

- membuat Genap tahun yang sama secara manual ketika Ganjil aktif;
- mengaktifkan beberapa periode sekaligus;
- menyalin histori Presensi/Jurnal sebagai data periode baru.

<div class="sf-guide-links">
  <a href="../manajemen-siswa/kenaikan-kelas.html"><strong>Tahun berikutnya:</strong> Kenaikan Kelas</a>
  <a href="../manajemen-siswa/kelulusan.html"><strong>Tingkat akhir:</strong> Kelulusan</a>
</div>
