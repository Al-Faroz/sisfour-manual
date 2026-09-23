---
title: Presensi dan Jurnal
module: Presensi & Jurnal
status: active
---

# Presensi dan Jurnal

SisFour memisahkan dua domain yang berbeda:

| Domain | Makna |
|---|---|
| Presensi Siswa | Kehadiran resmi sekolah |
| Jurnal Mengajar | Catatan aktivitas mengajar Guru pada satu Jadwal |
| Exception siswa di Jurnal | Siswa yang tidak mengikuti pembelajaran tertentu |

## Presensi resmi

Presensi memakai status Hadir, Sakit, Izin, dan Alpha pada dua sesi:

- Sesi Awal;
- Sesi Akhir.

**Sesi Awal** adalah sumber resmi Rekap, Matrix, EWS, Signage, dan statistik kehadiran.

## Jurnal Mengajar

Jurnal mempunyai status Guru Hadir, Izin, atau Sakit, serta Materi wajib dan Catatan opsional. Jurnal dapat menyimpan exception siswa Sakit/Izin/Alpha untuk pembelajaran tersebut.

> [!IMPORTANT]
> Exception siswa pada Jurnal tidak menulis atau mengubah Presensi resmi, tidak masuk Rekap Presensi, dan tidak masuk EWS/Signage Presensi.

<div class="sf-grid">
  <a class="sf-card" href="./presensi-siswa.html"><strong>Presensi Siswa</strong><span>Input Sesi Awal/Sesi Akhir dengan workflow kelas.</span></a>
  <a class="sf-card" href="./revisi-presensi.html"><strong>Revisi Presensi</strong><span>Perbaikan record yang sudah tersimpan oleh actor yang berhak.</span></a>
  <a class="sf-card" href="./jurnal-mengajar.html"><strong>Jurnal Mengajar</strong><span>Status Guru, Materi, Catatan, dan exception siswa.</span></a>
</div>

## Tahun dan waktu

Workflow operasional memakai Tahun Ajaran aktif. Keputusan waktu menggunakan zona Asia/Jakarta dan validasi final dilakukan server.
