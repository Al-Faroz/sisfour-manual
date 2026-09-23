---
title: Manajemen Siswa
module: Manajemen Siswa
status: active
---

# Manajemen Siswa

Manajemen Siswa menangani perubahan keanggotaan kelas dan status lifecycle siswa secara aman. Modul ini menjaga **current membership**, **riwayat**, status siswa, dan dependency lain tetap konsisten.

## Pilih workflow yang benar

<div class="sf-grid">
  <a class="sf-card" href="./penempatan-pindah.html"><strong>Penempatan / Pindah Kelas</strong><span>Memasukkan siswa ke kelas atau memindahkan kelas pada periode aktif.</span></a>
  <a class="sf-card" href="./kenaikan-kelas.html"><strong>Kenaikan Kelas</strong><span>Promosi dari Genap ke Ganjil tahun akademik berikutnya.</span></a>
  <a class="sf-card" href="./mutasi.html"><strong>Mutasi</strong><span>Mengakhiri status aktif sebagai Pindah atau Keluar.</span></a>
  <a class="sf-card" href="./kelulusan.html"><strong>Kelulusan</strong><span>Menyelesaikan lifecycle siswa tingkat akhir.</span></a>
  <a class="sf-card" href="./restore-lifecycle.html"><strong>Restore Lifecycle</strong><span>Mengembalikan terminal state tertentu bila seluruh guard terpenuhi.</span></a>
</div>

## Prinsip utama

<ul class="sf-checklist">
  <li>workflow current-state memakai Tahun Ajaran aktif;</li>
  <li>riwayat lama tidak dihapus untuk “membersihkan” state;</li>
  <li>mutation dijalankan transactional agar membership/status/history tidak terpisah;</li>
  <li>kelas 9 tidak diproses sebagai kenaikan biasa;</li>
  <li>anti-double-process dan target periode divalidasi server.</li>
</ul>

> [!WARNING]
> Jangan mengganti status siswa atau membership langsung dari database untuk workflow normal. Gunakan service/workflow SisFour agar histori tetap sah.
