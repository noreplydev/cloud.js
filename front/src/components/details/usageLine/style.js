import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 6vh; 
`

export const FolderName = styled.p`
  font-size: 1rem;
  font-family: 'dm-mono-medium', monospace;  
  font-weight: 500;
  margin-bottom: 10px; 
`

export const UsageLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 6px;
  width: 100%;
  background-color: #ececec;
`

export const Percentage = styled.div`
  position: relative;
  display: flex; 
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.color}; 
  height: 100%;
  width: ${props => props.percentage};
  transition: height 0.05s ease-in-out;

  &:hover {
    height: 150%; 
    cursor: pointer; 
  }

  &:hover > * {
    display: flex;
  }
`