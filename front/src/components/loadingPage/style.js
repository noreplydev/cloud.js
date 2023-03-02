import  styled from 'styled-components'

export const Blank = styled.div`
  position: absolute;
  top: 0; 
  left: 0; 
  height: 100%;
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  background-color: #fff; 
  animation: fadeIn 3s ease-in-out forwards;
  z-index: 1000;

  @keyframes fadeIn {
    0% {
      opacity: 1;
      visibility: visible; 
    } 90%{
      opacity: 1;
      visibility: visible; 
    }100% {
      opacity: 1;
      visibility: hidden; 
    }
  }
` 

export const Logo = styled.img`
  height: auto;
  width: 200px;
  margin-bottom: 30px; 
`

export const Container = styled.div`
  height: 3px; 
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #ececec;
  margin-bottom: 10px; 

  & > div {
    height: 100%;
    width: 0%; 
    background-color: #000;
    animation: loading 2.8s ease-in-out forwards;
  }

  @keyframes loading {
    0% {
      width: 0%;
    } 20% {
      width: 20%;
    } 30% {
      width: 20%;
    } 34% {
      width: 23%;
    } 60% {
      width: 60%;
    } 65% {
      width: 60%;
    } 100% {
      width: 100%;
    }
  }
`

export const Text = styled.p`
  font-size: 1rem;
  color: ${props => props.color ? props.color : '#000'};
  margin-bottom: 10px; 
`