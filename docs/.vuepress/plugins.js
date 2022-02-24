/** 侧边栏插件的排序函数 */
const sortFn = (a, b) => {
  const lastA = a.filename.split("-")[0] * 1;
  const lastB = b.filename.split("-")[0] * 1;
  return lastA > lastB ? 1 : -1;
};

module.exports = [
  // 尝试： 不使用自动生成的侧边栏插件
  ["vuepress-plugin-auto-sidebar", true, {
    title: {
      mode: "titlecase"
    },

    collapse: {
      open: true
    },

    sidebarDepth: 4,

    // 侧边栏插件 使用自定义排序
    sort: {
      mode: 'custom',
      fn: sortFn
    },

    // 自动生成的侧边栏文件名
    output: {
      filename: 'sidebar-auto'
    },

    ignore: [
      // 忽略 `/menu3/menu3-3/` 目录下以 `ignore-` 开头的文件
      {
        menu: "/drill-api/2.6.1/",
        regex: "*"
      }
    ]
  }],

  ['@vuepress-reco/vuepress-plugin-loading-page', true],

  // https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang/
  ['@vuepress-reco/vuepress-plugin-kan-ban-niang', true, {
    // hibiki 可能的取值 从别人的插件教程中预览
    theme: ['hibiki', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
    clean: false,
    messages: {
      welcome: '你好，这里是《阮中楠的RPGMV开发笔记》',
      home: '立刻闪现到主页',
      theme: '好吧，希望你能喜欢我的其他小伙伴。',
      close: '立刻关闭此内容，防止分心'
    },
    messageStyle: {
      right: '68px',
      bottom: '190px'
    },
    modelStyle: {
      right: '90px',
      bottom: '-20px',
      opacity: '0.9'
    },
    btnStyle: {
      right: '90px',
      bottom: '40px'
    },
    width: 150,
    height: 220,
  }],


  /**
   * 代码域一键复制插件
   * https: //www.npmjs.com/package/vuepress-plugin-one-click-copy
   */
  ['one-click-copy', {
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
    copyMessage: '复制成功',
    toolTipMessage: '复制在剪贴板内',
    duration: 1500,
  }],

  /**
   * 鼠标点击效果插件 
   * npm i vuepress - plugin - cursor - effects - D
   */
  ['cursor-effects', {
    size: 2,
    shape: ['star'],
    zIndex: 999999999,
  }],

  // 动态标题插件 即网站标签的动态变化插件
  ['dynamic-title', {
    showText: '欢迎回来',
    hideText: '正在翻阅MDN和CSDN么？',
    recoverTime: 2000,
  }],

  ['vuepress-plugin-medium-zoom', {
    selector: '.my-wrapper .my-img',
    delay: 1000,
    options: {
      margin: 24,
      background: '#BADA55',
      scrollOffset: 0,
    },
  }, ],

  // 中文名路由路径转换拼音路径 兼容reco主题
  ["permalink-pinyin", {
    lowercase: true,
    separator: "-",
  }],

  ['@vuepress/pwa'],

  // 全文搜索插件 目前失效
  // ['fulltext-search'],

  ['flexsearch'],

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
];