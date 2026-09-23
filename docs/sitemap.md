# Sitemap Manual SisFour

Sitemap ini adalah struktur target manual pengguna. Halaman detail diaktifkan bertahap sesuai milestone, tetapi penamaan domain dan pengelompokannya dikunci dari source/SSOT SisFour.

## 1. Mulai

- `/mulai/tentang-sisfour` — Tentang SisFour
- `/mulai/mengakses-sisfour` — Mengakses SisFour
- `/mulai/login-logout` — Login & Logout
- `/mulai/antarmuka` — Mengenal Antarmuka
- `/mulai/tahun-ajaran` — Tahun Ajaran & Periode
- `/mulai/hak-akses` — Hak Akses, Role, Scope, dan konteks Wali

## 2. Panduan berdasarkan role

- `/role/admin`
- `/role/operator`
- `/role/pimpinan`
- `/role/bk`
- `/role/guru`
- `/role/wali-kelas`
- `/role/siswa`
- `/role/kesehatan`
- `/role/ptsp`

Wali Kelas tetap konteks Guru, bukan role baru.

## 3. Alur kerja

Target halaman:

- Persiapan awal tahun ajaran
- Persiapan semester
- Penempatan / pindah kelas
- Kenaikan kelas
- Kelulusan
- Presensi siswa
- Jurnal mengajar
- Rekap, Matrix, dan EWS
- Penanganan Catatan Pelanggaran
- Konseling dan tindak lanjut
- Pencatatan Prestasi
- Pelayanan UKS
- Pelayanan PTSP
- Penerbitan Kartu Pelajar
- Monitoring Statistik dan EWS Signage

## 4. Modul

### Dashboard

- Dashboard sesuai role/experience
- Quick action dan current-state Tahun Ajaran aktif

### Master Data

- Guru
- Pegawai
- Siswa
- Kelas
- Tahun Ajaran / Semester
- Mata Pelajaran
- Mapping Wali Kelas
- Jadwal Guru

### Manajemen Siswa

- Penempatan / pindah kelas
- Kenaikan kelas
- Mutasi
- Kelulusan
- Restore lifecycle terminal bila tersedia sesuai capability

### Presensi & Jurnal

- Presensi Siswa — Sesi Awal
- Presensi Siswa — Sesi Akhir
- Revisi Presensi
- Presensi Mengajar / Jurnal
- Exception siswa pada jurnal

### Laporan & EWS

- Rekap Presensi
- Matrix Presensi
- Laporan Jurnal
- EWS internal
- Export sesuai permission

### BK & Prestasi

- Master Pelanggaran
- Catatan Pelanggaran Siswa
- Tindak Lanjut Pelanggaran
- Konseling BK
- Tindak Lanjut Konseling
- Pengaturan Form Konseling
- Prestasi Siswa

### UKS / Kesehatan

- Data CKG
- Import CKG
- Catatan Harian UKS
- Master UKS
- Export UKS sesuai permission

### PTSP

- Public landing
- Form Layanan
- Form Pengaduan
- Form Polling Kepuasan
- Administrasi Layanan
- Administrasi Pengaduan
- Administrasi Polling
- Export
- Statistik publik agregat

### Kartu Pelajar

- Daftar Kartu
- Preview
- Cetak / Download
- Reissue
- Verifikasi publik
- Export JPG per kelas bila tersedia sesuai permission

### Statistik & Signage

- Statistik eksekutif
- Export PDF
- EWS Signage publik
- Ringkasan kehadiran
- EWS Presensi
- Kelas belum presensi
- Jadwal belum jurnal

### Profil & Personalia

- Profil Guru
- Profil Pegawai
- Profil Siswa
- Personalia self-service
- Dokumen personalia
- Portofolio

### Pengaturan Sistem

- Pengguna
- Menu
- Pengaturan Sistem
- Maintenance
- Backup
- Log Aktivitas

## 5. Aplikasi Mobile

Konten bisnis memakai halaman yang sama dengan web. Bagian khusus mobile akan memuat:

- Instalasi APK
- Login/session
- Navigasi dan Android Back
- Keyboard / safe area
- Izin perangkat
- Download / share / file
- Link eksternal
- Jaringan / offline
- Update aplikasi

## 6. Bantuan

- FAQ
- Troubleshooting
- Glosarium
- Riwayat perubahan manual

## 7. Aturan navigasi

Satu fitur mempunyai satu halaman canonical. Panduan role dan alur kerja mengarahkan pengguna ke halaman fitur canonical, bukan menduplikasi seluruh instruksi.
