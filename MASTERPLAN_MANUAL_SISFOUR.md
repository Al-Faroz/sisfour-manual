# Masterplan Manual SisFour

**Status:** M0–M1 implemented / Draft PR — ready for review  
**Tanggal acuan:** 23 September 2026  
**Repository:** `Al-Faroz/sisfour-manual`  
**Target URL:** `https://al-faroz.github.io/sisfour-manual/`

## 1. Tujuan

Menyediakan panduan pengguna SisFour yang mudah dicari, responsif, berbasis role, berbasis modul, dan berbasis alur kerja. Manual pengguna harus menerjemahkan SSOT teknis SisFour ke bahasa operasional tanpa mengubah aturan akses, scope, period, atau business rule aplikasi.

## 2. Sumber kebenaran

Isi manual tidak menjadi sumber authorization. Fakta mengenai role, permission, scope, lifecycle, dan fitur harus diturunkan dari source serta SSOT pada repository aplikasi `Al-Faroz/sisfour_dev_v2`.

Urutan validasi konten:

```text
Source aplikasi / route / service
→ SSOT SisFour
→ UI aktual
→ Manual pengguna
```

Jika terdapat perbedaan, manual harus diperbaiki agar mengikuti aplikasi dan SSOT yang berlaku.

## 3. Target pengguna

- Admin
- Operator
- Pimpinan
- BK
- Guru
- Guru + Wali Kelas
- Siswa
- Kesehatan
- PTSP

Wali Kelas didokumentasikan sebagai konteks Guru, bukan role mandiri.

## 4. Arsitektur informasi

Manual menyediakan tiga jalur utama untuk menemukan informasi:

```text
Siapa saya?
→ Panduan berdasarkan role

Saya ingin melakukan apa?
→ Alur kerja

Fitur ini ada di mana?
→ Modul
```

Pencarian lokal menjadi jalur keempat untuk menemukan halaman secara langsung.

## 5. Sitemap tingkat atas

```text
Beranda
├── Mulai
├── Panduan Berdasarkan Role
├── Alur Kerja
├── Modul
├── Aplikasi Mobile
└── Bantuan
```

### Mulai

- Tentang SisFour
- Mengakses SisFour
- Login & Logout
- Mengenal Antarmuka
- Tahun Ajaran
- Hak Akses Pengguna

### Panduan Berdasarkan Role

- Administrator
- Operator
- Pimpinan
- BK
- Guru
- Guru + Wali Kelas
- Siswa
- Kesehatan
- PTSP

### Alur Kerja

Target bertahap:

- Persiapan awal tahun ajaran
- Persiapan semester
- Kenaikan kelas
- Kelulusan
- Presensi siswa
- Jurnal mengajar
- Monitoring EWS
- Penanganan BK
- Konseling
- Pelayanan UKS
- Pelayanan PTSP
- Penerbitan Kartu Pelajar

### Modul

Target bertahap:

- Dashboard
- Master Data
- Akademik
- Presensi
- Jurnal Mengajar
- Laporan
- EWS
- Statistik & Signage
- BK
- Prestasi
- UKS / Kesehatan
- PTSP
- Kartu Pelajar
- Profil / Personalia
- Pengaturan / Maintenance / Backup / Log

### Mobile

Konten khusus Android/Cordova akan dilengkapi setelah G4 stabil. Konten fitur bisnis tidak diduplikasi; halaman fitur yang sama menjelaskan perbedaan desktop/mobile bila diperlukan.

### Bantuan

- FAQ
- Masalah login
- Masalah data
- Troubleshooting per modul
- Istilah
- Riwayat perubahan manual

## 6. Standar halaman fitur

Setiap halaman fitur menggunakan urutan berikut bila relevan:

1. Tujuan fitur.
2. Siapa yang dapat mengakses.
3. Lokasi menu.
4. Prasyarat.
5. Langkah penggunaan.
6. Screenshot/anotasi.
7. Penjelasan field/tombol.
8. Hasil yang diharapkan.
9. Catatan/peringatan.
10. Masalah umum dan solusi.
11. Fitur terkait.
12. Navigasi sebelumnya/berikutnya.

## 7. Standar screenshot

- Gunakan state aplikasi terbaru.
- Hindari data pribadi nyata jika tidak diperlukan.
- Utamakan akun/data dummy untuk dokumentasi.
- Screenshot harus fokus pada area yang dijelaskan.
- Bila perlu, gunakan penanda nomor untuk menghubungkan gambar dengan langkah.
- Pisahkan aset per konteks: common, admin, operator, pimpinan, bk, guru, siswa, kesehatan, ptsp, mobile.
- Format target: WebP/PNG dengan ukuran yang tetap terbaca pada desktop dan mobile.

## 8. Teknologi

Fondasi:

```text
VitePress 1.6.4
Markdown
Local Search
GitHub
GitHub Pages
```

Untuk GitHub project site digunakan:

```text
base: /sisfour-manual/
```

## 9. Versioning

Manual mengikuti versi/release aplikasi, bukan versi artikel individual. Perubahan manual harus dapat ditelusuri melalui Git history.

Target metadata halaman:

```yaml
title: Presensi Siswa
module: Presensi
roles:
  - admin
  - operator
  - guru
status: active
```

Metadata diperluas hanya bila benar-benar diperlukan.

## 10. Aturan deployment

- Pengembangan dilakukan melalui branch.
- Review melalui Pull Request.
- Tidak auto-merge.
- Workflow GitHub Pages ditambahkan setelah fondasi disetujui.
- Aktivasi Pages dan deployment pertama membutuhkan approval eksplisit.
- Target deployment hanya dari `main` setelah review.

## 11. Tahap pengerjaan

```text
M0 Fondasi repository
M1 Sitemap + visual shell
M2 Mulai + role guides
M3 Modul inti akademik
M4 BK + Prestasi + EWS
M5 UKS + PTSP
M6 Statistik + Kartu + Profile + Settings
M7 Screenshot & anotasi
M8 Mobile/G4
M9 QA + publish
```

## 12. Acceptance fondasi

Fondasi dianggap siap untuk tahap konten bila:

- VitePress build bersih.
- Base path GitHub Pages benar.
- Search lokal aktif.
- Sidebar/nav responsif.
- Dark mode tersedia.
- Sitemap tingkat atas tersedia.
- Struktur file mudah dikembangkan.
- Tidak ada deployment sebelum approval.

## 13. M1 — Sitemap & Visual Shell

Status M1 ditujukan untuk mengunci struktur informasi sebelum penulisan konten detail.

### Sitemap terkunci

```text
Beranda
├── Mulai
├── Panduan Berdasarkan Role
├── Alur Kerja
├── Modul
│   ├── Dashboard
│   ├── Master Data
│   ├── Manajemen Siswa
│   ├── Presensi & Jurnal
│   ├── Laporan & EWS
│   ├── BK & Prestasi
│   ├── UKS / Kesehatan
│   ├── PTSP
│   ├── Kartu Pelajar
│   ├── Statistik & Signage
│   ├── Profil & Personalia
│   └── Pengaturan Sistem
├── Aplikasi Mobile
└── Bantuan
```

Sitemap detail disimpan di `docs/sitemap.md`.

### Visual shell

M1 menetapkan:

- warna brand awal mengikuti keluarga warna UI SisFour/Sneat;
- homepage hero + tiga jalur pencarian informasi;
- role grid;
- module cards;
- local search berbahasa Indonesia;
- sidebar responsif dan dark mode dari VitePress;
- branding gambar/logo tetap menunggu aset resmi dari pengguna.

### Gate M1

M1 dianggap siap direview bila:

- seluruh link sidebar M1 memiliki halaman;
- VitePress build PASS;
- tidak ada broken internal link;
- base path tetap `/sisfour-manual/`;
- PR tetap Draft;
- tidak ada workflow deploy/Pages activation;
- tidak ada merge tanpa approval eksplisit.
