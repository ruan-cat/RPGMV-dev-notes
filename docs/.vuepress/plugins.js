/** 侧边栏插件的排序函数 */
const sortFn = (a, b) => {
  const lastA = a.filename.split("-")[0] * 1;
  const lastB = b.filename.split("-")[0] * 1;
  return lastA > lastB ? 1 : -1;
};

module.exports = [
  ["vuepress-plugin-auto-sidebar", {
    title: {
      // 更多选项: 
      // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
      mode: "titlecase"
    },

    // https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/features/plugin-options.html#sidebardepth-标题深度
    // 侧边栏的深度为2 即 h2 h3 标题被提取
    // sidebarDepth: 2
    sidebarDepth: 3,

    // 侧边栏插件 使用自定义排序
    sort: {
      mode: 'custom',
      fn: sortFn
    },
  }],

  // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html#vuepress-plugin-back-to-top
  ['@vuepress/back-to-top'],

  // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html#vuepress-plugin-active-header-links
  ['@vuepress/active-header-links'],

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

  // 赞助打赏 暂时不用
  // https://github.com/yokefellow/vuepress-plugin-sponsor
  // ['vuepress-plugin-sponsor',
  //   {
  //     theme: 'simple',
  //     alipay: '/sponsor-qrcode/qrcode-alipay.png',
  //     wechat: '/sponsor-qrcode/qrcode-wechat.png',
  //     qq: '/sponsor-qrcode/qrcode-qq.png',
  //     paypal: 'https://www.paypal.me/yokefellow',
  //     duration: 2000
  //   }
  // ],

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

  // 一只小狗 返回顶部 暂时关闭
  // ['go-top'],

  // 背景绶带 暂时关闭
  // https://moefyit.github.io/moefy-vuepress/packages/ribbon.html#usage
  // ['ribbon', {
  //   size: 90, // width of the ribbon, default: 90
  //   opacity: 0.8, // opacity of the ribbon, default: 0.3
  //   zIndex: -1, // z-index property of the background, default: -1
  // }],

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
        cover: "/bgm-cover-img/A.LOVE.jpg"
      },

      {
        name: "In the Darkness",
        artist: "A.LOVE",
        url: "/bgm/A.LOVE - In the Darkness.mp3",
        cover: "/bgm-cover-img/A.LOVE.jpg"
      },

      {
        name: "Breather ( Remix)",
        artist: "B站-av25123096",
        url: "/bgm/Breather (Remix).mp3",
        cover: "/bgm-cover-img/Breather (Remix).jpg"
      },

    ]
  }]



  // https://valine.js.org/vuepress.html 评论插件 不需要手动引入并配置
  // ['vuepress-plugin-comment',
  //   {
  //     choosen: 'valine',
  //     // options选项中的所有参数，会传给Valine的配置
  //     options: {
  //       el: '#valine-vuepress-comment',
  //       appId: 'fOpA1EMy75xXVnyBBfNopgul-9Nh9j0Va',
  //       appKey: '1hzgeHXNTCtDNQ9XLkPwAlN8',
  //       visitor: true
  //     }
  //   }
  // ]

  // 百度统计插件 
  // ['vuepress-plugin-baidu-tongji', {
  //   hm: 'abcdefghijklmnopqrstuvwxyz123456'
  // }]

  /**
   * 打赏侧边栏插件
   * 目前总是无法合适的使用
   */
  // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
  //   width: '300px', // 默认 260px
  //   title: '消息提示',
  //   body: [{
  //       type: 'title',
  //       content: '欢迎加入QQ交流群 🎉🎉🎉',
  //       style: 'text-aligin: center;'
  //     },
  //     // {
  //     //   type: 'image',
  //     //   src: '/rvcode_qq.png'
  //     // }
  //   ],
  //   footer: [{
  //       type: 'button',
  //       text: '打赏',
  //       link: '/donate'
  //     },
  //     {
  //       type: 'button',
  //       text: '打赏',
  //       link: '/donate'
  //     }
  //   ]
  // }]
];