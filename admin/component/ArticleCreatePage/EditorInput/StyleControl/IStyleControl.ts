import { EditorState } from 'draft-js'

export default interface IStyleControl {
  editorState: EditorState
  toggleBlockType: (style: string) => void
  toggleInlineStyle: (style: string) => void
}
