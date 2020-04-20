import gql from 'graphql-tag'

import articleCommentListQuery from '../articleCommentList'

describe('commentList query', () => {
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
      commentId
      parentCommentId
      content
      creator
      createdAt
    }
  }
`
