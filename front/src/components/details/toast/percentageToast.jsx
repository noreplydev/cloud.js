import React from 'react'

import {
  ToastContainer, 
} from './style.js'

export const Toast = ({bg, fg, type, percentage}) => {
  return (
    <ToastContainer style={{backgroundColor: `${bg}`}}>
      <p>{type}</p>
      <p style={{ color: `${fg}`}}>{percentage}</p>
    </ToastContainer>
  )
}
