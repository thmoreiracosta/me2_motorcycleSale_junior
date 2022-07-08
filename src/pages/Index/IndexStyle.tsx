import styled from 'styled-components';

export const IndexStyle = styled.div`
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
    color: var(--color-primary);
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
    color: white;
    margin: 0.25rem/* 4px */;
  }

  h1 {
    color: white;
    margin-top: 32px;
    margin-bottom: 15px;
    font-size: 2.5rem;    
    line-height: 1.25;     
  }  

  #destack {
    color: var(--color-primary);    
    font-size: 2.5rem;    
  }
  
  p {
    color: white;
    margin-right: 50px;
  }

  form {
    width: 100%;    
    display: flex;
    flex-direction: column;
    gap: 0.5rem/* 8px */;
  }

  span {
    color: #ccc;
    font-size: 16px;
    display: block;
  }

  #container-subscribe {  
    background-color: var(--color-fourth);   
    padding: 2rem/* 32px */;
    border: 5px solid #fff;
    border-width: 3px;
    border-radius: 0.25rem/* 4px */; 
    width: 28rem;   
  }

  strong {    
    color: white;
    text-align: justify;
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

  #button { 
    color: #fff;
    box-shadow: #081b3e;
    padding: 20px;
    border-radius: 3%;
    align-self: center;
    background-color: var(--color-primary);
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

  #button-container { 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #button-container ul {    
    margin-top: 10px;
    padding: 20px;    
  } 
`