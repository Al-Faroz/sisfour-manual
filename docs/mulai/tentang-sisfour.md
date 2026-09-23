---
title: Tentang SisFour
status: active
---

# Tentang SisFour

**SisFour** adalah Sistem Informasi Manajemen MTsN 4 Jombang yang menyatukan kegiatan akademik, presensi, monitoring, BK, UKS/Kesehatan, PTSP, Kartu Pelajar, personalia, pelaporan, dan self-service pengguna.

## Siapa yang menggunakan SisFour?

SisFour melayani beberapa role resmi:

- Administrator;
- Operator;
- Pimpinan;
- BK;
- Guru;
- Siswa;
- Kesehatan;
- PTSP.

Guru yang memiliki mapping Wali Kelas mendapat **konteks Wali**, bukan role baru.

## Surface aplikasi

| Surface | Kegunaan |
|---|---|
| Web authenticated | Pekerjaan internal sesuai role dan permission |
| Public PTSP | Pengajuan layanan, pengaduan anonim, dan polling yang memang public |
| EWS Signage | Monitoring ringkas yang boleh ditampilkan secara publik |
| API | Mendukung fungsi aplikasi sesuai contract server |
| Android/Cordova | Menggunakan UI web yang sama; dokumentasi khusus ditambahkan pada G4 |

## Prinsip yang penting diketahui

<ul class="sf-checklist">
  <li>Menu dapat berbeda antar pengguna karena mengikuti hak akses.</li>
  <li>Data periodik biasanya memakai Tahun Ajaran sebagai context.</li>
  <li>Wali Kelas adalah context Guru dan dapat berubah menurut Tahun Ajaran.</li>
  <li>Data rahasia seperti Konseling BK tidak dibuka hanya karena menu lain terlihat.</li>
  <li>Versi mobile tidak mengubah business rule atau hak akses.</li>
</ul>

## Apa yang dibahas manual ini?

Manual ini menjelaskan **cara memakai SisFour**. Konfigurasi server, source code, database, dan deployment tetap berada di dokumentasi teknis proyek.

<div class="sf-guide-links">
  <a href="./mengakses-sisfour.html"><strong>Berikutnya:</strong> Mengakses SisFour</a>
  <a href="../role/"><strong>Sudah mengenal aplikasi?</strong> Pilih role Anda</a>
</div>
