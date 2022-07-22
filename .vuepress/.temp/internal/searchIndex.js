export const searchIndex = [
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
        "title": "Heyo!",
        "slug": "heyo",
        "children": []
      },
      {
        "level": 2,
        "title": "Why?",
        "slug": "why",
        "children": []
      },
      {
        "level": 2,
        "title": "Want to give comments?",
        "slug": "want-to-give-comments",
        "children": []
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
