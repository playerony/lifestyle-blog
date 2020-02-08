import { ContentBlock } from 'draft-js'

const blockTypeClassName: { [key: string]: string } = {
  blockquote: 'DraftEditor-blockquote'
}

export default (block: ContentBlock): string =>
  blockTypeClassName[block.getType()] || ''
