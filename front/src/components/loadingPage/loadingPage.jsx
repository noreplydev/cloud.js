import React from 'react'

import {
  Blank, 
  Logo, 
  Container,
  Text
} from './style.js'
import logo from '../../assets/icons/logo.svg'

export const LoadingPage = () => {
  const { PROTOCOL, HOSTNAME, PORT } = window.config

  return (
    <Blank>
      <Logo src={logo} alt='logo'/>
      <Container>
        <div></div>
      </Container>
      <Text>Loading data</Text>
      <Text color='#898989'>{PROTOCOL}://{HOSTNAME}:{PORT}</Text>
    </Blank>
  )
}
