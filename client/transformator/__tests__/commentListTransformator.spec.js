import commentListTransformator from '../commentListTransformator'

describe('commentListTransformator Function', () => {
  it('should import', () => {
    expect(typeof commentListTransformator).toEqual('function')
  })

  it('should return nested array with comments from flat array', () => {
    const result = commentListTransformator(COMMENT_LIST_MOCK)

    expect(result).toEqual([
      {
        commentId: 1,
        parentCommentId: null,
        content: 'content',
        creator: 'creator',
        createdAt: new Date('2020'),
        parentComment: {
          commentId: 3,
          parentCommentId: 1,
          content: 'content',
          creator: 'creator',
          createdAt: new Date('2020')
        }
      },
      {
        commentId: 2,
        parentCommentId: null,
        content: 'content',
        creator: 'creator',
        createdAt: new Date('2020')
      }
    ])
  })
})

const COMMENT_LIST_MOCK = [
  {
    commentId: 1,
    parentCommentId: null,
    content: 'content',
    creator: 'creator',
    createdAt: new Date('2020')
  },
  {
    commentId: 2,
    parentCommentId: null,
    content: 'content',
    creator: 'creator',
    createdAt: new Date('2020')
  },
  {
    commentId: 3,
    parentCommentId: 1,
    content: 'content',
    creator: 'creator',
    createdAt: new Date('2020')
  }
]
