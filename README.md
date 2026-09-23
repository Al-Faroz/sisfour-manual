# SisFour Manual

Panduan Pengguna SisFour — Sistem Informasi MTsN 4 Jombang.

## Status

Repository ini khusus untuk website panduan pengguna SisFour.

Target publikasi:

`https://al-faroz.github.io/sisfour-manual/`

Fondasi menggunakan **VitePress 1.6.4** dengan konten berbasis Markdown. Deployment GitHub Pages belum diaktifkan pada tahap fondasi; workflow deployment akan ditambahkan setelah struktur dan tampilan awal direview.

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
