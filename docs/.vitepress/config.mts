import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'id-ID',
  title: 'Panduan SisFour',
  description: 'Panduan Pengguna SisFour — Sistem Informasi MTsN 4 Jombang',
  base: '/sisfour-manual/',
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'SisFour',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Beranda', link: '/' },
      { text: 'Mulai', link: '/mulai/' },
      { text: 'Role', link: '/role/' },
      { text: 'Alur Kerja', link: '/alur/' },
      { text: 'Modul', link: '/modul/' },
      { text: 'Bantuan', link: '/bantuan/' }
    ],
    sidebar: [
      {
        text: 'Mulai',
        items: [
          { text: 'Ringkasan', link: '/mulai/' }
        ]
      },
      {
        text: 'Panduan Berdasarkan Role',
        items: [
          { text: 'Ringkasan Role', link: '/role/' }
        ]
      },
      {
        text: 'Alur Kerja',
        items: [
          { text: 'Ringkasan Alur', link: '/alur/' }
        ]
      },
      {
        text: 'Modul',
        items: [
          { text: 'Ringkasan Modul', link: '/modul/' }
        ]
      },
      {
        text: 'Aplikasi Mobile',
        items: [
          { text: 'Android / Cordova', link: '/mobile/' }
        ]
      },
      {
        text: 'Bantuan',
        items: [
          { text: 'Pusat Bantuan', link: '/bantuan/' }
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Al-Faroz/sisfour-manual' }
    ],
    footer: {
      message: 'Panduan Pengguna SisFour',
      copyright: 'MTsN 4 Jombang'
    }
  }
})
