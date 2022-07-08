import styled from "styled-components";

export const FooterStyle = styled.div`
  margin-top: 6rem;  
  background-color: #061e35;  

  #container-footer {    
    max-width: 1080px;
    width: 100%;
    display: flex;
    flex-direction: column;    
    margin: 0 auto;
    padding: 20px 12px 12px 12px;
  }

  nav {    
    display: flex; 
  }  

  p {
    font-size: small;
    font-weight: 400;
    color: var(--color-secondary);
    text-align: center;    
  }  
 
  #title-footer {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--color-secondary);   
  } 

  #div-footer_1 {   
    flex-grow: 5;
    flex-shrink: 0;
    flex-basis: auto;
  } 

  #menu-footer a {
    color: var(--color-primary);
    padding: 2px 0 ;
    display: inline-block;
    text-decoration: none;

    &:hover {
      color: var(--color-secondary);
    }
  } 

  #footer-copyright ul {
    margin-top: 25px;
    margin-bottom: 10px;
    width: 100%;
    max-width: 1080px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    list-style: none;    
  }

  #footer-copyright ul li {    
    padding-left: 40px;
    padding-bottom: 20px;
    padding-top: 20px;
  }

  #footer-copyright ul a {    
    color: var(--color-secondary);  
    display: flex;
    flex-direction: column;    
    text-decoration: none;
    &:hover {
      color: var(--color-primary);
    }
  }  

  #footer-copyright svg {
    margin-bottom: 10px;
    &:hover {
      color: var(--color-primary);
    }
  }  
`