export const themeData = JSON.parse("{\"blog\":{\"name\":\"Pop Plays\",\"description\":\"Full-Stack developer\",\"intro\":\"/intro.html\",\"avatar\":\"/favicon.ico\",\"medias\":{\"Discord\":\"https://example.com\",\"Email\":\"https://example.com\",\"GitHub\":\"https://example.com\",\"Gmail\":\"https://example.com\"}},\"encrypt\":{\"config\":{\"/\":[\"$2a$10$J2L6yXaoIH2f42HlyD18ue2JeID9y0Z69C0x9cfYV4MHCN46gorxi\"]}},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":false,\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":false,\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\"},\"blogLocales\":{\"article\":\"Articles\",\"articleList\":\"Article List\",\"category\":\"Category\",\"tag\":\"Tag\",\"timeline\":\"Timeline\",\"timelineTitle\":\"Yesterday Once More!\",\"all\":\"All\",\"intro\":\"Personal Intro\",\"star\":\"Star\",\"slides\":\"Slides\",\"encrypt\":\"Encrypted\"},\"paginationLocales\":{\"prev\":\"Prev\",\"next\":\"Next\",\"navigate\":\"Jump to\",\"action\":\"Go\",\"errorText\":\"Please enter a number between 1 and $page !\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"encryptLocales\":{\"iconLabel\":\"Page Encrypted\",\"placeholder\":\"Enter password\",\"remember\":\"Remember password\",\"errorHint\":\"Please enter the correct password!\"},\"routeLocales\":{\"404msg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"Pop Plays\",\"url\":\"https://popplays.tk\"},\"logo\":\"/logo.svg\",\"repo\":\"popqa17/pop-blog\",\"docsDir\":\"demo/src\",\"navbar\":[\"/\",{\"text\":\"Categories\",\"icon\":\"tag\",\"link\":\"/category/guide/\"},{\"text\":\"Posts\",\"icon\":\"note\",\"link\":\"/article/\"}],\"footer\":\"Created by Pop Plays\",\"copyright\":\"Copyright 2022, All Rights Reserved\",\"displayFooter\":true,\"pageInfo\":[\"Author\",\"Original\",\"Date\",\"Category\",\"Tag\",\"ReadingTime\"]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
