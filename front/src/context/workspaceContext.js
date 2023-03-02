import React, {useState, createContext} from "react";

export const WorkspaceContext = createContext(); // 

export const WorkspaceProvider = ({children}) => {
  const [workspace, setWorkspace] = useState({
    segments: [], // the CWD path segments (ROUTING MAGIC)
    currentFile: { // selected file on click
      name: 'No selected file',
      extension: '', 
    }, 
    folder_usage: [], // the folder most used file types
    folder_total_size: '0 MB', // the folder total size
    loading: false, // loading state to prevent multiples clicks
    path: '', // the path to be displayed on the searchbar
    data: undefined, // the data to be displayed on the table
  });

  
  const updateWorkspace = (newWorkspace) => {
    setWorkspace(newWorkspace);
  }

  return (
    <WorkspaceContext.Provider value={{workspace, updateWorkspace}}>
      {children}
    </WorkspaceContext.Provider>
  )
}