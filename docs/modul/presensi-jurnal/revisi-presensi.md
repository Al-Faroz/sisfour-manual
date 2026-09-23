---
title: Revisi Presensi
module: Presensi & Jurnal
status: active
---

# Revisi Presensi

Revisi digunakan untuk memperbaiki Presensi yang **sudah tersimpan**.

## Actor revisi

Revisi tersedia untuk:

- Admin;
- Operator;
- Wali aktif pada kelas target.

Guru biasa tidak merevisi record existing hanya karena Guru tersebut pernah mengisi workflow awal.

## Langkah revisi

<div class="sf-flow">
  <div><strong>Buka record Presensi</strong>Pilih tanggal, kelas, sesi, atau context yang benar.</div>
  <div><strong>Pastikan Anda berhak merevisi</strong>Server akan mengecek role, permission, scope, periode, dan target kelas.</div>
  <div><strong>Ubah status yang salah</strong>Jangan mengubah siswa lain jika tidak diperlukan.</div>
  <div><strong>Simpan revisi</strong>Tunggu server-confirmed success.</div>
  <div><strong>Periksa Rekap/Matrix bila perlu</strong>Pastikan hasil resmi sekarang mencerminkan perubahan.</div>
</div>

## Hal yang tidak dilakukan

Revisi tidak menghapus history secara client-side dan tidak mengubah exception siswa pada Jurnal.

> [!IMPORTANT]
> Jika Anda Guru non-Wali dan record sudah tersimpan, tidak munculnya kontrol revisi adalah behavior yang sesuai contract, bukan error UI.
