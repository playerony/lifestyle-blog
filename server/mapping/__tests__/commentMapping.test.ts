import commentMapping from '../commentMapping'

import { CommentType } from '@type/Comment'

describe('commentMapping Mapping', () => {
  it('import commentMapping', () => {
    expect(typeof commentMapping).toEqual('function')
  })

  it('should return proper object', () => {
    expect(commentMapping(INPUT_MOCK as any)).toEqual(OUTPUT_MOCK)
  })
})

const INPUT_MOCK: any = {
  commentId: 1,
  articleId: 1,
  content: 'content',
  creator: 'creator',
  parentCommentId: null,
  createdAt: new Date('2020'),
  updatedAt: new Date('2020')
}

const OUTPUT_MOCK: CommentType = {
  commentId: 1,
  articleId: 1,
  content: 'content',
  creator: 'creator',
  parentCommentId: null,
  createdAt: new Date('2020'),
  updatedAt: new Date('2020')
}
