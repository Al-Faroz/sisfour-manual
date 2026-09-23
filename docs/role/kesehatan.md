---
title: Panduan Kesehatan
roles:
  - kesehatan
status: active
---

# Panduan Kesehatan

Role Kesehatan memakai identity Pegawai dan mempunyai Full Access **pada domain UKS** sesuai capability.

## Dashboard Kesehatan

Dashboard adalah current-state Tahun Ajaran aktif tanpa selector histori.

### KPI

- Kunjungan UKS Hari Ini;
- Kunjungan UKS Bulan Ini;
- Rujuk ke Klinik Bulan Ini;
- Pemeriksaan CKG Bulan Ini.

### Aksi utama

**Tambah Data Kunjungan** menjadi primary action.

### Quick Action

- Data UKS;
- Data CKG;
- Import CKG;
- Master UKS.

## Alur kerja operasional

<div class="sf-flow">
  <div><strong>Tambah kunjungan bila ada siswa datang</strong>Gunakan Catatan Harian UKS sebagai record operasional.</div>
  <div><strong>Kelola Data CKG</strong>Input atau import sesuai capability dan format yang disediakan.</div>
  <div><strong>Kelola referensi UKS</strong>Master UKS dipakai untuk menjaga data konsisten.</div>
  <div><strong>Periksa recent data</strong>Dashboard menampilkan kunjungan dan pemeriksaan terbaru maksimal 5 item.</div>
  <div><strong>Gunakan histori bila diperlukan</strong>Listing CKG dan Catatan Harian dapat memilih Tahun Ajaran historis.</div>
</div>

## Batas domain

Full Access Kesehatan hanya berlaku di UKS; tidak otomatis membuka BK atau PTSP.

Dashboard tidak membuat medical risk score, SLA, overdue, atau interpretasi klinis yang tidak disimpan oleh domain.

<div class="sf-guide-links">
  <a href="../modul/uks/"><strong>Lanjut:</strong> UKS / Kesehatan</a>
  <a href="../mulai/tahun-ajaran.html"><strong>Pelajari:</strong> Tahun Ajaran & Periode</a>
</div>
