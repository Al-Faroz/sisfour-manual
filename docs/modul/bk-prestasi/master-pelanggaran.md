---
title: Master Pelanggaran
module: BK & Prestasi
status: active
---

# Master Pelanggaran

Master Pelanggaran adalah referensi jenis pelanggaran yang dipakai ketika membuat Catatan Pelanggaran.

## Data yang dikelola

Setiap item mempunyai:

- nama pelanggaran;
- kategori: Ringan, Sedang, atau Berat.

Poin **bukan** business rule BK. UI, export, dashboard, dan workflow aktif tidak menggunakan poin untuk keputusan.

## Cara mengelola

<div class="sf-flow">
  <div><strong>Buka Master Pelanggaran</strong>Fitur hanya tersedia bagi actor dengan capability pengelolaan master BK.</div>
  <div><strong>Cari referensi</strong>Pastikan nama/kategori belum ada agar tidak membuat duplikasi.</div>
  <div><strong>Tambah atau edit</strong>Isi nama dan kategori yang tepat.</div>
  <div><strong>Simpan</strong>Tunggu konfirmasi server.</div>
  <div><strong>Verifikasi</strong>Pastikan item tersedia saat membuat Catatan Pelanggaran.</div>
</div>

## Delete

Delete hanya boleh dilakukan melalui aksi aplikasi dan dapat ditolak bila ada dependency atau rule yang melindungi histori.

> [!WARNING]
> Jangan menghidupkan kembali kolom poin legacy atau membuat ranking poin di luar aplikasi. Nilai legacy tidak dipakai sebagai dasar keputusan BK.
