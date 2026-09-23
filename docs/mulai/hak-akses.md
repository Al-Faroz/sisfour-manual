# Hak Akses Pengguna

SisFour memakai role, permission/capability, scope, periode, dan validasi target untuk menentukan akses.

## Role resmi

- Admin
- Operator
- Pimpinan
- BK
- Guru
- Siswa
- Kesehatan
- PTSP

**Wali Kelas adalah konteks Guru**, bukan role baru. Satu akun juga dapat memiliki lebih dari satu effective role.

## Hal penting

Menu hanya membantu navigasi. Hak akses final tetap ditentukan route/filter dan service di server.

Contoh scope yang digunakan aplikasi mencakup seluruh data, kelas yang diampu/terjadwal, kelas wali, diri sendiri, atau domain/unit tertentu.
