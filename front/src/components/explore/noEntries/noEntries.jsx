import React from 'react'
import server from '../../../assets/icons/server.svg'

import {
  Parent, 
  Img, 
  Text, 
} from './style.js'

export const NoEntries = () => {
  const { PORT, PROTOCOL, HOSTNAME } = window.config

  return (
    <Parent>
      <Img src={server} alt="server"/>
      <Text margin='10px'>{PROTOCOL}://{HOSTNAME}:{PORT} </Text>
      <Text>We can’t find the <br></br> data source</Text>
    </Parent>
  )
}
