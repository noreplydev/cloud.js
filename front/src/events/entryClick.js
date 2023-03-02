import { fetchData } from "../APIs/fetchData"

export function entryClick(e, file, workspace, updateWorkspace) {
  e.preventDefault()

  if (workspace.loading) return // avoid multiple clicks 

  // for files, update the current file and return
  if (!file.dir) {
    updateWorkspace({
      ...workspace, 
      currentFile: file,
    })
    return
  }

  // if is .. directory pop the last segment otherwise push the new segment
  file.name === '..' ? workspace.segments.pop() : workspace.segments.push(file.name)
  workspace.loading = true // reset loading state to avoid multiple clicks

  // fetch the new folder data
  fetchData(workspace, updateWorkspace)
}