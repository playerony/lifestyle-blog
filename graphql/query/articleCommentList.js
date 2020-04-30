import gql from 'graphql-tag'

const ARTICLE_COMMENT_LIST_QUERY = gql`
  query CommentListByArticleId($articleId: Int) {
    commentListByArticleId(articleId: $articleId) {
      commentId
      parentCommentId
      content
      creator
      likes
      createdAt
    }
  }
`

export default {
  query: ARTICLE_COMMENT_LIST_QUERY,
  fetchPolicy: 'cache-first'
}
