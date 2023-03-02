import React from 'react'; 

//styled components
import { 
    Nav, 
    Img, 
    Title,   
    Tittle
} from './style.js'

import logo from '../../assets/icons/logo-mini.png'

const Navbar = () => {
  return (
    <Nav>
      <Img src={logo} alt="logo" />
      <Tittle>Cloudjs</Tittle>  
    </Nav>
  )
}

export default Navbar