import React, {useContext} from 'react'
import { WorkspaceContext } from '../../../context/workspaceContext'

import { 
  Container, 
  Title, 
  SizeLineWrapper,
  SizeLine,
  SizesText, 
  Size
} from './style'

export const SizeOnFolder = () => {
  const { workspace } = useContext(WorkspaceContext)	
  const file = workspace.currentFile

  return (
    <Container>
      <Title>Size on folder</Title>
      <SizeLineWrapper>
        <SizeLine width={file.usage_on_folder}></SizeLine>
      </SizeLineWrapper>
      <SizesText>
        <Size color='#000'>{file.size}</Size>
        <Size color='#898989'>{workspace.folder_total_size}</Size>
      </SizesText>
    </Container>
  )
}
