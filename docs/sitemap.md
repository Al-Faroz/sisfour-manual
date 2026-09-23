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

- `/modul/dashboard/` — Dashboard sesuai role/experience
- Quick Action dan current-state Tahun Ajaran aktif

### Master Data

- `/modul/master-data/guru` — Guru
- `/modul/master-data/pegawai` — Pegawai
- `/modul/master-data/siswa` — Siswa
- `/modul/master-data/kelas` — Kelas
- `/modul/master-data/tahun-ajaran` — Tahun Ajaran / Semester
- `/modul/master-data/mata-pelajaran` — Mata Pelajaran
- `/modul/master-data/wali-kelas` — Mapping Wali Kelas
- `/modul/master-data/jadwal-guru` — Jadwal Guru

### Manajemen Siswa

- `/modul/manajemen-siswa/penempatan-pindah` — Penempatan / pindah kelas
- `/modul/manajemen-siswa/kenaikan-kelas` — Kenaikan kelas
- `/modul/manajemen-siswa/mutasi` — Mutasi
- `/modul/manajemen-siswa/kelulusan` — Kelulusan
- `/modul/manajemen-siswa/restore-lifecycle` — Restore lifecycle terminal

### Presensi & Jurnal

- `/modul/presensi-jurnal/presensi-siswa` — Presensi Siswa Sesi Awal/Sesi Akhir
- `/modul/presensi-jurnal/revisi-presensi` — Revisi Presensi
- `/modul/presensi-jurnal/jurnal-mengajar` — Presensi Mengajar / Jurnal + exception siswa

### Laporan & EWS

- `/modul/laporan-ews/rekap-presensi` — Rekap Presensi
- `/modul/laporan-ews/matrix-presensi` — Matrix Presensi
- `/modul/laporan-ews/laporan-jurnal` — Laporan Jurnal
- `/modul/laporan-ews/ews-internal` — EWS internal
- Export mengikuti permission dan Tahun Ajaran terpilih

### BK & Prestasi

- `/modul/bk-prestasi/master-pelanggaran` — Master Pelanggaran
- `/modul/bk-prestasi/catatan-pelanggaran` — Catatan Pelanggaran Siswa
- `/modul/bk-prestasi/tindak-lanjut-pelanggaran` — Tindak Lanjut Pelanggaran
- `/modul/bk-prestasi/konseling` — Konseling BK
- `/modul/bk-prestasi/tindak-lanjut-konseling` — Tindak Lanjut Konseling
- `/modul/bk-prestasi/pengaturan-form-konseling` — Pengaturan Form Konseling
- `/modul/bk-prestasi/prestasi` — Prestasi Siswa
- `/modul/bk-prestasi/ews-bk` — EWS untuk BK

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
