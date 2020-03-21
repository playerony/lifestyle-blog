import { ContentBlock } from 'draft-js'

const blockTypeClassName: { [key: string]: string } = {
  blockquote: 'DraftEditor-blockquote',
  left: 'align-left',
  center: 'align-center',
  right: 'align-right'
}

export default (block: ContentBlock): string =>
  blockTypeClassName[block.getType()] || ''
