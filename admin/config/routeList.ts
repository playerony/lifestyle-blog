const BASE_URL = '/admin'
const ARTICLE_URL = '/admin/article'

export default {
  baseUrl: BASE_URL,
  loginPageUrl: `${BASE_URL}/login`,
  article: {
    list: `${ARTICLE_URL}/list`,
    create: `${ARTICLE_URL}/create`
  }
}
