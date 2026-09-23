---
title: Pengaturan Form Konseling
module: BK & Prestasi
status: active
---

# Pengaturan Form Konseling

Pengaturan Form Konseling mengelola pilihan yang digunakan pada form Konseling.

## Akses

- Admin: ya;
- BK: ya;
- Operator: tidak;
- Pimpinan: tidak;
- Guru/Wali: tidak;
- Siswa: tidak.

## Yang dapat dikonfigurasi

- Bentuk Layanan;
- Cara Siswa Hadir;
- Topik per Bidang;
- Rencana Berikutnya.

## Yang tetap/fixed

**Bidang:**

- Pribadi;
- Sosial;
- Belajar;
- Karier.

**Status:**

- Proses;
- Selesai.

## Mengelola pilihan

<div class="sf-flow">
  <div><strong>Buka Pengaturan Form Konseling</strong>Pastikan Anda Admin atau BK dengan capability settings.</div>
  <div><strong>Pilih kelompok opsi</strong>Tentukan Bentuk Layanan, Cara Hadir, Topik, atau Rencana.</div>
  <div><strong>Tambah/edit/hapus pilihan aktif</strong>Jaga wording tetap jelas dan tidak duplikat.</div>
  <div><strong>Simpan</strong>Server memvalidasi jumlah, panjang, dan deduplikasi.</div>
  <div><strong>Verifikasi form Konseling</strong>Pastikan opsi aktif tampil sesuai pengaturan.</div>
</div>

## Constraint

Setiap group harus memiliki minimal 1 dan maksimal 40 pilihan. Deduplikasi bersifat case-insensitive.

Batas panjang:

- Bentuk Layanan: 50 karakter;
- Cara Hadir: 80;
- Topik: 150;
- Rencana: 100.

## Data historis tetap aman

Menghapus opsi dari Settings **tidak boleh merusak record lama** yang sudah menyimpan opsi tersebut. Nilai historis tetap terbaca dan dapat dipertahankan.
