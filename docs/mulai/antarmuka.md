---
title: Mengenal Antarmuka
status: active
---

# Mengenal Antarmuka

SisFour authenticated menggunakan layout responsif yang menyesuaikan desktop, tablet, dan mobile.

## Bagian utama

| Bagian | Fungsi |
|---|---|
| Sidebar | Navigasi ke menu yang tersedia untuk akun |
| Navbar | Toggle mobile, context/judul, serta area user/profile |
| Dashboard | Ringkasan pekerjaan atau monitoring sesuai role |
| Filter | Membatasi data, termasuk Tahun Ajaran pada surface periodik |
| Tabel / list / card | Menampilkan data sesuai kebutuhan dan ukuran layar |
| Modal / form | Membuat atau memperbarui data jika capability tersedia |
| Notifikasi | Menampilkan hasil sukses, warning, atau error |

## Sidebar

Sidebar adalah **navigasi**, bukan bukti final bahwa suatu tindakan diizinkan. Saat Anda membuka URL atau mengirim perubahan, server tetap memeriksa authorization.

## Dashboard

Dashboard tidak dimaksudkan sebagai laporan lengkap. Untuk role operasional, dashboard biasanya menampilkan KPI ringkas, quick action, dan 3–5 item terbaru/penting dengan tautan **Lihat Semua**.

## State yang perlu dibedakan

SisFour membedakan:

- **Loading** — data sedang diambil;
- **Belum ada data** — record memang belum ada;
- **Tidak ada data pada filter** — record tidak cocok dengan filter;
- **Tidak tersedia karena akses** — capability tidak diberikan;
- **Sesi berakhir** — perlu login kembali;
- **Network gagal** — request tidak dapat diselesaikan.

> [!NOTE]
> Nilai nol tidak dipakai sebagai pengganti data yang sebenarnya tidak tersedia atau tidak boleh diakses.

## Mobile

Pada layar sempit, tabel operasional dapat berubah menjadi card/list, filter dapat ditumpuk, dan secondary action dapat dipadatkan. Hak akses dan business rule tetap sama.

<div class="sf-guide-links">
  <a href="./tahun-ajaran.html"><strong>Berikutnya:</strong> Tahun Ajaran & Periode</a>
  <a href="../role/"><strong>Lihat pengalaman:</strong> Pilih role</a>
</div>
