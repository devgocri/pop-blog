import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Categories",
    icon: "tag",
    link: "/category/guide/",
  }, 
  {
    text: "Posts",
    icon: "note",
    link: "/article/",
  },
]);
