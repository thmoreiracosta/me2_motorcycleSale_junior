import styled from 'styled-components';

export const LoginStyle = styled.div`
  a, a:visited {
    color: unset;
    text-decoration: none;
  }

  #container-geral {    
    display: flex;
    align-items: center;
    justify-content: center;    
  }

  #container-login {            
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #logo-svg-1 {
    margin-top: 20px;
    color: white;    
  }

  #link-logo{
    margin-top: 20px;
    font-size: 25px;
    color: white;
  }

  #container-buttons {    
    width: 328px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;       
  }
 
  #div-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    align-items: center;
  }

  #button-google {
    padding: 10px;
    border-radius: 4px;
    color: black;
    font-size: 15px;
    font-weight: 400;
    box-shadow: 5px;
    cursor: pointer; 
    margin-bottom: 10px;
    &:hover {
      background-color: #a6cfe8;
    }
  }

  #button-google svg {
    vertical-align: baseline;
    margin-top: -.3em;
    margin-bottom: -.3em;   
    opacity: 200ms linear;    
  }

  #button-github {
    padding: 10px;
    border-radius: 4px;
    color: white;
    font-size: 15px;
    font-weight: 400;
    box-shadow: 5px;
    cursor: pointer; 
    margin-bottom: 10px;
    background-color: hsl(210,8%,20%);
    &:hover {
      background-color: #9ba9b2;
    }
  }

  #button-github svg {
    vertical-align: baseline;
    margin-top: -.3em;
    margin-bottom: -.3em;   
    opacity: 200ms linear;    
  }

  #button-facebook {
    background-color: #4167B2;
    padding: 10px;
    border-radius: 4px;
    color: black;
    font-size: 15px;
    font-weight: 400;
    box-shadow: 5px;
    cursor: pointer; 
    margin-bottom: 10px;
    &:hover {
      background-color: #a6cfe8;
    }
  }

  #button-facebook svg {
    vertical-align: baseline;
    margin-top: -.3em;
    margin-bottom: -.3em;   
    opacity: 200ms linear;    
  }

  form {
    margin-top: -15px;
  }

  #form-container {    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 24px;
    border-radius: 3px;
    box-sizing: inherit;
  }

  #form-container label {
    color: #7d7d7d;
    font-size: 16px;
    font-weight: 500;
  }

  #form-container form {
    width: 100%;
  }

  #email-container {
    margin: 10px 0;
    width: 100%;
  }

  .input {
    margin-top: 6px;
    padding: 6px;
    width: 100%;    
  }

  #label-senha {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }  

  #label-senha a {
    color: var(--color-primary);
    font-size: 12px;
    justify-content: end;
    text-align: end;
    &:hover {
      color: var(--color-secondary);
    }
  }

  #button-login {
    width: 100%;
    background-color: var(--color-primary);
    color: white;
    margin-top: 15px;
    box-shadow: #081b3e;
    cursor: pointer;
    padding: 20px;
    border-radius: 3%;
    align-self: center;    
    text-decoration: none;    
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 0 40px 40px var(--color-primary) inset, 0 0 0 0 var(--color-primary);
    -webkit-transition: all 150ms ease-in-out;
    transition: all 300ms ease-in-out;
      
    &:hover {
      box-shadow: 0 0 10px 0 var(--color-fourth) inset, 0 0 10px 4px #ccc;
    }    
  }

  #links-container {   
    width: 100%;
    margin-top: 38px;
    font-size: 14px;
    font-weight: 300;   
    
    justify-content: center;
    align-items: center;    
    color: #fff;    
  }

  #links-container p {    
    align-items: center;
    justify-items: center;
    text-align: center;
    margin-bottom: 12px;
  }

  #links-container a {
    margin-left: 8px;
    color: var(--color-primary);
    &:hover {
      color: var(--color-secondary);
    }
  }

  #links-container svg {
    margin-left: 4px;
  }  
`
