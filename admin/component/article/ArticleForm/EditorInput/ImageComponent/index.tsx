import React from 'react'
import { ContentBlock } from 'draft-js'

const ImageComponent = ({ block }: { block: ContentBlock }): JSX.Element => (
  <div>
    <img src={block.getText()} />
  </div>
)

export default ImageComponent
