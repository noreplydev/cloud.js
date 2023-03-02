import React, { useState } from 'react'
import { FileExplorer } from '../../components/explore/fileExplorer/fileExplorer.jsx'
import { Details } from '../../components/details/detailsParent/details.jsx'

//styled components
import {
    Parent,
    Separator
} from './style.js'

import { DownloadProvider } from '../../context/downloadContext.js'
import { WorkspaceProvider } from '../../context/workspaceContext.js'
import { LoadingPage } from '../../components/loadingPage/loadingPage.jsx'
import { DropFilesModal } from '../../components/dropFilesModal/dropFileModal.jsx'

export const Explore = () => {
  const [showDropFiles, setShowDropFiles] = useState(false)

  return (
    <WorkspaceProvider>
      <DownloadProvider>
        <Parent>
          <LoadingPage/>
          <FileExplorer/>
          <Separator></Separator>
          <Details setShowDropFiles={setShowDropFiles}/>
        </Parent>
        {showDropFiles && <DropFilesModal setShowDropFiles={setShowDropFiles}/>}
      </DownloadProvider>
    </WorkspaceProvider>
  )
}
