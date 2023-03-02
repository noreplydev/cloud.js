import styled from 'styled-components';  

export const ModalContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  position: relative; 
  height: fit-content; 
  width: fit-content; 
  border-radius: 4vh; 
  padding: 5vh; 
  background-color: #fff;
  animation: appearModal .15s ease-in-out; 
  box-shadow: inset 0px 0px 0px 1px #fff;
  transition: all .05s ease-in-out; 

  @keyframes appearModal {
    0% {
      opacity: 0;
      margin-top: 10vh; 
    } 100% {
      opacity: 1;
      margin-top: 0;
    }
  }
`

export const Form = styled.form`
  height: fit-content; 
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Input = styled.input`
  display: none;
`

export const Title = styled.p`
  font-size: 1.1rem; 
  font-family: 'dm-mono-medium', monospace;
  color: #000; 
  margin-bottom: 1.5vh; 
`

export const Text = styled.p`
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace; 
  color: #898989; 
  margin-bottom: 3vh; 
`

export const File = styled.svg`
  position: absolute;
  height:15vh; 
  width: auto;
  opacity: 0.3;
  bottom: 0px; 
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  fill: #898989;
  z-index: 0;
  transform-origin: bottom left;
`

export const DragZone = styled.div`
  position: relative;
  height: 25vh;
  width: 100%;
  border-radius: 3.5vh;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 0px 0px 1px #8989897c;
  overflow: hidden;
  transition: all .15s ease-in-out;
  color: #898989;
  margin-bottom: 3vh;

  &.dropActive {
    box-shadow: inset 0px 0px 0px 1px #0055ff;
    background-color: #0055ff67;
    color: #000;
    fill: #000;
  }
`

export const DropText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  font-family: 'dm-mono-medium', monospace;
  z-index: 1;
  line-height: 2rem;
`

export const SelectButton = styled.span`
  padding: 0.5vh 1vh; 
  border-radius: 1vh;
  margin-left: 10px; 
  background-color: transparent;
  box-shadow: inset 0px 0px 0px 1px #000;
  color: #000;
  cursor: pointer;
  transition: all .15s ease-in-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export const Loader = styled.div`
  position: relative; 
  height: 0.4vh; 
  width: 100%; 
  background-color: #ececec;
  margin-top: -0.2vh; 
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 40%;
    background-color: #000;
    animation: loading .8s ease-in-out infinite;
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    } 100% {
      transform: translateX(300%);
    }
  }
`

export const SendButton = styled.button`
  position: relative; 
  height: fit-content; 
  width: fit-content;
  border: none;
  background-color: #000; 
  color: #fff;
  font-size: 1rem;
  font-family: 'dm-mono-regular', monospace;
  font-weight: 400;
  padding: 1vh 1.3vh; 
  border-radius: 1vh;
  align-self: flex-end;
  cursor: pointer;
`