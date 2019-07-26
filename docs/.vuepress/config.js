module.exports = {
  title: 'Taro UI',
  theme: 'docs',
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
      { text: 'Home', link: '/index.html' },
      { text: 'Guide', link: '/guide/0-introduce.html' },
      { text: 'External', link: 'https://google.com' },
    ],

    sidebarConfig: {
      'guide': {
        'title': '概述'
      },
      'components': {
        'title': '组件',
        'items': {
          '0-navigator' : '导航组件',
          '1-form'      : '表单组件',
          '2-views'     : '视图组件',
          '3-feedback'  : '操作反馈',
        }
      },
    },
    uiDemoAddress: 'http://localhost:8082'
  }
}