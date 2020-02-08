import { ContentBlock } from 'draft-js'

export default (block: ContentBlock): string => {
  switch (block.getType()) {
    case 'blockquote':
      return `DraftEditor-blockquote`

    default:
      return ''
  }
}
