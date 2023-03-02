import styled from "styled-components";

export const Parent = styled.section`
  position: relative;
  height: 100%;
  min-width: 25%;
  max-width: 25%;
  display: flex; 
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-inline: 2vw; 
`

export const Button =  styled.button`
  position: relative;
  height: fit-content; 
  width: 100%;
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace;
  margin-top: 4.5vh;
  padding: 10px 15px; 
  border: none;  
  border-radius: 6px;
  outline: none; 
  background-color: #ececec; 
  box-shadow: inset 0 0 0 1px #898989;
  color: #898989;  
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #0055ff; 
    box-shadow: inset 0 0 0 1px #0055ff;
    background-color: rgba(0, 85, 255, .3); 
  }
`

export const Wrapper = styled.div`
  position: relative; 
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; 
  overflow: scroll; 
`

export const Title = styled.p`
  height: fit-content;
  width: fit-content; 
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace;
  font-weight: 500;
  margin-bottom: 2vh; 
  border-bottom: 1px solid #000;

  &:first-child {
    padding-top: 5vh; 
  }
`

export const Text = styled.p`
  height: fit-content;
  width: 100%; 
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace;
  font-weight: 500;
  color: #898989; 
  word-break: break-all; 
  margin-bottom: 5vh; 
`