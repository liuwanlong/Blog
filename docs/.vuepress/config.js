module.exports = {
    title: "初来乍到",
    description: "我只是一个小前端",
    themeConfig: {
        nav: [
            { text: "导航", link: '/guide/' },
            {
                text: "大前端", items: [
                    {
                        text: "基础", items: [
                            { text: "ES6", link: '/大前端/ES6/对象' },
                            { text: "HTML5", link: '/大前端/HTML5/Canvas' }
                        ]
                    },
                    {
                        text: "NodeJS", items: [
                            { text: "node", link: '/node/' }
                        ]
                    },
                ]
            },
            {
                text: "烂笔头", items: [
                    { text: "学习周记", link: '/笔记/学习周记' }
                ]
            },
            { text: "关于网站", link: '/about/' },
            { text: "GitHub", link: 'https://github.com/liuwanlong' },
        ],
        sidebar: {
            '/大前端/': [
                {
                    title: 'ES6',
                    collapsable: true,
                    children: [
                        '/大前端/ES6/对象',
                        '/大前端/ES6/数组',
                    ]
                },
                {
                    title: 'HTML5',
                    collapsable: true,
                    children: [
                        '/大前端/HTML5/Canvas',
                        '/大前端/HTML5/Video视频',
                    ]
                },
            ]
        }
    }
}