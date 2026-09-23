---
title: Catatan Pelanggaran Siswa
module: BK & Prestasi
status: active
---

# Catatan Pelanggaran Siswa

Catatan Pelanggaran menyimpan kejadian siswa dan histori tindak lanjutnya.

## Isi utama

- siswa;
- Tahun Ajaran;
- tanggal kejadian;
- jenis/kategori pelanggaran;
- keterangan;
- riwayat tindak lanjut.

Tidak ada poin atau skor.

## Akses umum

| Actor | Akses |
|---|---|
| Admin | view/manage sesuai capability |
| Operator | view/manage sesuai capability |
| BK | view/manage sesuai capability |
| Pimpinan | monitoring/read-only yang diizinkan, tanpa mutation |
| Guru + Wali | kelas wali sesuai scope bila capability tersedia |
| Guru biasa | tidak menjadi actor domain ini |
| Siswa | diri sendiri bila self-service tersedia |

## Membuat Catatan Pelanggaran

<div class="sf-flow">
  <div><strong>Buka Catatan Pelanggaran</strong>Pastikan Anda mempunyai capability manage.</div>
  <div><strong>Periksa Tahun Ajaran aktif</strong>Create baru selalu mengambil snapshot periode aktif dari server.</div>
  <div><strong>Pilih siswa dan jenis pelanggaran</strong>Gunakan nama sebagai identitas utama dan verifikasi context kelas bila diperlukan.</div>
  <div><strong>Isi tanggal dan keterangan</strong>Catat kejadian secara faktual.</div>
  <div><strong>Simpan</strong>Tunggu success server sebelum menambah tindak lanjut.</div>
</div>

## Membaca detail

Urutan detail canonical:

1. Detail Pelanggaran;
2. Riwayat Tindak Lanjut;
3. Form Tambah/Edit Tindak Lanjut bagi actor yang berhak.

## Tahun Ajaran

Listing/history menyediakan filter Tahun Ajaran. Export mengikuti Tahun Ajaran yang sedang dipilih.

> [!IMPORTANT]
> Jangan menafsirkan kategori Ringan/Sedang/Berat sebagai angka poin. Kategori bersifat label referensi, bukan ranking siswa.
