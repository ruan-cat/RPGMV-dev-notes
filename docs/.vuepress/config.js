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

  // base: "/blog/",
  // base: "/https://hechicollegecomputerassociation.gitee.io/",
  // base: "/",
  // base: ".",
  // base: "/RPGMV-dev-notes/",
  // base: "./",

  // https://blog.csdn.net/qq_28584685/article/details/88017069
  base: "/rpgmv-dev-notes/",


  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    nav,
    sidebar: 'auto'
  },

  plugins: [
    ["vuepress-plugin-auto-sidebar", {
      title: {
        // 更多选项: 
        // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
        mode: "titlecase"
      },
      // sidebarDepth: 1
    }],

    ['@vuepress/back-to-top']
  ]

}