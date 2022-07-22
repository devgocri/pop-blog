import { defineUserConfig } from 'vuepress';
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  lang: "en-US",
  title: "Pop's Blog",
  description: "Want to know how I'm building stuff? Check it out at Pop's Blog.",
  base: "/",
  plugins: [
    searchPlugin({
      // your options
    }),
  ],
  theme,
});
