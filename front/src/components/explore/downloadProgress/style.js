import styled from 'styled-components'

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  justify-content: flex-start;
  padding-top: 20px; 
  box-shadow: 0px -60px 40px 0px #fff; 
  animation: appearContainer .12s ease-in-out;
  z-index: 999999999999999999; 

  @keyframes appearContainer {
    0% {
      opacity: 0;
      scale: .80;
      transform: translateY(80%);
    } 100% {
      opacity: 1;
      scale: 1;
      transform: translateY(0%);
    }
  }
`

export const TextContainer = styled.div`
  height: fit-content; 
  width: 100%; 
  padding-bottom: 10px; 
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: flex-start;
`

export const Text = styled.p`
  height: fit-content;
  width: 100%;
  white-space: nowrap;
  font-size: 1rem;
  color: ${props => props.color}; 
  text-align: ${props => props.align};
`

export const ProgressContainer = styled.div`
  height: 3px;
  width: 100%;
  background-color: #ececec;
`

export const Progress = styled.div`
  height: 100%;
  width: 20%;
  background-color: #0055ff;
  transition: width .01s ease-in;
`