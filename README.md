# SisFour Manual

Panduan Pengguna SisFour — Sistem Informasi MTsN 4 Jombang.

## Status

Repository ini khusus untuk website panduan pengguna SisFour.

Target publikasi:

`https://al-faroz.github.io/sisfour-manual/`

M0–M2 sudah menyiapkan **VitePress 1.6.4**, sitemap, visual shell, panduan Mulai, role guides, local search, dan konten berbasis Markdown. GitHub Pages belum diaktifkan; workflow deployment baru akan ditambahkan setelah review dan approval.

## Pengembangan lokal

```bash
npm install
npm run docs:dev
```

Build:

```bash
npm run docs:build
npm run docs:preview
```

## Struktur utama

- `docs/mulai/` — pengenalan dan penggunaan awal.
- `docs/role/` — panduan berdasarkan role/konteks pengguna.
- `docs/alur/` — panduan berbasis alur kerja.
- `docs/modul/` — referensi fitur per modul.
- `docs/mobile/` — panduan khusus aplikasi Android/Cordova.
- `docs/bantuan/` — FAQ dan troubleshooting.
- `MASTERPLAN_MANUAL_SISFOUR.md` — acuan pengerjaan manual.
