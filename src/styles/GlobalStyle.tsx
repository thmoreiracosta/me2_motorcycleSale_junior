import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {            
    background-color: #737f95;
    box-sizing: border-box;   
    padding: 0;
    margin: 0;    
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-font-smoothing: antialiased;
  }
`