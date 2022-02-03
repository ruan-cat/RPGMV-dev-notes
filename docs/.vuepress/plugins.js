/** 侧边栏插件的排序函数 */
const sortFn = (a, b) => {
  const lastA = a.filename.split("-")[0] * 1;
  const lastB = b.filename.split("-")[0] * 1;
  return lastA > lastB ? 1 : -1;
};

module.exports = [
  ["vuepress-plugin-auto-sidebar", {
    title: {
      mode: "titlecase"
    },

    // https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/features/plugin-options.html#sidebardepth-标题深度
    // 侧边栏的深度为2 即 h2 h3 标题被提取
    sidebarDepth: 2,

    // 侧边栏插件 使用自定义排序
    sort: {
      mode: 'custom',
      fn: sortFn
    },
  }],

  // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html#vuepress-plugin-back-to-top
  // ['@vuepress/back-to-top'],

  // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html#vuepress-plugin-active-header-links
  // ['@vuepress/active-header-links'],

  ['@vuepress-reco/vuepress-plugin-loading-page'],

  // https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang/
  ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
    theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
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
    // 提示文本留存1.5s
    duration: 1500,
  }],

  /**
   * 鼠标点击效果插件 
   * npm i vuepress - plugin - cursor - effects - D
   */
  ['cursor-effects', {
    // size of the particle, default: 2
    size: 2,
    // shape of the particle, default: 'star'
    shape: ['star'],
    // z-index property of the canvas, default: 999999999
    zIndex: 999999999,
  }],

  // 动态标题插件 即网站标签的动态变化插件
  ['dynamic-title', {
    // 考虑用原生的方式调整icon 不使用插件的方式导入icon值
    // showIcon: '/little-alice-icon.png',
    // hideIcon: '/little-alice-icon.png',
    showText: '欢迎回来',
    hideText: '正在翻阅MDN和CSDN么？',
    // 恢复时长
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
    // Converted into lowercase, default: true
    lowercase: true,
    // Separator of the slug, default: '-'
    separator: "-",
  }],

  // 音乐播放插件
  ['@vuepress-reco/vuepress-plugin-bgm-player', {
    // 自动播放 是
    autoplay: true,
    audios: [

      {
        name: "傀儡",
        artist: "A.LOVE",
        url: "/bgm/A.LOVE - 傀儡.mp3",
        // cover: "/bgm-cover-img/A.LOVE.jpg"
      },

      {
        name: "In the Darkness",
        artist: "A.LOVE",
        url: "/bgm/A.LOVE - In the Darkness.mp3",
        // cover: "/bgm-cover-img/A.LOVE.jpg"
      },

      {
        name: "Breather ( Remix)",
        artist: "B站-av25123096",
        url: "/bgm/Breather (Remix).mp3",
        // cover: "/bgm-cover-img/Breather (Remix).jpg"
      },

    ]
  }]
];