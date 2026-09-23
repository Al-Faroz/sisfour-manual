---
title: Tindak Lanjut Konseling
module: BK & Prestasi
status: active
---

# Tindak Lanjut Konseling

Satu Konseling dapat mempunyai banyak entry tindak lanjut. Histori ditampilkan **sebelum** form Tambah/Edit agar context selalu terbaca.

## Isi setiap tindak lanjut

- tanggal;
- perkembangan;
- hasil/kesepakatan;
- rencana berikutnya;
- tanggal berikutnya;
- status Proses atau Selesai;
- audit actor/waktu.

## Menambah tindak lanjut

<div class="sf-flow">
  <div><strong>Buka detail Konseling</strong>Pastikan parent dan siswa benar.</div>
  <div><strong>Baca hasil pertemuan awal</strong>Pahami context awal sebelum menambah follow-up.</div>
  <div><strong>Baca seluruh histori</strong>Entry terbaru menjadi context operasional berikutnya.</div>
  <div><strong>Isi perkembangan</strong>Perkembangan wajib diisi.</div>
  <div><strong>Isi hasil/rencana</strong>Lengkapi sesuai kondisi aktual.</div>
  <div><strong>Pilih status dan simpan</strong>Server memvalidasi tanggal dan completeness.</div>
</div>

## Validasi

- tanggal tindak lanjut tidak boleh sebelum tanggal parent;
- perkembangan wajib;
- tanggal berikutnya tidak boleh sebelum tanggal tindak lanjut;
- status Selesai mewajibkan Hasil/Kesepakatan.

Jika histori follow-up sudah ada, status parent mencerminkan status tindak lanjut terbaru.

## Tidak ada delete

Tidak ada delete Tindak Lanjut Konseling. Entry hanya dapat dibuat atau diperbarui sesuai permission.

## Rencana historis

Jika suatu opsi Rencana Berikutnya dihapus dari Settings tetapi sudah tersimpan pada record lama, record tersebut tetap menampilkan nilai sebagai **“(tersimpan)”** dan tetap dapat disimpan tanpa mengganti nilai.

Opsi legacy tersebut tidak menjadi pilihan baru untuk record lain.
