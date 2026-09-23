---
title: Panduan Guru + Wali Kelas
roles:
  - guru
context:
  - wali
status: active
---

# Panduan Guru + Wali Kelas

Guru + Wali mewarisi seluruh experience Guru dan mendapat **context kelas wali** berdasarkan mapping yang sah.

> [!IMPORTANT]
> Wali Kelas bukan role baru. Context Wali dapat berbeda menurut Tahun Ajaran, terutama saat membaca histori.

## Yang bertambah dibanding Guru biasa

Akses contextual dapat mencakup:

- ringkasan kelas wali dan jumlah siswa;
- H/S/I/A Sesi Awal;
- EWS kelas;
- ketidakhadiran terbaru;
- Rekap kelas;
- Data Siswa;
- Matrix/EWS;
- Catatan Pelanggaran;
- Prestasi;
- Kartu;
- UKS read-only kelas wali.

Semua tetap bergantung permission dan period-aware scope.

## Alur kerja Wali

<div class="sf-flow">
  <div><strong>Kerjakan tugas Guru</strong>Presensi dan Jurnal tetap menjadi pekerjaan mengajar utama.</div>
  <div><strong>Periksa kondisi kelas wali</strong>Lihat ringkasan kehadiran dan exception kelas.</div>
  <div><strong>Buka EWS atau Rekap bila perlu</strong>Gunakan context kelas wali pada periode yang benar.</div>
  <div><strong>Baca data pendukung</strong>Catatan Pelanggaran, Prestasi, UKS, atau Kartu hanya jika capability tersedia.</div>
</div>

## Batas yang harus diingat

Guru/Wali **tidak mendapat surface, detail, atau quick link Konseling BK**. Direct URL tetap ditolak bila role berada di luar access boundary.

Untuk UKS, Guru+Wali hanya read-only kelas wali. Guru non-Wali tidak mendapat akses UKS.

<div class="sf-guide-links">
  <a href="../modul/laporan-ews/"><strong>Lanjut:</strong> Rekap & EWS</a>
  <a href="../modul/uks/"><strong>Lanjut:</strong> UKS read-only Wali</a>
</div>
