import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Harry Plot Twist",
  description: "Comics and stuff",
  base: '/harry-plot-twist/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Comics', link: '/comics' },
      { text: 'Security', link: '/security/' }
    ],

    sidebar: [
      {
        text: 'Comics',
        items: [
          { text: 'Introduction', link: '/comics' },
          { text: 'Latest', link: '/latest' }
        ]
      },
      {
        text: 'Security Comics',
        items: [
          { text: 'Overview', link: '/security/' },
          { text: 'FishFace XSS', link: '/security/xss/' },
          { text: 'Broken Access Control', link: '/security/access-control/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leewinter/harry-plot-twist' }
    ]
  }
})
