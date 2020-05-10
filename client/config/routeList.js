const BASE_URL = '/'

export default {
  base: BASE_URL,
  error: `${BASE_URL}error/:code`,
  article: `${BASE_URL}article/:articleId`,
  articles: `${BASE_URL}articles/:categoryId`
}
