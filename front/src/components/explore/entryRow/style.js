import styled from 'styled-components'

export const Row = styled.div`
    position: relative;
    height: fit-content;
    width: 100%;
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start; 
    align-items: center;  
    padding: 0px 3vw; 
    border-top: 1px solid #bdbdbd; 
    transition: all .15s ease-in-out;

    &:first-child {
        border-top: 0px; 
    }

    &:hover {
        background-color: #F2F2F2; 
        cursor: pointer; 
    }
`
 
export const Entry = styled.div`
    height: fit-content; 
    width: ${props => props.width}; 
    padding: 3vh 0px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.last ? 'flex-end' : 'flex-start'};
`

export const Name = styled.p`
    height: fit-content;
    width: fit-content; 
    font-size: 1rem; 
    white-space: pre-line;
`

export const Folder = styled.img`
    height: .7rem; 
    width: auto; 
    margin-right: 10px;
`

export const Container = styled.div`
    position: relative;
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const Download = styled.img`
    height: 1.2rem; 
    width: auto;
    margin-left: 10px; 
    display: none;  
    animation: appear .15s ease-in-out;
    
    ${Row}:hover & {
        display: block;
    }

    @keyframes appear {
        0% {
            scale: .50; 
            opacity: 0;
        }
        100% {
            scale: 1;
            opacity: 1;
        }
    }
`

export const Tag = styled.div`
    position: absolute;
    top: -40%;
    left: 170%;
    height: fit-content;
    width: fit-content;
    padding: 6px 11px;
    border-radius: 5px;
    background-color: #0055ff;
    color: #fff; 
    font-size: .8rem;
    white-space: nowrap;
    overflow: visible; 
    z-index: 9999; 
    animation: appear .1s ease-in-out;

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: -6px;
        height: 0;
        width: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #0055ff;
        border-radius: 5px; 
        transform: translateY(-50%);
        animation: appear .1s ease-in-out;
    }

    @keyframes appear {
        0% {
            scale: .90; 
            opacity: 0;
        }
        100% {
            scale: 1;
            opacity: 1;
        }
    }
`