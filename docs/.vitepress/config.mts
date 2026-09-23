import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id-ID',
  title: 'Panduan SisFour',
  description: 'Panduan Pengguna SisFour — Sistem Informasi MTsN 4 Jombang',
  base: '/sisfour-manual/',
  lastUpdated: true,

  head: [
    ['meta', { name: 'theme-color', content: '#696cff' }],
    ['meta', { name: 'application-name', content: 'Panduan SisFour' }]
  ],

  themeConfig: {
    siteTitle: 'SisFour',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Cari panduan',
            buttonAriaLabel: 'Cari panduan'
          },
          modal: {
            noResultsText: 'Tidak ada hasil untuk',
            resetButtonTitle: 'Bersihkan pencarian',
            footer: {
              selectText: 'pilih',
              navigateText: 'navigasi',
              closeText: 'tutup'
            }
          }
        }
      }
    },
    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Mulai', link: '/mulai/' },
      { text: 'Role', link: '/role/' },
      { text: 'Alur Kerja', link: '/alur/' },
      { text: 'Modul', link: '/modul/' },
      { text: 'Mobile', link: '/mobile/' },
      { text: 'Bantuan', link: '/bantuan/' }
    ],
    sidebar: [
      {
        text: 'Mulai',
        collapsed: false,
        items: [
          { text: 'Ringkasan', link: '/mulai/' },
          { text: 'Tentang SisFour', link: '/mulai/tentang-sisfour' },
          { text: 'Mengakses SisFour', link: '/mulai/mengakses-sisfour' },
          { text: 'Login & Logout', link: '/mulai/login-logout' },
          { text: 'Mengenal Antarmuka', link: '/mulai/antarmuka' },
          { text: 'Tahun Ajaran & Periode', link: '/mulai/tahun-ajaran' },
          { text: 'Hak Akses Pengguna', link: '/mulai/hak-akses' }
        ]
      },
      {
        text: 'Panduan Berdasarkan Role',
        collapsed: true,
        items: [
          { text: 'Pilih Role', link: '/role/' },
          { text: 'Administrator', link: '/role/admin' },
          { text: 'Operator', link: '/role/operator' },
          { text: 'Pimpinan', link: '/role/pimpinan' },
          { text: 'BK', link: '/role/bk' },
          { text: 'Guru', link: '/role/guru' },
          { text: 'Guru + Wali Kelas', link: '/role/wali-kelas' },
          { text: 'Siswa', link: '/role/siswa' },
          { text: 'Kesehatan', link: '/role/kesehatan' },
          { text: 'PTSP', link: '/role/ptsp' }
        ]
      },
      {
        text: 'Alur Kerja',
        collapsed: true,
        items: [
          { text: 'Daftar Alur', link: '/alur/' }
        ]
      },
      {
        text: 'Modul',
        collapsed: true,
        items: [
          { text: 'Daftar Modul', link: '/modul/' },
          { text: 'Dashboard', link: '/modul/dashboard/' },
          {
            text: 'Master Data',
            collapsed: true,
            items: [
              { text: 'Ringkasan', link: '/modul/master-data/' },
              { text: 'Guru', link: '/modul/master-data/guru' },
              { text: 'Pegawai', link: '/modul/master-data/pegawai' },
              { text: 'Siswa', link: '/modul/master-data/siswa' },
              { text: 'Kelas', link: '/modul/master-data/kelas' },
              { text: 'Tahun Ajaran', link: '/modul/master-data/tahun-ajaran' },
              { text: 'Mata Pelajaran', link: '/modul/master-data/mata-pelajaran' },
              { text: 'Wali Kelas', link: '/modul/master-data/wali-kelas' },
              { text: 'Jadwal Guru', link: '/modul/master-data/jadwal-guru' }
            ]
          },
          {
            text: 'Manajemen Siswa',
            collapsed: true,
            items: [
              { text: 'Ringkasan', link: '/modul/manajemen-siswa/' },
              { text: 'Penempatan / Pindah', link: '/modul/manajemen-siswa/penempatan-pindah' },
              { text: 'Kenaikan Kelas', link: '/modul/manajemen-siswa/kenaikan-kelas' },
              { text: 'Mutasi', link: '/modul/manajemen-siswa/mutasi' },
              { text: 'Kelulusan', link: '/modul/manajemen-siswa/kelulusan' },
              { text: 'Restore Lifecycle', link: '/modul/manajemen-siswa/restore-lifecycle' }
            ]
          },
          {
            text: 'Presensi & Jurnal',
            collapsed: true,
            items: [
              { text: 'Ringkasan', link: '/modul/presensi-jurnal/' },
              { text: 'Presensi Siswa', link: '/modul/presensi-jurnal/presensi-siswa' },
              { text: 'Revisi Presensi', link: '/modul/presensi-jurnal/revisi-presensi' },
              { text: 'Jurnal Mengajar', link: '/modul/presensi-jurnal/jurnal-mengajar' }
            ]
          },
          {
            text: 'Laporan & EWS',
            collapsed: true,
            items: [
              { text: 'Ringkasan', link: '/modul/laporan-ews/' },
              { text: 'Rekap Presensi', link: '/modul/laporan-ews/rekap-presensi' },
              { text: 'Matrix Presensi', link: '/modul/laporan-ews/matrix-presensi' },
              { text: 'Laporan Jurnal', link: '/modul/laporan-ews/laporan-jurnal' },
              { text: 'EWS Internal', link: '/modul/laporan-ews/ews-internal' }
            ]
          },
          { text: 'BK & Prestasi', link: '/modul/bk-prestasi/' },
          { text: 'UKS / Kesehatan', link: '/modul/uks/' },
          { text: 'PTSP', link: '/modul/ptsp/' },
          { text: 'Kartu Pelajar', link: '/modul/kartu/' },
          { text: 'Statistik & Signage', link: '/modul/statistik-signage/' },
          { text: 'Profil & Personalia', link: '/modul/profil-personalia/' },
          { text: 'Pengaturan Sistem', link: '/modul/pengaturan-sistem/' }
        ]
      },
      {
        text: 'Aplikasi Mobile',
        collapsed: true,
        items: [
          { text: 'Android / Cordova', link: '/mobile/' }
        ]
      },
      {
        text: 'Bantuan',
        collapsed: true,
        items: [
          { text: 'Pusat Bantuan', link: '/bantuan/' },
          { text: 'FAQ', link: '/bantuan/faq' },
          { text: 'Troubleshooting', link: '/bantuan/troubleshooting' },
          { text: 'Glosarium', link: '/bantuan/glosarium' },
          { text: 'Riwayat Perubahan', link: '/bantuan/changelog' }
        ]
      },
      {
        text: 'Tentang Manual',
        collapsed: true,
        items: [
          { text: 'Sitemap', link: '/sitemap' }
        ]
      }
    ],
    outline: {
      label: 'Di halaman ini',
      level: [2, 3]
    },
    docFooter: {
      prev: 'Sebelumnya',
      next: 'Berikutnya'
    },
    lastUpdated: {
      text: 'Terakhir diperbarui'
    },
    darkModeSwitchLabel: 'Tampilan',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Kembali ke atas',
    langMenuLabel: 'Bahasa',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Al-Faroz/sisfour-manual' }
    ],
    footer: {
      message: 'Panduan Pengguna SisFour',
      copyright: 'MTsN 4 Jombang'
    }
  }
})
