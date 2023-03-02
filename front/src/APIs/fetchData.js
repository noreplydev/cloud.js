// import {data} from '../data/data.js'


// fetch on the first load and on every folder click
export async function fetchData(workspace, updateWorkspace) {
  // fetch the data
  const data = await getData(workspace.segments)

  // set the searchbar path
  const segments = workspace.segments 
  const printablePath = segments.length <= 3 
    ? segments.join('/')
    : '…/'+segments.slice(segments.length-3, segments.length).join('/')

  // udpate the workspace context to render the folder usage
  updateWorkspace({
    ...workspace,
    currentFile: {
      name: 'No selected file', // clear the current file
      extension: '', 
      url: '-', 
    },
    folder_usage: data.folder_usage,
    folder_total_size: data.folder_total_size,
    loading: false, 
    path: printablePath, 
    files: data.content
  })

  console.log(workspace)
}

// call to the server and get the data with the correct format
export const getData = async (segments) => {
  const {PORT, PROTOCOL, HOSTNAME, DIRECTORY_DELIMITER} = window.config; 
  const url = segments.join(DIRECTORY_DELIMITER)

  const data = await fetch(`${PROTOCOL}://${HOSTNAME}:${PORT}/files/${url}`)
    .then(json=> json.json()) 
    .then(_data => _data)

  return data
}