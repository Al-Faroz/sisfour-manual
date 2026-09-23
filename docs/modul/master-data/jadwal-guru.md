---
title: Jadwal Guru
module: Master Data
status: active
---

# Jadwal Guru

Jadwal Guru menghubungkan Guru, Kelas, Mata Pelajaran, hari, waktu, sesi, dan Tahun Ajaran. Jadwal menjadi dasar banyak workflow Guru seperti Presensi dan Jurnal.

## Jenis sesi

- Sesi Awal;
- Non Sesi;
- Sesi Akhir.

Untuk satu kelas/hari, topology aktif minimal mempunyai dua row: row pertama Sesi Awal, row terakhir Sesi Akhir, dan row tengah Non Sesi.

## Menambah Jadwal

<div class="sf-flow">
  <div><strong>Pilih Tahun Ajaran</strong>Default adalah Tahun Ajaran aktif.</div>
  <div><strong>Pilih Guru, Kelas, dan Mapel</strong>Pastikan semuanya berasal dari data master yang sah.</div>
  <div><strong>Isi hari, waktu, dan sesi</strong>Hindari overlap Guru maupun Kelas.</div>
  <div><strong>Simpan</strong>Server memvalidasi waktu dan topology.</div>
  <div><strong>Verifikasi urutan</strong>Pastikan Sesi Awal/Non Sesi/Sesi Akhir membentuk struktur yang benar.</div>
</div>

## Import Jadwal

Import melakukan resolve Guru, Kelas, Mapel, dan Tahun Ajaran, memvalidasi waktu/overlap/topology, lalu menggunakan transaction/rollback.

Sebelum import:

<ul class="sf-checklist">
  <li>pastikan semua Guru, Kelas, dan Mapel sudah ada;</li>
  <li>pastikan Tahun Ajaran target benar;</li>
  <li>periksa waktu dan potensi overlap;</li>
  <li>jangan menganggap import sukses sebelum server mengonfirmasi.</li>
</ul>

## Delete

Jadwal yang sudah direferensikan oleh Presensi Mengajar/Jurnal dapat dilindungi dari delete. Historical row dapat dipertahankan sebagai nonaktif sesuai workflow.
