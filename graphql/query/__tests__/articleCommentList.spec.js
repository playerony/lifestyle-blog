import gql from 'graphql-tag'

import articleCommentListQuery from '../articleCommentList'

describe('commentList Query', () => {
  it('should import', () => {
    expect(typeof articleCommentListQuery).toBeDefined()
  })

  it('should contain proper query and fetch policy', () => {
    expect(articleCommentListQuery).toEqual({
      query: QUERY_FORMULA,
      fetchPolicy: 'cache-first'
    })
  })
})

const QUERY_FORMULA = gql`
  query CommentListByArticleId($articleId: Int) {
    commentListByArticleId(articleId: $articleId) {
      likes
      content
      creator
      createdAt
      commentId
      parentCommentId
    }
  }
`
