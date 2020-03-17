import { EditorState, convertFromRaw } from 'draft-js'

export default (initialValue?: string): EditorState => {
  if (!Boolean(initialValue)) {
    return EditorState.createEmpty()
  }

  return EditorState.createWithContent(
    convertFromRaw(JSON.parse(initialValue!))
  )
}
