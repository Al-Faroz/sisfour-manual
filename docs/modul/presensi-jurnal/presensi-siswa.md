---
title: Presensi Siswa
module: Presensi & Jurnal
status: active
---

# Presensi Siswa

Presensi Siswa adalah sumber kehadiran resmi sekolah.

## Siapa yang dapat menginput?

| Actor | Input |
|---|---|
| Admin | seluruh target sesuai capability |
| Operator | seluruh target sesuai capability |
| Guru terjadwal | sesuai Jadwal dan rule |
| Wali Kelas | kelas wali sesuai rule |
| Pimpinan | tidak menginput |
| BK | tidak menginput |
| Siswa | tidak menginput |

Authorization final tetap diputuskan server.

## Cara input Presensi

Default UI seluruh siswa adalah **Hadir**. Pengguna hanya perlu mengubah siswa yang Sakit, Izin, atau Alpha.

<div class="sf-flow">
  <div><strong>Buka Presensi Siswa</strong>Pilih workflow yang tersedia dari Dashboard/Jadwal atau menu Presensi.</div>
  <div><strong>Pastikan kelas dan sesi</strong>Periksa kelas target serta Sesi Awal atau Sesi Akhir.</div>
  <div><strong>Periksa daftar siswa</strong>Nama menjadi identitas utama; identifier dipakai jika perlu verifikasi.</div>
  <div><strong>Ubah exception</strong>Ganti status dari Hadir hanya untuk siswa Sakit, Izin, atau Alpha.</div>
  <div><strong>Simpan sekali</strong>Gunakan tombol simpan dan tunggu konfirmasi server.</div>
  <div><strong>Verifikasi hasil</strong>Pastikan status tersimpan dan UI menampilkan success.</div>
</div>

## Geofencing

Jika geofencing aktif, browser meminta lokasi ketika save memang membutuhkannya. Server yang menentukan apakah posisi berada dalam radius sekolah.

> [!NOTE]
> Mengaktifkan GPS di browser tidak berarti Presensi otomatis sah. Validasi lokasi, waktu, jadwal, scope, membership, dan sesi tetap dilakukan server.

## Bulk dan transaction

Satu submit kelas diproses atomically. Bila salah satu validasi gagal, mutation tidak dianggap sukses.

UI harus mencegah double-submit dan mempertahankan pilihan status ketika network/save gagal.

## Mobile

Pada portrait mobile, pola utama adalah:

**Nama Siswa → tombol H / S / I / A**

NISN tidak menjadi kolom rutin agar status tetap mudah dijangkau pada layar 360px.

## Sesi Awal dan Sesi Akhir

Sesi Awal masuk Rekap, Matrix, EWS, Signage, dan statistik resmi. Sesi Akhir berfungsi sebagai dokumentasi tambahan dan tidak menggantikan sumber resmi tersebut.

<div class="sf-guide-links">
  <a href="./revisi-presensi.html"><strong>Record salah?</strong> Revisi Presensi</a>
  <a href="../laporan-ews/rekap-presensi.html"><strong>Lihat hasil:</strong> Rekap Presensi</a>
</div>
