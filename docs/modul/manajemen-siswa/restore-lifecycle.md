---
title: Restore Lifecycle
module: Manajemen Siswa
status: active
---

# Restore Lifecycle

Restore Lifecycle dapat mengembalikan siswa dari terminal state tertentu:

- Pindah;
- Keluar;
- Lulus.

Fitur ini adalah recovery workflow dengan guard ketat, bukan tombol undo bebas.

## Kapan restore sah?

Restore hanya dapat dilakukan jika antara lain:

- terminal event tersebut adalah event terbaru;
- status current siswa masih sama dengan terminal state;
- exact periode sumber masih aktif sesuai rule;
- kelas/history sumber valid;
- restore tidak membuat duplicate membership atau duplicate history aktif.

## Langkah penggunaan

<div class="sf-flow">
  <div><strong>Cari siswa terminal</strong>Pilih siswa yang benar-benar perlu dipulihkan.</div>
  <div><strong>Periksa source context</strong>Pastikan terminal event, periode, kelas, dan history memenuhi syarat.</div>
  <div><strong>Jalankan precheck</strong>Biarkan server menentukan apakah restore boleh dilakukan.</div>
  <div><strong>Konfirmasi</strong>Pastikan pemulihan tidak bertentangan dengan lifecycle terbaru.</div>
  <div><strong>Restore</strong>Server memulihkan membership/status secara transactional.</div>
  <div><strong>Verifikasi</strong>Pastikan siswa kembali Aktif dan terminal history lama tetap dipertahankan.</div>
</div>

Restore dapat mengaktifkan kembali Kartu Pelajar bila memenuhi contract.

> [!IMPORTANT]
> Jika server menolak restore, jangan bypass guard melalui database. Penolakan biasanya berarti current state sudah tidak cocok dengan source terminal yang akan dipulihkan.
