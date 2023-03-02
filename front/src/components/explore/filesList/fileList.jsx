import React, {useContext} from 'react'

// styled components
import {
  Table,
  TitleContainer, 
  Title,
  EntrysContainer, 
  NoEntriesContainer, 
  Img, 
  Text
} from './style.js'

import pyramid from '../../../assets/icons/pyramid.svg'

import { EntryRow } from '../entryRow/entryRow.jsx'
import { DownloadProgress } from '../downloadProgress/downloadProgress.jsx'
import { DownloadContext } from '../../../context/downloadContext.js'

export const FilesList = ({ entries }) => {
  const { download } = useContext(DownloadContext);
  
  return (
    <>
      {
        entries.length > 0 ? 
          <Table>
            <TitleContainer>
                <Title width="50%">Name</Title>
                <Title width="20%">Extension</Title>
                <Title width="20%">Created on</Title>
                <Title width="20%">at</Title>
                <Title width="20%" last>Size</Title>
            </TitleContainer>
            <EntrysContainer id="entries-container">                                                                                                                                                                               
              { 
                entries.map((file, index) => {
                  return (
                    <EntryRow file={file} key={index}/>
                  )
                })
              }
            </EntrysContainer>
            { download && <DownloadProgress />}
          </Table>
          : 
          <NoEntriesContainer>
            <Img src={pyramid} alt="pyramid"/>
            <Text>There are not matches <br></br> for this name</Text>
          </NoEntriesContainer>
      }
    </>
  )
}