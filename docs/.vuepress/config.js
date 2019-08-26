module.exports = {
  locales: {
    "/": {
      lang: "zh-cmn-Hans",
      title: "初来乍到",
      description: "技术(不止是前端)、分享、记录、学习，Welcome！"
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/static/images'
      }
    }
  },
  themeConfig: {
    nav: [
      { text: "导航", link: '/guide/' },
      // {
      //     text: "大前端", items: [
      //         {
      //             text: "基础", items: [
      //                 { text: "ES6", link: '/大前端/ES6/对象' },
      //                 { text: "HTML5", link: '/大前端/HTML5/Canvas' }
      //             ]
      //         },
      //         {
      //             text: "NodeJS", items: [
      //                 { text: "node", link: '/node/' }
      //             ]
      //         },
      //     ]
      // },
      {
          text: "问题记录", link: '/问题记录/'
      },
      { text: "关于网站", link: '/about/' },
      { text: "GitHub", link: 'https://github.com/liuwanlong' },
    ],
    // sidebar: {
    //     '/大前端/': [
    //         {
    //             title: 'ES6',
    //             collapsable: true,
    //             children: [
    //                 '/大前端/ES6/对象',
    //                 '/大前端/ES6/数组',
    //             ]
    //         },
    //         {
    //             title: 'HTML5',
    //             collapsable: true,
    //             children: [
    //                 '/大前端/HTML5/Canvas',
    //                 '/大前端/HTML5/Video视频',
    //             ]
    //         },
    //     ]
    // }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-143602646-1'
      }
    ],
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ]
}