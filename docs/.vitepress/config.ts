import { defineConfig } from 'vitepress'

//TODO: disable dark-light mode switch?

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ruslan Φ. (Russoul)",
  description: "Russoul's blog",
  base: "/",
  themeConfig: {
    logo: '/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/docs/about' },
      { text: 'Type-Theory', link: '/docs/type-theory-index' },
      { text: 'Bodybuilding', link: '/docs/bodybuilding-index' }
    ],

    sidebar: [
      {
        text: 'Type-Theory',
        items: [
          { text: 'Introduction', link: '/docs/type-theory/introduction'},
          { text: 'Extensional MLTT', link: '/docs/type-theory/ExtMLTT' }
        ]
      }
      ,
      {
        text: 'Bodybuilding',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Russoul'}
      ,
      {icon: 'instagram', link: 'https://www.instagram.com/russoulme'}
    ]
  }
})
