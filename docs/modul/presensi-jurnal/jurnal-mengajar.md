---
title: Jurnal Mengajar
module: Presensi & Jurnal
status: active
---

# Jurnal Mengajar

Jurnal Mengajar mencatat kegiatan Guru pada satu Jadwal dan tanggal. Semua jenis sesi Jadwal, termasuk Non Sesi, dapat mempunyai Jurnal.

## Isi Jurnal

Urutan form canonical:

1. Informasi Kelas / Mapel / Jam;
2. Status Guru;
3. Materi atau Keterangan — wajib;
4. Catatan — opsional;
5. Siswa Tidak Mengikuti Pembelajaran;
6. Simpan Jurnal.

Status Guru:

- Hadir;
- Izin;
- Sakit.

## Mengisi Jurnal

<div class="sf-flow">
  <div><strong>Buka Jadwal yang akan dijurnal</strong>Guru memakai Jadwal yang sah sesuai scope dan waktu.</div>
  <div><strong>Pilih status Guru</strong>Gunakan Hadir, Izin, atau Sakit.</div>
  <div><strong>Isi Materi</strong>Materi wajib diisi; Catatan tambahan bersifat opsional.</div>
  <div><strong>Tambahkan exception siswa bila perlu</strong>Cari siswa berdasarkan nama, lalu pilih status S/I/A secara eksplisit.</div>
  <div><strong>Periksa ringkasan</strong>Pastikan jumlah S, I, A sesuai daftar exception.</div>
  <div><strong>Simpan</strong>Parent Jurnal dan daftar exception diproses sebagai satu transaksi.</div>
</div>

## Exception siswa

Child Jurnal hanya menyimpan siswa yang tidak mengikuti pembelajaran:

- Sakit;
- Izin;
- Alpha.

Tidak ada status Hadir pada daftar exception. Tidak adanya row child hanya berarti **tidak ada exception yang dicatat pada Jurnal**, bukan klaim bahwa siswa hadir secara Presensi resmi.

Contoh yang valid:

- Presensi Sesi Awal: Andi = Hadir;
- Jurnal Matematika: Andi = Alpha.

Artinya Andi hadir ke sekolah tetapi tidak mengikuti pembelajaran Matematika yang dicatat Guru.

## Saat status Guru Izin atau Sakit

Daftar exception siswa harus kosong. Bila Anda mengubah status Guru dari Hadir menjadi Izin/Sakit, UI dapat meminta konfirmasi sebelum mengosongkan daftar siswa.

## Roster historis

Siswa yang dapat dipilih mengikuti roster kelas pada **tanggal Jurnal**. Revisi historis memakai riwayat agar perpindahan kelas setelah tanggal tersebut tidak merusak roster lama.

## Geofence dan time window

Status Guru Hadir mengikuti geofence bila setting aktif. Status Izin/Sakit tidak memerlukan lokasi, tetapi actor tetap dapat terikat time-window sesuai Service.

## Jika save gagal

Status, Materi, Catatan, dan daftar exception harus tetap terlihat agar dapat diperiksa dan dikirim ulang secara sadar. Tidak ada background replay otomatis.

> [!WARNING]
> Jangan memakai exception Jurnal untuk “memperbaiki” Presensi resmi. Gunakan workflow Presensi/Revisi Presensi jika data kehadiran resmi yang salah.

<div class="sf-guide-links">
  <a href="../laporan-ews/laporan-jurnal.html"><strong>Lihat hasil:</strong> Laporan Jurnal</a>
  <a href="./presensi-siswa.html"><strong>Presensi resmi:</strong> Presensi Siswa</a>
</div>
