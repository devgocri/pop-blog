export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Guide":{"path":"/category/guide/","keys":["v-4eaf9f84","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28"]},"CategoryA":{"path":"/category/categorya/","keys":["v-4a3483a8"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-4a3483a8"]}}}},"tag":{"/":{"path":"/tag/","map":{"disable":{"path":"/tag/disable/","keys":["v-4c863446"]},"encryption":{"path":"/tag/encryption/","keys":["v-bf720700"]},"Markdown":{"path":"/tag/markdown/","keys":["v-0978b044"]},"Page config":{"path":"/tag/page-config/","keys":["v-4eaf9f84"]},"Guide":{"path":"/tag/guide/","keys":["v-4eaf9f84"]},"tag A":{"path":"/tag/tag-a/","keys":["v-4a3483a8"]},"tag B":{"path":"/tag/tag-b/","keys":["v-4a3483a8"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
