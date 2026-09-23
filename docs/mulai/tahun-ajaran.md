# Tahun Ajaran & Periode

Banyak data SisFour memiliki konteks Tahun Ajaran.

## Pola umum

- default listing periodik = Tahun Ajaran aktif;
- Reset = kembali ke Tahun Ajaran aktif;
- histori dapat dipilih bila domain mendukung;
- export periodik mengikuti periode yang sedang dipilih;
- data baru pada domain tertentu mengambil snapshot Tahun Ajaran aktif dari server.

Dashboard current-state umumnya memakai Tahun Ajaran aktif dan tidak selalu menyediakan selector historis.

> [!NOTE]
> Tidak semua data bersifat periodik. Manual tidak akan menambahkan filter Tahun Ajaran pada fitur global/non-periodik.
