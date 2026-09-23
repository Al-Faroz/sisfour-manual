---
title: Panduan Administrator
roles:
  - admin
status: active
---

# Panduan Administrator

Administrator menggunakan SisFour untuk konfigurasi, pengelolaan master data, operasional lintas modul, dan kontrol sistem sesuai permission.

## Tujuan utama

<ul class="sf-checklist">
  <li>menjaga master data tetap benar dan konsisten;</li>
  <li>mengelola user, menu, dan setting sistem;</li>
  <li>membantu operasional lintas modul sesuai capability;</li>
  <li>memantau backup, log, dan maintenance;</li>
  <li>memastikan lifecycle siswa dan Tahun Ajaran dikelola dengan benar.</li>
</ul>

## Alur kerja yang disarankan

<div class="sf-flow">
  <div><strong>Periksa dashboard dan context</strong>Pastikan Tahun Ajaran aktif dan informasi sistem sesuai kondisi saat ini.</div>
  <div><strong>Kelola master data</strong>Guru, Pegawai, Siswa, Kelas, Mapel, Wali Kelas, dan Jadwal menjadi fondasi fitur lain.</div>
  <div><strong>Kelola lifecycle siswa</strong>Lakukan penempatan, kenaikan, mutasi, atau kelulusan hanya melalui workflow resmi.</div>
  <div><strong>Kelola konfigurasi</strong>User, menu, setting, dan domain khusus mengikuti permission masing-masing.</div>
  <div><strong>Audit hasil</strong>Gunakan laporan, statistik, log aktivitas, dan backup sesuai kebutuhan.</div>
</div>

## Modul yang paling relevan

| Modul | Kegunaan |
|---|---|
| Master Data | Fondasi data sekolah |
| Manajemen Siswa | Lifecycle siswa |
| Pengaturan Sistem | User, menu, setting, maintenance, backup, log |
| Statistik & Signage | Monitoring agregat |
| Modul operasional | Sesuai capability yang diberikan |

## Batas akses yang perlu diketahui

Administrator memiliki akses luas, tetapi **tidak bypass business rule**. Contohnya, aturan periode, target record, integritas lifecycle, dan workflow domain tetap divalidasi server.

Full access pada domain tertentu juga tidak berarti semua tindakan selalu tersedia; route dan service tetap menjadi otoritas final.

## Perangkat yang disarankan

Desktop/laptop adalah surface utama untuk pekerjaan administratif berat. Mobile tetap responsif tetapi matrix atau bulk workflow tertentu dapat lebih nyaman di layar besar.

<div class="sf-guide-links">
  <a href="../modul/master-data/"><strong>Lanjut:</strong> Master Data</a>
  <a href="../modul/pengaturan-sistem/"><strong>Lanjut:</strong> Pengaturan Sistem</a>
</div>
