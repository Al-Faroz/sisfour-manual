---
title: Mutasi Siswa
module: Manajemen Siswa
status: active
---

# Mutasi Siswa

Mutasi digunakan ketika siswa aktif meninggalkan sekolah dengan terminal state **Pindah** atau **Keluar**.

## Dampak workflow

Mutation yang sah dapat:

- menutup history aktif;
- menulis terminal history;
- memperbarui status dan tanggal/keterangan;
- melepaskan current membership;
- menonaktifkan Kartu Pelajar aktif;
- mempertahankan seluruh history lama.

## Langkah penggunaan

<div class="sf-flow">
  <div><strong>Cari siswa aktif</strong>Pastikan siswa yang dipilih memang current dan belum berada pada terminal state.</div>
  <div><strong>Pilih jenis Mutasi</strong>Gunakan Pindah atau Keluar sesuai kondisi administrasi.</div>
  <div><strong>Isi tanggal dan keterangan</strong>Lengkapi informasi yang diminta form.</div>
  <div><strong>Periksa dampak</strong>Pastikan Anda memang ingin mengakhiri membership aktif siswa.</div>
  <div><strong>Submit</strong>Server menjalankan perubahan secara transactional.</div>
  <div><strong>Verifikasi</strong>Pastikan status terminal dan history tercatat, tanpa menghapus histori sebelumnya.</div>
</div>

## Pindah kelas bukan Mutasi Pindah

Jika siswa hanya berpindah dari satu kelas ke kelas lain dalam sekolah, gunakan **Penempatan/Pindah Kelas**. Mutasi Pindah digunakan saat siswa pindah keluar dari sekolah.

## Setelah Mutasi

Akun siswa tidak boleh diubah atau dihapus secara ad-hoc hanya untuk menyesuaikan tampilan. Ikuti policy akun yang berlaku.
