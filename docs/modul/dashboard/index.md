---
title: Dashboard
module: Dashboard
status: active
---

# Dashboard

Dashboard adalah **launcher pekerjaan dan monitoring**, bukan laporan lengkap. Isi dashboard menyesuaikan experience role, permission, dan current-state Tahun Ajaran aktif.

## Pola umum

Pada role operasional/mobile-first, dashboard biasanya mempunyai:

- 4 KPI dalam grid 2×2;
- Quick Action yang permission-aware;
- 3–5 item recent/top;
- tautan Lihat Semua untuk detail.

Widget yang tidak mempunyai permission tidak ditampilkan sebagai angka nol palsu.

## Dashboard per role

| Experience | Prioritas |
|---|---|
| Admin | system/master/operational overview |
| Operator | administrasi operasional |
| Pimpinan | exception KPI, trend, EWS, laporan |
| BK | Konseling, Pelanggaran, EWS, tindak lanjut, Prestasi |
| Guru | Belum Presensi, Belum Jurnal, Jadwal Hari Ini |
| Guru + Wali | tugas Guru + kondisi kelas wali |
| Siswa | Presensi diri, Kartu, Prestasi, Profil |
| Kesehatan | Kunjungan UKS dan CKG |
| PTSP | Layanan, Pengaduan, Kepuasan |

## Tahun Ajaran

Dashboard current-state memakai Tahun Ajaran aktif dan umumnya **tidak menyediakan selector histori**. Untuk histori, gunakan listing atau laporan periodik.

## Quick Action

Quick Action hanya shortcut menuju capability yang sudah sah. Shortcut tidak menambah permission.

## Jika dashboard kosong atau tidak lengkap

Bedakan beberapa kondisi:

- belum ada data;
- data tidak ada pada current-state;
- widget tidak tersedia karena permission;
- Tahun Ajaran aktif tidak tersedia;
- network/session gagal.

Jangan menganggap angka nol sama dengan “tidak punya akses”.

## Panduan role

Untuk urutan kerja spesifik dashboard, buka [Panduan Berdasarkan Role](/role/).
