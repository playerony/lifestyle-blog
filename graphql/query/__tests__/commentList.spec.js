import gql from 'graphql-tag'

import commentListQuery from '../commentList'

describe('commentList query', () => {
  it('should import', () => {
    expect(typeof commentListQuery).toBeDefined()
  })

  it('should contain proper query and fetch policy', () => {
    expect(commentListQuery).toEqual({
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
