const BASE_URL = '/admin'
const ARTICLE_URL = `${BASE_URL}/article`

export default {
  base: BASE_URL,
  log: `${BASE_URL}/log`,
  login: `${BASE_URL}/login`,
  metric: `${BASE_URL}/metric`,
  error: `${BASE_URL}/error/:code`,
  article: {
    base: ARTICLE_URL,
    list: `${ARTICLE_URL}/list`,
    create: `${ARTICLE_URL}/create`,
    edit: `${ARTICLE_URL}/:articleId/edit`
  }
}
