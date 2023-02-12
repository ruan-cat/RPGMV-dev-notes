import { hopeTheme } from 'vuepress-theme-hope';
import { zhNavbar } from './navbar/index.js';
import { zhSidebar } from './sidebar/index.js';

export default hopeTheme({
  // hostname: 'https://mister-hope.github.io',
  // hostname: 'https://www.ruan-cat.com/',
  // 尝试移除底部的斜线
  hostname: 'https://www.ruan-cat.com',

  fullscreen: true,
  // 开发模式下是否启动热更新，显示所有更改并重新渲染
  hotReload: true,

  author: {
    name: '阮喵喵',
    url: 'https://github.com/RuanZhongNan',
  },

  iconAssets: 'iconfont',

  // logo: '/logo.svg',
  logo: undefined,

  repo: 'vuepress-theme-hope/vuepress-theme-hope',

  docsDir: 'docs',

  blog: {
    medias: {
      BiliBili: 'https://space.bilibili.com/359907572',
      Gitee: 'https://gitee.com/HechiCollegeComputerAssociation',
      GitHub: 'https://github.com/RuanZhongNan',

      // TODO: 等待应用使用
      // Steam: 'https://example.com',
      // Wechat: 'https://example.com',
      // Weibo: 'https://example.com',
      // Zhihu: 'https://example.com',
    },
  },

  themeColor: {
    blue: '#2196f3',
    red: '#f26d6d',
    green: '#3eaf7c',
    orange: '#fb9b5f',
  },

  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: '默认页脚',
      displayFooter: true,
      blog: {
        description: '一个前端开发者',
        intro: '/zh/intro.html',
      },

      // page meta
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
  },

  encrypt: {
    config: {
      '/demo/encrypt.html': ['1234'],
      '/zh/demo/encrypt.html': ['1234'],
    },
  },

  // navbarLayout: {
  //   start: ['Brand'],
  //   center: ['Links'],
  //   end: ['Language', 'Repo', 'Outlook', 'Search'],
  // },

  plugins: {
    // 目前暂时不考虑使用博客风格 未来拆分出项目笔记后再考虑
    blog: false,

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: 'Giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69',

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don’t want here
    // mdEnhance: {
    //   align: true,
    //   attrs: true,
    //   chart: true,
    //   codetabs: true,
    //   container: true,
    //   demo: true,
    //   echarts: true,
    //   figure: true,
    //   flowchart: true,
    //   gfm: true,
    //   imgLazyload: true,
    //   imgSize: true,
    //   include: true,
    //   katex: true,
    //   mark: true,
    //   mermaid: true,
    //   playground: {
    //     presets: ['ts', 'vue'],
    //   },
    //   presentation: {
    //     plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
    //   },
    //   stylize: [
    //     {
    //       matcher: 'Recommended',
    //       replacer: ({ tag }) => {
    //         if (tag === 'em')
    //           return {
    //             tag: 'Badge',
    //             attrs: { type: 'tip' },
    //             content: 'Recommended',
    //           };
    //       },
    //     },
    //   ],
    //   sub: true,
    //   sup: true,
    //   tabs: true,
    //   vPre: true,
    //   vuePlayground: true,
    // },

    // 禁用不需要的配置
    mdEnhance: {
      align: true,
      attrs: true, // 使用特殊标记为 Markdown 元素添加属性
      container: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      figure: true,
      include: true, //导入文件
      mark: true,
      footnote: true,
      tasklist: true,
      sub: true, // 上下角标
      sup: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
