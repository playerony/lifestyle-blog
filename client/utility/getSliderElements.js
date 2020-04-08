export default (articleList, maxElements) =>
  articleList.length >= maxElements ? maxElements : articleList.length
