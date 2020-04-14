import gql from 'graphql-tag'

const COMMENT_LIST_QUERY = gql`
  query CommentListByArticleId($articleId: Int) {
    commentListByArticleId(articleId: $articleId) {
      commentId
      parentCommentId
      content
      creator
      createdAt
    }
  }
`

export default {
  query: COMMENT_LIST_QUERY,
  fetchPolicy: 'cache-first'
}
