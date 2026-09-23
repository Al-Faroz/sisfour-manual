---
title: Tindak Lanjut Pelanggaran
module: BK & Prestasi
status: active
---

# Tindak Lanjut Pelanggaran

Satu Catatan Pelanggaran dapat memiliki **lebih dari satu tindak lanjut**.

## Relasi

```text
Catatan Pelanggaran
└── Tindak Lanjut 1
└── Tindak Lanjut 2
└── Tindak Lanjut berikutnya
```

## Menambah tindak lanjut

<div class="sf-flow">
  <div><strong>Buka detail Catatan Pelanggaran</strong>Pastikan parent record benar.</div>
  <div><strong>Baca histori yang sudah ada</strong>Jangan membuat follow-up tanpa context sebelumnya.</div>
  <div><strong>Pilih Tambah Tindak Lanjut</strong>Fitur tersedia bagi actor dengan capability manage.</div>
  <div><strong>Isi data follow-up</strong>Catat hasil/tindakan sesuai field yang disediakan aplikasi.</div>
  <div><strong>Simpan</strong>Server memvalidasi parent dan target.</div>
  <div><strong>Verifikasi histori</strong>Entry baru harus muncul pada riwayat parent yang sama.</div>
</div>

## Edit tindak lanjut

Edit dilakukan dari histori tindak lanjut dan tetap divalidasi terhadap parent serta permission actor.

## Export

Export Catatan Pelanggaran terdiri dari dua dataset/sheet:

- Pelanggaran;
- Tindak Lanjut.

Keduanya mengikuti Tahun Ajaran terpilih dan tidak membawa poin.
