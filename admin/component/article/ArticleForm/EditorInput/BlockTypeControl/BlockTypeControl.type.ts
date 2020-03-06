import { EditorState } from 'draft-js'

export interface IBlockTypeControlProps {
  editorState: EditorState
  onToggle: (style: string) => void
}
