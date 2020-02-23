const BASE_URL = '/admin'
const ARTICLE_URL = '/admin/article'

export default {
  base: BASE_URL,
  loginPageUrl: `${BASE_URL}/login`,
  appMetric: `${BASE_URL}/metric`,
  article: {
    base: ARTICLE_URL,
    list: `${ARTICLE_URL}/list`,
    create: `${ARTICLE_URL}/create`,
    edit: `${ARTICLE_URL}/:articleId/edit`
  }
}
