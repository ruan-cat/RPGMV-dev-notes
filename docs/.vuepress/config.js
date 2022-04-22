const nav = require('./nav.js');

/** 侧边栏插件的排序函数 */
const sortFn = (a, b) => {
  const lastA = Number(a.filename.split('-')[0]);
  const lastB = Number(b.filename.split('-')[0]);
  return lastA > lastB ? 1 : -1;
};

module.exports = {
  lang: 'zh-CN',
  title: '阮中楠的RPGMV开发笔记',
  description: '整合RMMV生态，从现在开始',

  // https://blog.csdn.net/qq_28584685/article/details/88017069
  base: '/rpgmv-dev-notes/',

  // reco主题
  theme: 'reco',

  // 默认主题
  // theme: '@vuepress/theme-default',

  head: [
    // 设置 favicon.ico，注意图片放在 public 文件夹下
    [
      'link',
      {
        rel: 'icon',
        href: 'little-alice-icon.png',
      },
    ],
  ],

  themeConfig: {
    // 目前可以导入图片 但是自己的网站不提供，可以为drillpage增加logo配置
    // logo: '/ruanCat-logo.jpg',
    nav,

    lastUpdated: '上一次更新',
    smoothScroll: true,
    sidebar: 'auto',
    /**
     * https: //vuepress-theme-reco.recoluan.com/views/1.x/sidebar.html
     * 在所有页面中启用自动生成子侧边栏， 原 sidebar 仍然兼容
     */
    subSidebar: 'auto',
    sidebarDepth: 2,

    // 搜索结果显示最大数
    searchMaxSuggestions: 10,

    // 全局作者姓名配置
    author: '阮中楠',

    valineConfig: {
      appId: 'fOpA1EMy75xXVnyBBfNopgul-9Nh9j0Va',
      appKey: '1hzgeHXNTCtDNQ9XLkPwAlN8',
      // 不显示评论 不提供评论 只使用浏览量显示功能
      showComment: false,
    },
  },

  // 代码行数配置
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },

  // 全部的插件配置
  plugins: [
    /** 侧边栏插件 */
    [
      'vuepress-plugin-auto-sidebar',
      {
        title: { mode: 'titlecase' },
        collapse: { open: true },

        // 尽量不再调整
        sidebarDepth: 2,

        // 侧边栏插件 使用自定义排序
        sort: {
          mode: 'custom',
          fn: sortFn,
        },

        // 自动生成的侧边栏文件名
        output: {
          filename: 'sidebar-auto',
        },

        ignore: [
          // 忽略 `/menu3/menu3-3/` 目录下以 `ignore-` 开头的文件
          // {
          //   menu: '/drill-api/2.6.1/',
          //   regex: '*',
          // },
        ],
      },
    ],

    // 中文名路由路径转换拼音路径 兼容reco主题
    ['permalink-pinyin', { lowercase: true, separator: '-' }],

    // https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang/
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: [
          'blackCat',
          'whiteCat',
          'haru1',
          'haru2',
          'haruto',
          'koharu',
          'izumi',
          'shizuku',
          'wanko',
          'miku',
          'z16',
        ],
        clean: false,
        messages: {
          welcome: '你好，这里是《阮中楠的RPGMV开发笔记》',
          home: '立刻闪现到主页',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '立刻关闭此内容，防止分心',
        },
        messageStyle: {
          right: '68px',
          bottom: '190px',
        },
        modelStyle: {
          right: '90px',
          bottom: '-20px',
          opacity: '0.9',
        },
        btnStyle: {
          right: '90px',
          bottom: '40px',
        },
        width: 150,
        height: 220,
      },
    ],

    /** 代码域一键复制插件
     * https: //www.npmjs.com/package/vuepress-plugin-one-click-copy
     */
    [
      'one-click-copy',
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: '复制成功',
        toolTipMessage: '复制在剪贴板内',
        duration: 1500,
      },
    ],

    // 动态标题插件 即网站标签的动态变化插件
    [
      'dynamic-title',
      {
        showText: '欢迎回来',
        hideText: '正在翻阅MDN和CSDN么？',
        recoverTime: 2000,
      },
    ],

    ['@vuepress/pwa'],

    /** 鼠标点击效果插件
     * npm i vuepress-plugin-cursor-effects -D
     */
    ['cursor-effects'],

    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      },
    ],

    ['@vuepress-reco/vuepress-plugin-loading-page'],

    // 全文搜索插件
    ['fulltext-search'],

    // 音乐播放插件
    // ['@vuepress-reco/vuepress-plugin-bgm-player', {
    //   autoplay: true,
    //   audios: [{
    //       name: "傀儡",
    //       artist: "A.LOVE",
    //       url: "/bgm/A.LOVE - 傀儡.mp3",
    //     },

    //     {
    //       name: "In the Darkness",
    //       artist: "A.LOVE",
    //       url: "/bgm/A.LOVE - In the Darkness.mp3",
    //     },

    //     {
    //       name: "Breather ( Remix)",
    //       artist: "B站-av25123096",
    //       url: "/bgm/Breather (Remix).mp3",
    //     },
    //   ]
    // }]
  ],
};
