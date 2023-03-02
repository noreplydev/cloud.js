import React, {useState, createContext} from "react";

export const DownloadContext = createContext(); 

export const DownloadProvider = ({children}) => {
  const [download, setDownload] = useState(null); 

  const setDownloadState = (downloadState) => {
    setDownload(downloadState);
  }

  return (
    <DownloadContext.Provider value={{download, setDownloadState}}>
      {children}
    </DownloadContext.Provider>  
  )
}