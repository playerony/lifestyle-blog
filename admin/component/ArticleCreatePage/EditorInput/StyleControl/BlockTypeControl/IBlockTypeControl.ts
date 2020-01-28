import { EditorState } from 'draft-js'

export default interface IInlineStyleControl {
  editorState: EditorState
  onToggle: (style: string) => void
}
