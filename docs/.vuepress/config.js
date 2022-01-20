module.exports = {
  title: 'Taro UI',
  theme: require.resolve('../../'),
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
            link: 'https://taro.jd.com/',
            text: 'Taro',
          },
          {
            link: 'https://taro-ui.aotu.io',
            text: 'taroUI',
          }
        ]
      },
      {
        title: '社区',
        items: [
          {
            link: 'https://www.baidu.com',
            text: '百度',
          },
          {
            link: 'https://www.google.com',
            text: '谷歌',
          },
          {
            link: 'https://www.github.com',
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
      { text: '组件', link: '/guide/0-introduce.html' },
      { text: '外链一', link: 'https://www.baidu.com/' },
      { text: '外链二', link: 'https://www.baidu.com/' },
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