import styled from "styled-components";

export const Nav = styled.nav`
    height: fit-content; 
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    padding-block: 3vw; 
`

export const Img = styled.img`
    margin-inline: 2vw 1vw; 
    height: 40px;
    width: auto;

    &:hover {
      cursor: pointer;
    }
`

export const Tittle = styled.p`
    height: fit-content;
    width: fit-content;
    color: #000;
    font-size: 1.1rem;
    color: #000; 
    font-weight: 500;
    transition: color 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        color: #000;
        cursor: pointer;
    }
`
