module.exports = {
  title: 'Taro UI',
  theme: 'vuepress-theme-docs',
  head: [
    ['link', { rel: 'short icon', type: 'image/x-icon', href: '/images/favicon.ico'}]
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: '/images/logo.png',
    footerLinks: [
      {
        title: '相关资源',
        items: [
          {
            link: 'https://www.baidu.com',
            text: '百度',
            desc: '搜索引擎',
          },
          {
            link: 'https://www.google.com',
            text: '谷歌',
            desc: '搜索引擎',
          }
        ]
      },
      {
        title: '社区',
        items: [
          {
            link: 'https://www.baidu.com',
            text: '反馈建议',
          },
          {
            link: 'https://www.baidu.com',
            text: '贡献指南',
          },
          {
            link: 'https://www.baidu.com',
            text: 'Github'
          }
        ]
      },
      {
        title: '关于我们',
        items: [
          {
            link: 'http://www.baidu.com',
            text: 'FE Team'
          }
        ]
      }
    ],
    nav: [
      { text: '组件', link: 'guide/0-introduce.html' },
      { text: '主题生成器', link: 'https://nervjs.github.io/taro-ui-theme-preview/' },
      { text: '关于我们', link: 'https://aotu.io/' },
    ],

    sidebarConfig: {
      'guide': {
        'title': '概述'
      },
      'components': {
        'title': '组件',
        'items': {
          '0-base'      : '基础组件',
          '1-view'      : '视图组件',
          '2-feedback'  : '操作反馈',
          '3-form'      : '表单组件',
          '4-layouts'   : '布局组件',
        }
      },
    },
    uiDemoAddress: 'https://taro-ui.aotu.io'
  }
}