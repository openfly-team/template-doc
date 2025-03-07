import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['<%= logo %>'],
  autoAlias: false,
  themeConfig: {
    name: '<%= title %>',
    logo: '<%= logo %>',
    prefersColor: { default: 'auto' },
    editLink:
      'https://github.com/youngjuning/<%= name %>.js.org/edit/main/{filename}',
    socialLinks: {
      github: 'https://github.com/youngjuning/<%= name %>',
      twitter: 'https://twitter.com/luozhu2021',
    },
    hd: { rules: [] },
    footer: `Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a>`,
  },
  theme: {
    '@c-primary': '<%= theme %>',
  },
  publicPath: '/',
  // analytics: {
  // ga_v2: '',
  // },
  // sitemap: {
  // hostname: 'https://<%= name %>.js.org',
  // },
  hash: true,
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: [
    {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true, crossorigin: 'anonymous'}
  ]
});
