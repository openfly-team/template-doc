import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ['<%= logo %>'],
  autoAlias: false,
  themeConfig: {
    name: '<%= title %>',
    logo: '<%= logo %>',
    prefersColor: { default: 'auto' },
    editLink:
      'https://github.com/youngjuning/<%= name %>/edit/main/{filename}',
    socialLinks: {
      github: 'https://github.com/youngjuning/<%= name %>',
      twitter: 'https://twitter.com/luozhu2021',
    },
    hd: { rules: [] },
    footer: `
<div>Made with ❤️ by <a href="https://github.com/youngjuning" target="_blank">紫升</a></div>
<div>
  本页访问量 <span id="busuanzi_value_page_pv"></span> | 本站总访问量 <span id="busuanzi_value_site_pv"></span> | 本站总访人数 <span id="busuanzi_value_site_uv"></span>
</div>`,
  },
  theme: {
    '@c-primary': '<%= theme %>',
  },
  publicPath: '/',
  // analytics: {
  // ga_v2: '',
  // },
  // sitemap: {
  // hostname: 'https://<%= name %>.zisheng.pro',
  // },
  hash: true,
  exportStatic: {},
  ...(process.env.NODE_ENV === 'development' ? {} : { ssr: {} }),
  headScripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      crossorigin: 'anonymous',
    },
    {
      src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
      async: true,
    },
  ],
});
