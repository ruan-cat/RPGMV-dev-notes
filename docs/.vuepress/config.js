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
    sidebarDepth: 4,

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
      apiKey: '6d2809cce481a42771539d8823524569',
      indexName: 'RPGMV-dev-notes',
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      // appId: 'N62BQRC6XH',
    },

  },

  // 代码行数配置
  markdown: {
    lineNumbers: true
  },

  // 全部的插件配置
  plugins,
}