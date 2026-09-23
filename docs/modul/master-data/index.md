---
title: Master Data
module: Master Data
status: active
---

# Master Data

Master Data menjadi fondasi hampir seluruh proses SisFour. Perubahan di sini dapat memengaruhi jadwal, Presensi, Jurnal, lifecycle siswa, BK, UKS, Kartu Pelajar, dan laporan.

## Sebelum mengubah data

<ul class="sf-checklist">
  <li>pastikan Anda mempunyai permission yang sesuai;</li>
  <li>pastikan Tahun Ajaran benar pada halaman yang bersifat periodik;</li>
  <li>utamakan pencarian berdasarkan nama, lalu gunakan identifier untuk verifikasi;</li>
  <li>jangan menghapus permanen data yang masih mempunyai histori atau dependency;</li>
  <li>gunakan workflow resmi jika perubahan berkaitan dengan status atau kelas siswa.</li>
</ul>

## Bagian Master Data

<div class="sf-grid">
  <a class="sf-card" href="./guru.html"><strong>Guru</strong><span>Identitas Guru dan data dasar yang dipakai jadwal serta aktivitas akademik.</span></a>
  <a class="sf-card" href="./pegawai.html"><strong>Pegawai</strong><span>Identitas Pegawai untuk role berbasis Pegawai seperti BK, Kesehatan, dan PTSP.</span></a>
  <a class="sf-card" href="./siswa.html"><strong>Siswa</strong><span>Data dasar siswa dan context status/kelas.</span></a>
  <a class="sf-card" href="./kelas.html"><strong>Kelas</strong><span>Master kelas serta context keanggotaan per periode.</span></a>
  <a class="sf-card" href="./tahun-ajaran.html"><strong>Tahun Ajaran</strong><span>Periode operasional dan workflow Siapkan Genap.</span></a>
  <a class="sf-card" href="./mata-pelajaran.html"><strong>Mata Pelajaran</strong><span>Kode dan nama Mapel yang dipakai Jadwal.</span></a>
  <a class="sf-card" href="./wali-kelas.html"><strong>Wali Kelas</strong><span>Mapping Guru–Kelas menurut Tahun Ajaran.</span></a>
  <a class="sf-card" href="./jadwal-guru.html"><strong>Jadwal Guru</strong><span>Jadwal mengajar, sesi, waktu, dan import.</span></a>
</div>

## Aturan Tahun Ajaran

Master Siswa, Kelas, Mapping Wali, dan Jadwal Guru default ke Tahun Ajaran aktif. Histori dapat dipilih pada surface yang mendukung. Master Tahun Ajaran sendiri menampilkan seluruh periode karena halaman tersebut mengelola lifecycle periode.

> [!IMPORTANT]
> Mengedit Master Siswa bukan pengganti workflow Penempatan, Kenaikan Kelas, Mutasi, atau Kelulusan. Gunakan [Manajemen Siswa](/modul/manajemen-siswa/) untuk perubahan lifecycle.
