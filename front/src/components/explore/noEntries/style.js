import styled from 'styled-components'

export const Parent = styled.div`
  height: 100%; 
  width: 100%; 
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
`

export const Img = styled.img`
  height: 18vh;
  width: auto; 
  margin-bottom: 20px;
  margin-left: -50px; 

  @media (min-width: 1600px) {
    height: 15vh;
  }  
`

export const Text = styled.p`
  font-size: 1rem;
  color: #898989;
  text-align: center; 
  margin-bottom: ${props => props.margin ? props.margin : '0px'};
`