import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Pop Plays",
    url: "https://popplays.tk",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "popqa17/pop-blog",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: false,

  footer: "Default footer",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    name: 'Pop Plays',
    description: "Full-Stack developer",
    intro: "/intro.html",
    medias: {
      Discord: "https://example.com",
      Email: "https://example.com",
      GitHub: "https://example.com",
      Gmail: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "popqa17/pop-blog",
      repoId: "R_kgDOHssZYw",
      category: "Announcements",
      categoryId: "DIC_kwDOHssZY84CQXjo",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
