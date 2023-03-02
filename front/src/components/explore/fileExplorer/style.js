import styled from "styled-components";

export const Parent = styled.section`
    height: 100%; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    background-color: #fff;
    padding-inline: 2vw;
`

export const SearchContainer = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    padding-inline: 3vw;
    margin-bottom: 30px; 
`

export const P = styled.p`
    height: fit-content;
    width: 100%;
    font-size: 1.1rem;
    font-family: 'dm-mono-medium', monospace;
    margin-bottom: 10px; 

    & > span {
        color: #898989;
    }
`

export const FolderGray = styled.img`
    height: .7rem; 
    width: auto; 
    margin-right: 10px;
    `

export const Searchbar = styled.input`
    height: fit-content; 
    width: 100%;
    padding: 10px 15px; 
    border: none; 
    border-radius: 6px;
    background-color: #ececec; 
    outline: none; 
    box-shadow: inset 0px 0px 0px 1px #fff;
    transition: all .20s ease-in-out; 

    &:focus {
        box-shadow: inset 0px 0px 0px 1px #000;
    }

    &::placeholder {
        color: #898989;
    }
`

export const Button = styled.button`
    height: fit-content;
    width: fit-content;
    padding: 10px 20px;
    border: none;
    outline: none; 
    border-radius: 6px;
    background-color: #ececec;
    color: #898989;
    font-family: 'dm-mono-regular', monospace;
    cursor: pointer;
    transition: all .15s ease-in-out;

    &:hover {
        background-color: #000;
        color: #fff;
    }
`