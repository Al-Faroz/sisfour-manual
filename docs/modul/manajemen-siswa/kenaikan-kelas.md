---
title: Kenaikan Kelas
module: Manajemen Siswa
status: active
---

# Kenaikan Kelas

Kenaikan Kelas adalah promosi antar **Tahun Ajaran**, bukan perpindahan Ganjil ke Genap pada tahun yang sama.

## Source dan target canonical

- source: periode aktif semester **Genap**;
- target: semester **Ganjil** pada tahun akademik berikutnya;
- kelas 7 menuju 8;
- kelas 8 menuju 9;
- kelas 9 masuk workflow Kelulusan.

## Sebelum memproses

<ul class="sf-checklist">
  <li>source harus periode aktif dan semester Genap;</li>
  <li>target harus semester Ganjil tahun akademik berikutnya;</li>
  <li>source dan target tidak boleh Tahun Ajaran yang sama;</li>
  <li>kelas target sudah disiapkan;</li>
  <li>siswa tingkat akhir tidak dimasukkan sebagai kenaikan biasa.</li>
</ul>

## Langkah penggunaan

<div class="sf-flow">
  <div><strong>Buka Kenaikan Kelas</strong>Pastikan periode source adalah Genap aktif.</div>
  <div><strong>Pilih target tahun berikutnya</strong>Target harus Ganjil tahun akademik berikutnya.</div>
  <div><strong>Periksa siswa dan kelas</strong>Tinjau mapping promosi kelas 7→8 atau 8→9.</div>
  <div><strong>Pilih/proses siswa</strong>Gunakan kontrol bulk yang tersedia dan hindari siswa yang sudah pernah diproses.</div>
  <div><strong>Konfirmasi mutation</strong>Submit hanya setelah source/target benar.</div>
  <div><strong>Verifikasi hasil</strong>Periksa membership dan history pada periode target.</div>
</div>

## Guard server

Server menerapkan anti-double-process dan transaction untuk menjaga history, membership, serta status.

> [!IMPORTANT]
> Peralihan Ganjil → Genap pada tahun yang sama memakai [Siapkan Genap](/modul/master-data/tahun-ajaran), bukan Kenaikan Kelas.
