---
title: Mapping Wali Kelas
module: Master Data
status: active
---

# Mapping Wali Kelas

Mapping Wali Kelas menghubungkan Guru dengan satu kelas pada Tahun Ajaran tertentu. Wali adalah **context Guru**, bukan role.

## Aturan utama

Pada satu Tahun Ajaran:

- satu Guru maksimal menjadi Wali untuk satu kelas aktif;
- satu Kelas maksimal mempunyai satu Wali aktif;
- kelas harus berasal dari Tahun Ajaran target.

## Assign Wali

<div class="sf-flow">
  <div><strong>Pastikan Tahun Ajaran</strong>Default adalah periode aktif.</div>
  <div><strong>Pilih kelas</strong>Gunakan kelas dari periode yang sedang dipilih.</div>
  <div><strong>Pilih Guru</strong>Pastikan Guru belum mempunyai mapping aktif lain yang konflik.</div>
  <div><strong>Simpan</strong>Server memvalidasi uniqueness dan period context.</div>
  <div><strong>Verifikasi</strong>Pastikan kelas menampilkan Wali yang benar.</div>
</div>

## Mengganti Wali

Jangan menimpa histori secara sembarang. Pola canonical adalah:

1. nonaktifkan Wali lama;
2. pertahankan histori;
3. assign Wali baru.

> [!NOTE]
> Scope Guru+Wali pada laporan, EWS, UKS, dan fitur contextual lain dapat mengikuti mapping pada Tahun Ajaran yang sedang dibaca.
