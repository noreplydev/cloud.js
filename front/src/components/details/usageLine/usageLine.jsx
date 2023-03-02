import React, { useContext } from 'react'
import { WorkspaceContext } from '../../../context/workspaceContext'
import { Toast } from '../toast/percentageToast'

import {
  Container, 
  FolderName, 
  UsageLineContainer, 
  Percentage
} from './style.js'

export const UsageLine = () => {
  const {workspace} = useContext(WorkspaceContext)
  const colors = [
    ['#00FF85', '#24B46F'], 
    ['#149CE8', '#81d1ff'],
    ['#F0CE54', '#A88F39'], 
    ['#FD5757', '#6c2d2d']
  ]

  return (
    <Container>
      <FolderName>Folder usage</FolderName>
      <UsageLineContainer>
        {
          workspace.folder_usage.map((item, index) => {
            return (
              <Percentage 
                key={item} 
                color={colors[index][0]}
                percentage={item[1]} // 0: name, 1: percentage ['.pdf', 34%]
              >
                <Toast
                  type={item[0]}
                  percentage={item[1]}
                  bg={colors[index][0]}
                  fg={colors[index][1]}
                ></Toast>
              </Percentage>
            )
          })
        }
        <Percentage 
          color='#ececec' // 0: name, 1: percentage ['.pdf', 34%]
        >
        </Percentage>
      </UsageLineContainer>
    </Container>
  )
}
