---
title: Panduan BK
roles:
  - bk
status: active
---

# Panduan BK

BK menggunakan SisFour untuk pendampingan siswa, pencatatan pelanggaran, Konseling rahasia, tindak lanjut, monitoring EWS, dan Prestasi.

## Mulai dari dashboard BK

Dashboard BK adalah current-state Tahun Ajaran aktif dan tidak memakai selector histori.

### KPI utama

- Konseling Proses;
- Pelanggaran Bulan Ini;
- EWS Alpha 14 Hari;
- Prestasi Bulan Ini.

### Quick Action

- Konseling BK;
- Catatan Pelanggaran;
- EWS;
- Prestasi.

## Prioritas kerja

<div class="sf-flow">
  <div><strong>Periksa Konseling Proses</strong>Lihat kasus yang masih berjalan dan follow-up terdekat.</div>
  <div><strong>Periksa Catatan Pelanggaran</strong>Baca record terbaru atau yang membutuhkan perhatian.</div>
  <div><strong>Lanjutkan tindak lanjut</strong>Gunakan histori yang sudah ada agar context sebelumnya tetap terbaca.</div>
  <div><strong>Monitor EWS</strong>Gunakan EWS sebagai sinyal untuk pemeriksaan lebih lanjut, bukan keputusan otomatis.</div>
  <div><strong>Catat Prestasi</strong>Tambahkan record Prestasi pada periode yang sah sesuai workflow.</div>
</div>

## Konseling BK

Konseling adalah data rahasia. Workflow canonical:

1. buat catatan awal;
2. isi hasil pertemuan awal;
3. baca riwayat tindak lanjut;
4. tambah atau edit tindak lanjut baru bila diperlukan.

Satu Konseling dapat mempunyai banyak tindak lanjut. Tidak ada delete parent Konseling maupun delete Tindak Lanjut Konseling pada contract saat ini.

## Tahun Ajaran

Dashboard memakai Tahun Ajaran aktif. Listing Catatan Pelanggaran, Konseling, dan Prestasi bersifat periodik dan dapat menyediakan selector histori.

## Hal yang tidak digunakan

- tidak ada poin/ranking pelanggaran;
- tidak ada SLA atau label overdue buatan;
- tanggal follow-up kosong tidak dianggap sebagai deadline.

<div class="sf-guide-links">
  <a href="../modul/bk-prestasi/"><strong>Lanjut:</strong> BK & Prestasi</a>
  <a href="../modul/laporan-ews/"><strong>Lanjut:</strong> EWS</a>
</div>
