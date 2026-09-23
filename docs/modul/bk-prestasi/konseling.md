---
title: Konseling BK
module: BK & Prestasi
status: active
---

# Konseling BK

Konseling BK adalah **data rahasia** dengan access boundary khusus.

## Siapa yang dapat mengakses?

Hanya effective role berikut, dengan permission yang sesuai:

- Admin;
- Operator;
- BK.

Pimpinan, Guru, Wali Kelas, dan Siswa tidak mendapat menu, detail, widget, payload, maupun export Konseling.

## Tahap 1 — Catatan Awal

Field wajib:

- Kelas;
- Siswa;
- Tanggal;
- Pertemuan ke-;
- Bentuk Layanan;
- Cara Siswa Hadir;
- Bidang;
- Topik.

Create selalu menggunakan Tahun Ajaran aktif. Kelas dan siswa harus aktif pada periode tersebut.

Setelah disimpan, status awal adalah **Proses**.

## Tahap 2 — Hasil Pertemuan Awal

Parent Konseling menyimpan:

- Uraian Masalah;
- Hasil Pembahasan dan Kesepakatan;
- Rencana Berikutnya;
- Tanggal Pertemuan Berikutnya;
- Status Proses atau Selesai.

<div class="sf-flow">
  <div><strong>Buat Catatan Awal</strong>Isi metadata Tahap 1 pada siswa dan kelas yang sah.</div>
  <div><strong>Simpan sebagai Proses</strong>Server membuat parent Konseling dan mencatat actor login.</div>
  <div><strong>Isi Hasil Pertemuan Awal</strong>Tambahkan uraian, hasil, rencana, dan tanggal berikutnya bila ada.</div>
  <div><strong>Pilih status</strong>Gunakan Proses jika belum selesai atau Selesai jika syarat hasil sudah terpenuhi.</div>
  <div><strong>Lanjutkan ke histori follow-up</strong>Gunakan Tindak Lanjut Konseling bila proses berlanjut.</div>
</div>

## Validasi penting

- tanggal berikutnya tidak boleh sebelum tanggal Konseling;
- status Selesai mewajibkan Uraian Masalah dan Hasil/Kesepakatan;
- metadata Tahap 1 tidak diubah ketika mengisi hasil pertemuan awal.

## Delete

> [!WARNING]
> Tidak ada delete parent Konseling. Mutation yang tersedia adalah create dan update sesuai workflow.

## Export

Export hanya untuk Admin/Operator/BK dengan capability export dan mengikuti Tahun Ajaran yang dipilih.

<div class="sf-guide-links">
  <a href="./tindak-lanjut-konseling.html"><strong>Berikutnya:</strong> Tindak Lanjut Konseling</a>
  <a href="./pengaturan-form-konseling.html"><strong>Form:</strong> Pengaturan Isian</a>
</div>
