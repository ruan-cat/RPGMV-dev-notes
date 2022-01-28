const nav = require("./nav.js");
const plugins = require("./plugins.js");

module.exports = {
  lang: 'zh-CN',
  title: '阮中楠的RPGMV开发笔记',
  description: '整合RMMV生态，从现在开始',

  // https://blog.csdn.net/qq_28584685/article/details/88017069
  base: "/rpgmv-dev-notes/",

  head: [
    // 设置 favicon.ico，注意图片放在 public 文件夹下
    ['link', {
      rel: 'icon',
      href: 'little-alice-icon.png'
    }]
  ],

  // 默认主题
  // theme: '@vuepress/theme-default',

  // reco主题
  theme: 'reco',

  themeConfig: {
    // 目前可以导入图片 但是自己的网站不提供，可以为drillpage增加logo配置
    // logo: '/ruanCat-logo.jpg',

    nav,
    sidebar: 'auto',
    lastUpdated: '上一次更新',
    smoothScroll: true,
    /**
     * https: //vuepress-theme-reco.recoluan.com/views/1.x/sidebar.html
     * 在所有页面中启用自动生成子侧边栏， 原 sidebar 仍然兼容
     */
    subSidebar: 'auto',

    // 全局作者姓名配置
    author: '阮中楠',

    valineConfig: {
      appId: 'fOpA1EMy75xXVnyBBfNopgul-9Nh9j0Va',
      appKey: '1hzgeHXNTCtDNQ9XLkPwAlN8',
      // 不显示评论 不提供评论 只使用浏览量显示功能
      showComment: false
    },

    // 正在学习配置
    algolia: {
      apiKey: '00b93f0976fee99faecdc1c6165756b5',
      indexName: 'RPGMV-dev-notes',
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: 'N62BQRC6XH',
    },

    // 不使用 因为1版本的VuePress不提供更加细致的仓库地址配置，2版本提供。
    // repo: 'gitee/HechiCollegeComputerAssociation/RPGMV-dev-notes',
    // repo: 'https://gitee.com/HechiCollegeComputerAssociation/RPGMV-dev-notes',
    // docsRepo: 'HechiCollegeComputerAssociation/RPGMV-dev-notes',
    // docsBranch: 'main-dev-notes',
    // editLinks: true,
    // editLinkText: '帮助我们完善文档！'

    // 不实用 容易报错
    // blogConfig: {
    //   category: {
    //     location: 1, // 在导航栏菜单中所占的位置，默认2
    //     text: 'Category' // 默认文案 “分类”
    //   },

    //   tag: {
    //     location: 2, // 在导航栏菜单中所占的位置，默认3
    //     text: '文章' // 默认文案 “标签”
    //   },

    //   socialLinks: [ // 信息栏展示社交信息
    //     {
    //       icon: 'reco-github',
    //       link: 'https://github.com/recoluan'
    //     },
    //     {
    //       icon: 'reco-npm',
    //       link: 'https://www.npmjs.com/~reco_luan'
    //     }
    //   ]
    // },

    // type: 'blog',

    friendLink: [{
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
    ]

  },

  // 代码行数配置
  markdown: {
    lineNumbers: true
  },

  // 全部的插件配置
  plugins,
}

/** @description 这是一辆车 */
const car = {
  // 推荐使用字符串的方式来明确地定义车辆的名称
  name: 'Fiat',
  model: 500,
  weight: 850,
  // 第二版推荐用CSS的颜色样式写法来描述颜色。
  color: 'rgb(255,255,255)',

  /** @description 汽车启动 */
  start() {
    console.log(" 启动 ");
  },

  /** @description 汽车行驶 */
  drive() {
    console.log(" 行驶 ");
  },

  /** @description 汽车刹车 */
  brake() {
    console.log(" 刹车 ");
  },
};