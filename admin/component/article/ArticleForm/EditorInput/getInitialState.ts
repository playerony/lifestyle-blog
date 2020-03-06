import htmlToDraft from 'html-to-draftjs'
import { EditorState, ContentState } from 'draft-js'

export default (initialValue?: string): EditorState => {
  if (!Boolean(initialValue)) {
    return EditorState.createEmpty()
  }

  const { contentBlocks, entityMap } = htmlToDraft(initialValue!)
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  )

  return EditorState.createWithContent(contentState)
}
