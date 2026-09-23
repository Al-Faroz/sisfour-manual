---
title: Panduan Pimpinan
roles:
  - pimpinan
status: active
---

# Panduan Pimpinan

Pimpinan memakai SisFour terutama untuk **monitoring dan pengambilan keputusan**, dengan karakter akses umumnya read-only.

## Mulai dari dashboard

Dashboard Pimpinan memprioritaskan exception dan kondisi yang membutuhkan perhatian.

### KPI utama

- Kelas Belum Presensi;
- Jadwal Belum Jurnal;
- EWS Alpha 14 Hari;
- Catatan Pelanggaran Bulan Ini.

### Quick Action

- Rekap;
- Jurnal;
- EWS;
- Laporan.

Quick Action hanya muncul jika capability tersedia dan tidak menambah permission baru.

## Monitoring lanjutan

Dashboard dapat menampilkan:

- Tren Presensi 7 Hari;
- EWS maksimal 5 item + Lihat Semua;
- Prestasi Terbaru maksimal 5 item + Lihat Semua;
- Ringkasan Master.

Data periodik dashboard memakai Tahun Ajaran aktif.

## Alur penggunaan

<div class="sf-flow">
  <div><strong>Baca KPI exception</strong>Mulai dari angka yang menunjukkan proses belum selesai atau kondisi perlu perhatian.</div>
  <div><strong>Buka tren singkat</strong>Lihat apakah kondisi membaik, stabil, atau perlu dicek lebih lanjut.</div>
  <div><strong>Masuk ke laporan/detail yang diizinkan</strong>Gunakan quick action atau Lihat Semua.</div>
  <div><strong>Ekspor bila diperlukan</strong>Pakai export hanya pada domain yang memberikan capability tersebut.</div>
</div>

## Batas akses penting

> [!IMPORTANT]
> Pimpinan tidak memperoleh detail atau source data Konseling BK. Catatan Pelanggaran ditampilkan tanpa sistem poin/ranking. Widget yang tidak memiliki permission tidak disamarkan sebagai angka nol.

Pimpinan dapat mempunyai akses read-only seluruh data UKS dan PTSP beserta export sesuai permission, tetapi tidak mendapat mutation control.

<div class="sf-guide-links">
  <a href="../modul/laporan-ews/"><strong>Lanjut:</strong> Laporan & EWS</a>
  <a href="../modul/statistik-signage/"><strong>Lanjut:</strong> Statistik & Signage</a>
</div>
