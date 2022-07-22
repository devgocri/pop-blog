export const searchIndex = [
  {
    "title": "Home",
    "headers": [],
    "path": "/home.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "About me",
    "headers": [],
    "path": "/intro.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Home",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Slide page",
    "headers": [],
    "path": "/slide.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Disabling layout and features",
    "headers": [],
    "path": "/guide/disable.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Encryption Article",
    "headers": [],
    "path": "/guide/encrypt.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Markdown Enhance",
    "headers": [
      {
        "level": 2,
        "title": "Markdown Introduction",
        "slug": "markdown-introduction",
        "children": []
      },
      {
        "level": 2,
        "title": "Markdown Config",
        "slug": "markdown-config",
        "children": []
      },
      {
        "level": 2,
        "title": "Markdown Extension",
        "slug": "markdown-extension",
        "children": [
          {
            "level": 3,
            "title": "VuePress Enhancement",
            "slug": "vuepress-enhancement",
            "children": []
          },
          {
            "level": 3,
            "title": "Theme Enhancement",
            "slug": "theme-enhancement",
            "children": []
          },
          {
            "level": 3,
            "title": "Tabs",
            "slug": "tabs",
            "children": []
          }
        ]
      }
    ],
    "path": "/guide/markdown.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "page config",
    "headers": [
      {
        "level": 2,
        "title": "Page Information",
        "slug": "page-information",
        "children": []
      },
      {
        "level": 2,
        "title": "Page Content",
        "slug": "page-content",
        "children": []
      },
      {
        "level": 2,
        "title": "Page Structure",
        "slug": "page-structure",
        "children": []
      }
    ],
    "path": "/guide/page.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Guides",
    "headers": [
      {
        "level": 2,
        "title": "Catalog",
        "slug": "catalog",
        "children": []
      }
    ],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Welcome",
    "headers": [
      {
        "level": 2,
        "title": "Heading 2",
        "slug": "heading-2",
        "children": [
          {
            "level": 3,
            "title": "Heading 3",
            "slug": "heading-3",
            "children": []
          }
        ]
      }
    ],
    "path": "/posts/welcome.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Category",
    "headers": [],
    "path": "/category/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Tag",
    "headers": [],
    "path": "/tag/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Articles",
    "headers": [],
    "path": "/article/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Encrypted",
    "headers": [],
    "path": "/encrypted/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Slides",
    "headers": [],
    "path": "/slide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Star",
    "headers": [],
    "path": "/star/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Timeline",
    "headers": [],
    "path": "/timeline/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Guide Category",
    "headers": [],
    "path": "/category/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "disable Tag",
    "headers": [],
    "path": "/tag/disable/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CategoryA Category",
    "headers": [],
    "path": "/category/categorya/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "encryption Tag",
    "headers": [],
    "path": "/tag/encryption/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "CategoryB Category",
    "headers": [],
    "path": "/category/categoryb/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Markdown Tag",
    "headers": [],
    "path": "/tag/markdown/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Page config Tag",
    "headers": [],
    "path": "/tag/page-config/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Guide Tag",
    "headers": [],
    "path": "/tag/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "tag A Tag",
    "headers": [],
    "path": "/tag/tag-a/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "tag B Tag",
    "headers": [],
    "path": "/tag/tag-b/",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
