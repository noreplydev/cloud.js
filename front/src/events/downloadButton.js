

export function showToast(e, setVisible) {
    e.preventDefault();
    setVisible(true);
}

export function hideToast(e, setVisible) {
    e.preventDefault();
    setVisible(false);
}

export async function downloadFile(e, file, setDownloadState) {
  e.preventDefault()
  
  console.log('downloadFile', file)
  /// remember do not allow another download if one is already in progress
  setDownloadState({
    name: file.name,
    status: '',
    file: file.name,  
    progress: 0,
    downloaded: false, 
  })

  const { PORT, PROTOCOL, HOSTNAME } = window.config
  await fetch(`${PROTOCOL}://${HOSTNAME}:${PORT}/${file.url}`) 
    .then(response => {
      if(!response.ok) {
        console.log('error the response is not ok'); 
      }

      if(!response.body) {
        console.log('error the response body is not ok');
      }

      // to access headers, server must send CORS header "Access-Control-Expose-Headers: content-encoding, content-length x-file-size"
      // server must send custom x-file-size header if gzip or other content-encoding is used
      const contentEncoding = response.headers.get('content-encoding')
      const contentLength = response.headers.get(contentEncoding ? 'x-file-size' : 'content-length')
      if (contentLength === null) {
        console.log('error the content length is null');
      }

      const total = parseInt(contentLength, 10)
      let loaded = 0

      return new Response(
        new ReadableStream({
          start(controller) {
            const reader = response.body.getReader()

            read()
            function read() {
              reader.read().then(({done, value}) => {
                if (done) {
                  controller.close();
                  return; 
                }
                loaded += value.byteLength;
                progress({loaded, total})
                controller.enqueue(value);
                read();
              }).catch(error => {
                console.error(error);
                controller.error(error)                  
              })
            }
          }
        })
      )
    })
    .then(response => response.blob()) 
    .then(data => {
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(data)
      link.download = file.extension === '-' ? ''+file.name : file.name+file.extension
      link.click()
      setDownloadState(null)
    })
    .catch(error => {
      console.log(error)
    })


  function progress({loaded, total}) {
    const statuses = ['Fetching Data', 'Downloading', 'Finishing']
    const currentProgress = Math.round(loaded/total*100)
    let status;

    if ( currentProgress > 85 ) {
      status = statuses[2]
    } else if ( currentProgress > 20 ) {
      status = statuses[1]
    } else {
      status = statuses[0]
    }

    setDownloadState(prevState => ({
      ...prevState, 
      status: status,
      progress: currentProgress,
    }))
  }
}