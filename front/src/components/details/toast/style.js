import styled from 'styled-components'


export const ToastContainer = styled.div`
  position: absolute;
  height: fit-content; 
  width: fit-content;
  top: 20px; 
  left: 50%;
  transform: translateX(-50%); 
  display: none; 
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px; 
  padding: 5px 10px; 
  z-index: 10000; 
  gap: 5px; 
  transform-origin: center;
  animation: toast 0.2s ease-in-out ;

  @keyframes toast {
    0% {
      opacity: 0;
      scale: 0.5;
    } 100% {
      opacity: 1;
      scale: 1;
    }
  }
`