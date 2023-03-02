import { createGlobalStyle } from "styled-components";
import regular from './assets/fonts/DMMono-Light.ttf'
import medium from './assets/fonts/DMMono-Regular.ttf'
import semibold from './assets/fonts/DMMono-Medium.ttf'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'dm-mono-regular';
        src: url(${regular});
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'dm-mono-medium';
        src: url(${medium});
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'dm-mono-semibold';
        src: url(${semibold});
        font-weight: 500;
        font-style: normal;
    }

    * {
        margin: 0px; 
        padding: 0px;
        box-sizing: border-box;
        font-family: 'dm-mono-medium', monospace;
        font-size: 1rem; 
    }

    body {
        position: relative;
        background-color: #fff;
        overflow: hidden; 
    }
    
    #root {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-inline: 3vw; 
    }
`
export default GlobalStyle;