---
title: Master Pegawai
module: Master Data
status: active
---

# Master Pegawai

Master Pegawai menyimpan identity untuk personel non-Guru dan role operasional berbasis Pegawai.

## Hubungan dengan akun

Tidak ada role bernama Pegawai. User Management menentukan role, sedangkan akun dapat ditautkan ke identity Pegawai.

Role berikut memakai identity Pegawai:

- BK;
- Kesehatan;
- PTSP.

## Cara mengelola

<div class="sf-flow">
  <div><strong>Cari Pegawai</strong>Utamakan nama, lalu verifikasi NIP/NIK atau context jabatan.</div>
  <div><strong>Tambah atau edit data</strong>Isi data dasar sesuai form yang tersedia.</div>
  <div><strong>Simpan dan verifikasi</strong>Tunggu success dari server lalu periksa kembali record.</div>
  <div><strong>Kelola akun secara terpisah</strong>Assignment role dan security state dilakukan melalui User Management.</div>
</div>

## Delete dan histori

Permanent delete harus mempertimbangkan account identity, history aktivitas, dan dokumen personalia yang perlu dipertahankan.

> [!NOTE]
> Mengubah data Pegawai tidak otomatis mengubah role user. Role dikelola pada Pengaturan User.
