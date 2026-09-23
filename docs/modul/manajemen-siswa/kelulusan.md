---
title: Kelulusan
module: Manajemen Siswa
status: active
---

# Kelulusan

Kelulusan digunakan untuk siswa **Aktif tingkat akhir** yang telah menyelesaikan lifecycle akademik di sekolah.

## Dampak workflow

Kelulusan secara transactional:

- menutup history aktif;
- mencatat status Lulus;
- memperbarui status siswa;
- melepas current membership;
- menonaktifkan Kartu Pelajar aktif.

Akun user tidak otomatis dinonaktifkan kecuali ada policy eksplisit.

## Langkah penggunaan

<div class="sf-flow">
  <div><strong>Buka workflow Kelulusan</strong>Pastikan source period dan siswa tingkat akhir benar.</div>
  <div><strong>Tinjau daftar siswa</strong>Pastikan hanya siswa Aktif yang valid diproses.</div>
  <div><strong>Pilih siswa</strong>Gunakan bulk control dengan hati-hati.</div>
  <div><strong>Konfirmasi</strong>Periksa bahwa tindakan ini benar-benar Kelulusan, bukan Kenaikan biasa.</div>
  <div><strong>Proses</strong>Tunggu success server; jangan melakukan double-submit.</div>
  <div><strong>Verifikasi</strong>Periksa status Lulus, history, dan current membership.</div>
</div>

> [!WARNING]
> Kelulusan adalah terminal lifecycle. Jika terjadi kesalahan, jangan mengedit status secara manual; gunakan Restore Lifecycle bila seluruh guard restore terpenuhi.
