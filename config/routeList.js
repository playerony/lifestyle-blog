const BASE_URL = '/'
const BASE_ERROR_URL = '/error'
const BASE_ARTICLE_URL = '/article'
const BASE_ARTICLES_URL = '/articles'

export default {
  base: BASE_URL,
  error: {
    base: BASE_ERROR_URL,
    path: `${BASE_ERROR_URL}/:code`
  },
  article: {
    base: BASE_ARTICLE_URL,
    path: `${BASE_ARTICLE_URL}/:articleId`
  },
  articles: {
    base: BASE_ARTICLES_URL,
    path: `${BASE_ARTICLES_URL}/:categoryId`
  }
}
