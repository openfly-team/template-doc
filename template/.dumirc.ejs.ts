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
    footer: `Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a><br/><span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span></span> | <span id="busuanzi_container_site_uv">本站访客数<span id="busuanzi_value_site_uv"></span></span>`,
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
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts:
    process.env.NODE_ENV !== 'development'
      ? [{ src: '/adsbygoogle.js', async: true, crossorigin: 'anonymous' }]
      : [],
  scripts:
    process.env.NODE_ENV !== 'development'
      ? [
          {
            async: true,
            src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
          },
        ]
      : [],
});
