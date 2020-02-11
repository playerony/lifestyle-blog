const BASE_URL = '/admin'
const ARTICLE_URL = '/admin/article'

export default {
  base: BASE_URL,
  loginPageUrl: `${BASE_URL}/login`,
  article: {
    base: ARTICLE_URL,
    list: `${ARTICLE_URL}/list`,
    create: `${ARTICLE_URL}/create`
  }
}
