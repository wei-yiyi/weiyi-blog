import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/weiyi-blog/",
  lang: "zh-CN",
  title: "weiyi-blog",
  description: "记录一些学习",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "客户端", link: "/src/frontend" },
      {
        text: "服务端",
        items: [
          {
            text: "redis",
            link: "/src/backend/redis/redis-basic.md",
          },
          {
            text: "mysql",
            link: "/src/backend/mysql/mysql-basic.md",
          },
        ],
      },
    ],

    // sidebar: [
    // {
    //   text: 'Examples',
    //   items: [
    //     { text: 'Markdown Examples', link: '/markdown-examples' },
    //     { text: 'Runtime API Examples', link: '/api-examples' }
    //   ]
    // }
    // {
    //   text: "Redis",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "Redis 基础",
    //       link: "/src/redis/redis-basic.md",
    //     },
    //   ],
    // },
    // ],

    sidebar: {
      "/src/backend/": [
        // {
        //   text: "简介",
        //   items: [
        //     {
        //       text: "简介",
        //       link: "/src/backend/index.md",
        //     },
        //   ],
        // },
        {
          text: "Redis",
          collapsed: true,
          items: [
            {
              text: "Redis 基础",
              link: "/src/backend/redis/redis-basic.md",
            },
          ],
        },
        {
          text: "MySql",
          collapsed: true,
          items: [
            {
              text: "MySql 基础",
              link: "/src/backend/mysql/mysql-basic.md",
            },
          ],
        },
      ],
      "/src/frontend/": [
        // {
        //   text: "简介",
        //   link: "/src/frontend/index.md",
        // },
        {
          text: "React",
          collapsed: true,
          items: [
            {
              text: "React 基础",
              link: "/src/frontend/react/react-basic.md",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },

  outDir: "docs",

  lastUpdated: true,
});
