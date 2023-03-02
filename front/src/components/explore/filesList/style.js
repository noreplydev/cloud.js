import styled from 'styled-components';

export const Table = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    overflow-y: hidden; 
`

export const TitleContainer = styled.div`
    position: relative;
    height: fit-content;
    width: 100%;
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: center; 
    padding: 0px 3vw; 
    border-bottom: 1px solid #000; 
`

export const Title = styled.p`
    height: fit-content; 
    width: ${props => props.width}; 
    padding: 10px 0px; 
    font-size: 1rem;
    text-align: ${props => props.last ? 'right' : 'left'};
    font-family: 'dm-mono-semibold', monospace;
    font-weight: 500; 
`

export const EntrysContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: flex-start; 
    overflow-y: scroll;  
`

export const NoEntriesContainer = styled.div`
  height: 100%; 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  height: 25vh; 
  width: auto;
  margin-bottom: 20px;

  @media (min-width: 1600px) {
    height: 23vh;
  }
`

export const Text = styled.p`
  font-family: 'dm-mono-medium', monospace;
  font-size: 1rem;
  color: #898989;
  text-align: center;

  @media (min-width: 1600px) {
    font-size: 1.1rem;
  }
`