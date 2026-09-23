---
title: Penempatan dan Pindah Kelas
module: Manajemen Siswa
status: active
---

# Penempatan dan Pindah Kelas

Workflow ini digunakan untuk menempatkan siswa ke kelas atau memindahkannya ke kelas lain pada **periode aktif**.

## Kapan digunakan?

- siswa aktif belum mempunyai current membership yang benar;
- siswa perlu berpindah kelas dalam periode operasional yang sama;
- administrasi kelas perlu diperbaiki melalui workflow resmi.

## Langkah penggunaan

<div class="sf-flow">
  <div><strong>Buka Manajemen Siswa</strong>Pilih workflow Penempatan/Pindah Kelas.</div>
  <div><strong>Pastikan siswa valid</strong>Cari siswa yang masih sah untuk diproses pada periode aktif.</div>
  <div><strong>Pilih kelas target</strong>Kelas harus berasal dari Tahun Ajaran yang valid untuk workflow.</div>
  <div><strong>Periksa perubahan</strong>Pastikan siswa dan kelas target benar sebelum submit.</div>
  <div><strong>Simpan</strong>Server memperbarui current membership dan history secara konsisten.</div>
  <div><strong>Verifikasi</strong>Buka Master Siswa/Kelas atau listing terkait dan pastikan membership baru terlihat.</div>
</div>

## Period context

Workflow ini mengikuti Tahun Ajaran aktif dan tidak menyediakan selector historis bebas untuk mutation.

## Jika perpindahan gagal

Periksa:

- status siswa masih valid;
- kelas target berada pada periode yang benar;
- siswa tidak mempunyai membership konflik;
- permission actor;
- pesan validasi dari server.

> [!NOTE]
> Perpindahan kelas bukan Mutasi. Mutasi Pindah berarti siswa keluar dari sekolah, sedangkan pindah kelas hanya mengubah kelas internal.
