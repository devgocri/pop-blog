export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4a3483a8","v-0e503981","v-7c910bf3"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-4a3483a8","v-0e503981","v-7c910bf3"]}},"slide":{"/":{"path":"/slide/","keys":["v-0e503981"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-4a3483a8"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
