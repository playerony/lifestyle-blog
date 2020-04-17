import gql from 'graphql-tag'

const ARTICLE_LIST_QUERY = gql`
  query {
    articleList(onlyPublic: true) {
      title
      isPublic
      articleId
      createdAt
      description
      readingTime
      categoryList {
        categoryId
      }
      image {
        photoUrl
      }
    }
  }
`

export default {
  query: ARTICLE_LIST_QUERY,
  fetchPolicy: 'cache-first'
}
