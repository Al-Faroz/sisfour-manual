---
title: Master Siswa
module: Master Data
status: active
---

# Master Siswa

Master Siswa menyimpan identitas dasar siswa. Halaman ini default ke Tahun Ajaran aktif dan status Aktif, sementara histori dapat dibaca melalui periode yang didukung.

## Identifier dan status

NISN bersifat unik. Status lifecycle yang digunakan antara lain Aktif, Lulus, Pindah, dan Keluar.

Nama dan kelas menjadi informasi utama di UI. NISN/NIK digunakan untuk pencarian, pencocokan, detail, import/export, dan administrasi.

## Menambah atau memperbarui data dasar

<div class="sf-flow">
  <div><strong>Pilih Tahun Ajaran yang tepat</strong>Untuk listing periodik, default adalah Tahun Ajaran aktif.</div>
  <div><strong>Cari siswa</strong>Pastikan record belum ada sebelum membuat data baru.</div>
  <div><strong>Isi identitas dasar</strong>Pastikan NISN tidak duplikat dan data penting benar.</div>
  <div><strong>Simpan</strong>Tunggu konfirmasi server.</div>
  <div><strong>Verifikasi context</strong>Periksa nama, kelas/status, dan identifier sekunder.</div>
</div>

## Jangan ubah lifecycle lewat Master Siswa

Perubahan berikut harus memakai modul Manajemen Siswa:

- Penempatan atau pindah kelas;
- Kenaikan Kelas;
- Mutasi Pindah/Keluar;
- Kelulusan;
- Restore lifecycle terminal.

Ini menjaga current membership dan riwayat tetap konsisten.

## Delete

Permanent delete dapat ditolak bila siswa sudah mempunyai keanggotaan kelas, riwayat, Presensi, Jurnal, Kartu, BK, Konseling, Prestasi, atau dependency lain.

<div class="sf-guide-links">
  <a href="../manajemen-siswa/"><strong>Lifecycle:</strong> Manajemen Siswa</a>
  <a href="./kelas.html"><strong>Terkait:</strong> Master Kelas</a>
</div>
