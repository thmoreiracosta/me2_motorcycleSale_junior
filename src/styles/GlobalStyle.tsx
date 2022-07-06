import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {            
    background-color: #1a1c2a;
    box-sizing: border-box;   
    padding: 0;
    margin: 0;    
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`