---
title: Hak Akses Pengguna
status: active
---

# Hak Akses Pengguna

SisFour tidak menentukan akses hanya dari nama role atau menu yang terlihat. Server mengevaluasi beberapa lapisan.

## Urutan keputusan akses

<div class="sf-flow">
  <div><strong>Effective Role</strong>Role utama dan role tambahan akun dihitung.</div>
  <div><strong>Access Boundary</strong>Apakah role tersebut memang termasuk pengguna domain.</div>
  <div><strong>Permission / Capability</strong>Apakah aksi view/manage/export/settings diberikan.</div>
  <div><strong>Scope</strong>Data mana yang boleh dibaca atau diubah.</div>
  <div><strong>Period & Target</strong>Tahun Ajaran dan target record divalidasi.</div>
  <div><strong>Business Rule</strong>Aturan domain tetap berlaku walaupun pengguna memiliki permission.</div>
</div>

## Role resmi

| Role / context | Karakter utama |
|---|---|
| Admin | Kontrol sistem dan operasional luas sesuai permission |
| Operator | Administrasi operasional luas sesuai permission |
| Pimpinan | Monitoring/read-only sesuai domain dan permission |
| BK | Domain BK, EWS, dan Prestasi |
| Guru | Jadwal, Presensi, Jurnal, Profile sesuai scope |
| Guru + Wali | Guru + scope contextual kelas wali |
| Siswa | Self-service/read-only atas diri sendiri pada domain yang diberikan |
| Kesehatan | Full Access domain UKS |
| PTSP | Full Access domain PTSP |

## Scope yang umum

- **SEMUA** — seluruh data domain yang sah;
- **KELAS_DIAMPU** — kelas yang diampu;
- **KELAS_TERJADWAL** — kelas pada jadwal yang sah;
- **KELAS_WALI** — kelas wali sesuai periode;
- **DIRI_SENDIRI** — hanya identity login;
- **UNIT / DOMAIN KHUSUS** — domain tertentu;
- **TIDAK_ADA** — tidak mempunyai data scope.

## Mengapa menu saya berbeda?

Menu mengikuti access boundary dan permission sebagai bantuan navigasi. Hidden menu bukan security control, dan URL langsung tetap diperiksa server.

> [!IMPORTANT]
> “Full Access UKS” atau “Full Access PTSP” hanya berlaku di domain tersebut. Itu tidak otomatis membuka seluruh SisFour.

<div class="sf-guide-links">
  <a href="../role/"><strong>Selanjutnya:</strong> Pilih panduan role Anda</a>
  <a href="../modul/"><strong>Atau:</strong> Buka panduan per modul</a>
</div>
