---
title: BK dan Prestasi
module: BK & Prestasi
status: active
---

# BK dan Prestasi

Modul BK mengelola Catatan Pelanggaran, tindak lanjut, Konseling rahasia, EWS, dan Prestasi. Setiap domain mempunyai boundary yang berbeda.

## Struktur modul

<div class="sf-grid">
  <a class="sf-card" href="./master-pelanggaran.html"><strong>Master Pelanggaran</strong><span>Referensi nama dan kategori tanpa sistem poin.</span></a>
  <a class="sf-card" href="./catatan-pelanggaran.html"><strong>Catatan Pelanggaran</strong><span>Kejadian siswa, kategori, tanggal, keterangan, dan histori tindak lanjut.</span></a>
  <a class="sf-card" href="./tindak-lanjut-pelanggaran.html"><strong>Tindak Lanjut Pelanggaran</strong><span>Riwayat 1:N pada satu Catatan Pelanggaran.</span></a>
  <a class="sf-card" href="./konseling.html"><strong>Konseling BK</strong><span>Workflow rahasia untuk Admin, Operator, dan BK.</span></a>
  <a class="sf-card" href="./tindak-lanjut-konseling.html"><strong>Tindak Lanjut Konseling</strong><span>Riwayat follow-up 1:N tanpa delete.</span></a>
  <a class="sf-card" href="./pengaturan-form-konseling.html"><strong>Pengaturan Form Konseling</strong><span>Pilihan form yang dapat dikonfigurasi Admin/BK.</span></a>
  <a class="sf-card" href="./prestasi.html"><strong>Prestasi Siswa</strong><span>Catatan Prestasi periodik menurut Tahun Ajaran.</span></a>
  <a class="sf-card" href="./ews-bk.html"><strong>EWS untuk BK</strong><span>Sinyal awal untuk pemeriksaan dan tindak lanjut manusia.</span></a>
</div>

## Aturan periodik

Catatan Pelanggaran, Konseling, dan Prestasi adalah data periodik:

- initial filter = Tahun Ajaran aktif;
- Reset = Tahun Ajaran aktif;
- histori dapat dipilih;
- export mengikuti Tahun Ajaran terpilih;
- create baru selalu memakai Tahun Ajaran aktif dari server.

Master Pelanggaran bersifat global/non-periodik dan tidak memakai filter Tahun Ajaran.

## Boundary paling penting

> [!IMPORTANT]
> Konseling BK hanya tersedia untuk Admin, Operator, dan BK yang memiliki permission. Pimpinan, Guru/Wali, dan Siswa tidak memperoleh menu, detail, widget, payload, atau export Konseling.

> [!NOTE]
> Catatan Pelanggaran tidak memakai poin, skor, ranking, atau Top Poin sebagai business rule.
