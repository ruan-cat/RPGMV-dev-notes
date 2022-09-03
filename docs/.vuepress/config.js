const nav = require('./nav.js');

const {
  readFileList,
  readTotalFileWords,
  readEachFileWords,
} = require('./webSiteInfo/readFile');

module.exports = {
  lang: 'zh-CN',
  title: '阮喵喵的rmmv开发笔记',
  description: '前端流行技术在rmmv的实战应用开发经验总结',

  // https://blog.csdn.net/qq_28584685/article/details/88017069
  // base: '/rpgmv-dev-notes/',
  base: '/',

  // reco主题
  // theme: 'reco',
  // 默认主题
  // theme: '@vuepress/theme-default',
  // reco主题
  theme: 'vdoing',

  // 重新指定端口号 尽可能不要占用8080端口
  port: 6312,

  head: [
    // 设置 favicon.ico，注意图片放在 public 文件夹下
    ['link', { rel: 'icon', href: 'little-alice-icon.png' }],
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css',
      },
    ],
  ],

  themeConfig: {
    // 目前可以导入图片 但是自己的网站不提供，可以为drillpage增加logo配置
    // logo: '/ruanCat-logo.jpg',
    nav,

    // 全局作者姓名配置
    author: '阮中楠',

    lastUpdated: '上一次更新',
    smoothScroll: true,
    sidebar: {
      mode: 'structuring',
      collapsable: true,
    },
    /**
     * https: //vuepress-theme-reco.recoluan.com/views/1.x/sidebar.html
     * 在所有页面中启用自动生成子侧边栏， 原 sidebar 仍然兼容
     */
    subSidebar: 'auto',
    sidebarDepth: 2,
    // 右侧文章大纲栏 这里设计成左侧全部的侧边栏 临时使用
    // rightMenuBar: false,

    // 搜索结果显示最大数
    searchMaxSuggestions: 30,
    // 搜索栏预设值
    searchPlaceholder: '按下 𝑺 搜索',

    // 是否打开分类功能？ 默认true
    category: false,
    // 是否打开标签功能？ 默认true
    tag: false,
    // 是否打开归档功能？ 默认true
    archive: false,
    // 文章内容块的背景底纹 方格
    contentBgStyle: 1,

    // 最近更新栏
    updateBar: {
      // 不显示
      showToArticle: false,
    },

    valineConfig: {
      appId: 'fOpA1EMy75xXVnyBBfNopgul-9Nh9j0Va',
      appKey: '1hzgeHXNTCtDNQ9XLkPwAlN8',
      // 不显示评论 不提供评论 只使用浏览量显示功能
      showComment: false,
    },

    blogInfo: {
      blogCreate: '2021-10-19', // 博客创建时间
      indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([''], 300, 160), // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: 'archives', // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: 'archives', // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: '.tags-wrapper', // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500, // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
  },

  // 代码行数配置
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },

  // 全部的插件配置
  plugins: [
    // 使用流程图插件
    // { gantt: { barHeight: 40 } }
    ['mermaidjs'],

    // 中文名路由路径转换拼音路径 兼容reco主题
    [
      'permalink-pinyin',
      {
        lowercase: true,
        separator: '.',
      },
    ],

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
          welcome: '你好，这里是《阮喵喵的rmmv开发笔记》',
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

    // 评论区插件
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'fOpA1EMy75xXVnyBBfNopgul-9Nh9j0Va',
          appKey: '1hzgeHXNTCtDNQ9XLkPwAlN8',
        },
      },
    ],

    [
      {
        name: 'custom-plugins',
        globalUIComponents: ['PageInfo'],
      },
    ],

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
