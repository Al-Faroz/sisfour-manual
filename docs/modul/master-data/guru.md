---
title: Master Guru
module: Master Data
status: active
---

# Master Guru

Master Guru menyimpan identitas Guru yang dipakai oleh Jadwal, Mapping Wali, Presensi/Jurnal, serta fitur lain yang mencatat actor Guru.

## Identifier penting

- NIK wajib 16 digit untuk create/edit/import baru;
- NIP bersifat opsional;
- login identifier memakai NIP bila tersedia, selain itu NIK.

Nama adalah identitas visual utama di UI. NIP/NIK dipakai sebagai informasi sekunder untuk pencarian, verifikasi, import, dan administrasi.

## Menambah atau memperbarui Guru

<div class="sf-flow">
  <div><strong>Buka Master Guru</strong>Pastikan Anda berada pada modul Master Data dan mempunyai capability yang sesuai.</div>
  <div><strong>Cari record lebih dahulu</strong>Gunakan nama atau identifier untuk mencegah duplikasi.</div>
  <div><strong>Isi data identitas</strong>Pastikan NIK valid dan NIP, bila diisi, benar.</div>
  <div><strong>Simpan</strong>Tunggu konfirmasi server sebelum menganggap perubahan berhasil.</div>
  <div><strong>Verifikasi</strong>Cari kembali Guru dan pastikan data yang tampil sesuai.</div>
</div>

## Menghapus Guru

Permanent delete dapat ditolak bila Guru sudah mempunyai dependency, misalnya Jadwal, Mapping Wali, Presensi/Jurnal, input BK/Prestasi, histori, atau dokumen personalia.

> [!WARNING]
> Jangan menghapus dependency atau histori hanya agar record Guru dapat dihapus. Pertahankan histori akademik dan gunakan kebijakan nonaktif bila workflow menyediakan.
