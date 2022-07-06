import styled from 'styled-components';

export const SubscribeStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-width: 1px;   
  
  #_one {
    width: 100%;
    max-width: 1280px;  
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;     
  }

  #_two {
    max-width: 640px;    
  }

  #accredited {
    width: 100%;
    max-width: 1280px;
    margin-top: 0.5rem/* 8px */;
    display: flex;
    flex-direction: column;
  }

  h4 {
    margin-bottom: .5rem/* 16px */;
    margin-top: 2.5rem/* 32px */;    
    font-size: 17px;
  }

  h5 {
    font-size: 20px;
    display: block;
    margin:0;
  }

#accredited-onli {
    display: flex;
    gap: 1rem/* 16px */;
    margin-top: 1rem/* 24px */;
  }

  #image-accredited {
    margin-bottom: 2rem;
    height: 4rem/* 64px */;    
    width: 4rem/* 64px */;
    border-radius: 50%;
    border-width: 2px;
    border: 2px solid aqua;
    line-height: 1.625;
  } 

  #name-accredited {
    margin: 0.25rem/* 4px */;
  }

  h1 {
    color: white;
    margin-top: 32px;
    font-size: 2.5rem;    
    line-height: 1.25;    
  }  
  
  p {
    color: white;    
  }

  form {
    width: 100%;    
    display: flex;
    flex-direction: column;
    gap: 0.5rem/* 8px */;
  }

  span {
    font-size: 16px;
    display: block;
  }

  #container-subscribe {  
    background-color: #40566e;   
    padding: 2rem/* 32px */;
    border-width: 1px;
    border-radius: 0.25rem/* 4px */; 
    width: 28rem;   
  }

  strong {
    
    color: white;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
    margin-bottom: 1.5rem/* 24px */;
    display: block;
  }

  #img-moto {
    width: 100%;
  }

  input {
    background-color: #dccece;
    border-radius: 0.25rem/* 4px */;
    padding-left: 1.25rem/* 20px */;
    padding-right: 1.25rem/* 20px */;
    height: 3rem/* 56px */;
    width: 25.2rem;
  }

  button {    
    margin-top: 1rem/* 16px */;
    text-transform: uppercase;
    padding-top: 1rem/* 16px */;
    padding-bottom: 1rem/* 16px */;
    border-radius: 0.25rem/* 4px */;
    font-weight: 700;
    font-size: 0.875rem/* 14px */;
    line-height: 1.25rem/* 20px */;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    opacity: 0.5;

    &:hover { background-color: #416a7d; }
    


  }


 
`