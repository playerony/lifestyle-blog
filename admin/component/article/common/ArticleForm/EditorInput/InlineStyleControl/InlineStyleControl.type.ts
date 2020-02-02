import { EditorState } from 'draft-js'

export interface IInlineStyleControlProps {
  editorState: EditorState
  onToggle: (style: string) => void
}
