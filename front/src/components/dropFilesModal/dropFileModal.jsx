import React, { useContext, useState, useRef } from 'react'

import {
  ModalContainer, 
  Modal, 
  Form,
  Input,
  Title, 
  Text, 
  DragZone, 
  DropText, 
  File,
  SelectButton, 
  SendButton, 
  Loader
} from './style.js'

import { WorkspaceContext } from '../../context/workspaceContext.js'
import {fetchData} from '../../APIs/fetchData.js'

export const DropFilesModal = ({setShowDropFiles}) => {
  const {PORT, PROTOCOL, HOSTNAME, DIRECTORY_DELIMITER} = window.config

  const {workspace, updateWorkspace} = useContext(WorkspaceContext)
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState(null)
  const [sending, setSending] = useState(false) // to display a loading animation

  const input = useRef(null)

  function closeModal(e) {
    e.preventDefault()
    setShowDropFiles(false)
  }

  // handle drag events
  function handleDrag(e) {
    e.preventDefault();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);

    if (!e.dataTransfer.files) {  
      return
    }

    if (e.dataTransfer.files[0].size > 20000000) {
      console.error('File is too big')
      setFile({name: "Error: The file exceeds the maximum size of 200MB"});
      return
    }

    console.log(e.dataTransfer.files)
    setFile(e.dataTransfer.files[0]); 
  };

  // triggers when file is selected with click
  function handleChange(e) {
    e.preventDefault();

    if (!e.target.files) {
      return 
    }

    if (e.target.files[0].size > 200000000) {
      console.error('File is too big')
      setFile({name: "Error: The file exceeds the maximum size of 200MB"});
      return
    }

    console.log(e.target.files[0])
    setFile(e.target.files[0]); 
  };
    
  // open file manager to select files
  function openFileManager(e) {
    e.preventDefault()
    input.current.click()
  }

  // send file to server
  async function sendData(e) {
    e.preventDefault()

    if (!file) {
      console.error('No file selected')
      return 
    }

    if (!file.size || file.size > 200000000) {
      console.error('Cannot send the file, the size is too big')
      setFile({name: "Error: Cannot send the file, the size is too big"})
      return
    }

    try {
      setSending(true)
      const formData = new FormData()
      formData.append('file', file)

      const path = workspace.path.split('/').join(DIRECTORY_DELIMITER)

      await fetch(`${PROTOCOL}://${HOSTNAME}:${PORT}/upload/${path}`, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(res => {
          console.log(res)
          fetchData(workspace, updateWorkspace) // fetch workspace data again to update the files list
          setShowDropFiles(false) // close modal
        })
        .catch(err => console.error(err))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ModalContainer onClick={closeModal}>
      <Modal onClick={e => e.stopPropagation()}>
        <Form onDragEnter={handleDrag} onSubmit={sendData}>
          <Input type="file" name="file" onChange={handleChange} ref={input}/>
          <Title>Upload on</Title>
          <Text>/files/{workspace.path}</Text>
          {
            sending 
              ? <Loader></Loader>
              : <>
                <DragZone 
                  className={dragActive ? 'dropActive' : ''} 
                  onDragEnter={handleDrag} 
                  onDragOver={handleDrag} // necessary with html5 to handle drop event
                  onDragLeave={handleDrag} 
                  onDrop={handleDrop}
                >
                  <DropText>Drop files <br></br> or 
                    <SelectButton onClick={openFileManager}>select</SelectButton>
                  </DropText>
                  <File xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.29 78">
                    <path d="M268.54,289H231.46a10.11,10.11,0,0,1-10.11-10.11V221.11A10.11,10.11,0,0,1,231.46,211h27.15a10.12,10.12,0,0,1,7.39,3.21l9.92,10.61a10.11,10.11,0,0,1,2.73,6.9v47.17A10.11,10.11,0,0,1,268.54,289Z" transform="translate(-221.35 -211)"/>
                  </File>
                </DragZone>
                {
                  file && <p>{file.name}</p>
                }
                <SendButton onClick={sendData}>Upload</SendButton>
              </>
          }
        </Form>
      </Modal>
    </ModalContainer>
  )
}
