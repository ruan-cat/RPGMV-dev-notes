/*
 * @Author: your name
 * @Date: 2021-12-28 11:43:14
 * @LastEditTime: 2021-12-29 15:20:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \try-learn-vuepress\docs\.vuepress\config.js
 */

const nav = require("./nav.js");

module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '阮中楠的RPGMV开发笔记',
  description: '整合RMMV生态，从现在开始',

  // https://blog.csdn.net/qq_28584685/article/details/88017069
  base: "/rpgmv-dev-notes/",

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    // old
    // logo: 'https://vuejs.org/images/logo.png',
    // new
    // logo: '/ruanCat-logo.jpg',
    // 目前可以导入图片 但是自己的网站不提供，可以为drillpage增加logo配置

    nav,
    sidebar: 'auto',
    lastUpdated: '上一次更新',
    smoothScroll: true


    // 不使用 因为1版本的VuePress不提供更加细致的仓库地址配置，2版本提供。
    // repo: 'HechiCollegeComputerAssociation/RPGMV-dev-notes',
    // repo: 'https://gitee.com/HechiCollegeComputerAssociation/RPGMV-dev-notes',
    // docsRepo: 'HechiCollegeComputerAssociation/RPGMV-dev-notes',
    // docsBranch: 'main-dev-notes',
    // editLinks: true,
    // editLinkText: '帮助我们完善文档！'

  },

  markdown: {
    lineNumbers: true
  },

  plugins: [
    ["vuepress-plugin-auto-sidebar", {
      title: {
        // 更多选项: 
        // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
        mode: "titlecase"
      },
      // https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/zh/features/plugin-options.html#sidebardepth-标题深度
      // 侧边栏的深度为2 即 h2 h3 标题被提取
      sidebarDepth: 2
    }],

    // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-back-to-top.html#vuepress-plugin-back-to-top
    ['@vuepress/back-to-top'],

    // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html#vuepress-plugin-active-header-links
    ['@vuepress/active-header-links'],

    ["@vuepress/plugin-medium-zoom"],

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

    ['vuepress-plugin-sponsor',
      {
        theme: 'simple',
        alipay: '/sponsor-qrcode/qrcode-alipay.png',
        wechat: '/sponsor-qrcode/qrcode-wechat.png',
        qq: '/sponsor-qrcode/qrcode-qq.png',
        paypal: 'https://www.paypal.me/yokefellow',
        duration: 2000
      }
    ]

    // ['@vuepress-reco/vuepress-plugin-bulletin-popover',
    //   {
    //     width: '300px', // 默认 260px
    //     title: '消息提示',
    //     body: [{
    //         type: 'title',
    //         content: '欢迎加入QQ交流群 🎉🎉🎉',
    //         style: 'text-aligin: center;'
    //       },
    //       {
    //         type: 'image',
    //         // src: '/rvcode_qq.png'
    //       }
    //     ],
    //     footer: [{
    //         type: 'button',
    //         text: '打赏',
    //         link: '/donate'
    //       },
    //       {
    //         type: 'button',
    //         text: '打赏',
    //         link: '/donate'
    //       }
    //     ]
    //   }
    // ]
  ]

}