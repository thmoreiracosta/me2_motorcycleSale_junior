import styled from 'styled-components';

export const HeaderStyle = styled.div`
  width: 100%;
  height: 90px;
  justify-content: center;
  align-items: center;    
  background-color: var(--color-primary);
  display: flex;  
  margin-bottom: 10px;

  #container-logo {
    display: flex;
    height: 100%;
    width: 96%;
    align-items: center;
    justify-content: space-between;
  }

  #logo {
    display: flex;    
    align-items: center;
    margin-top: 0;
    
    svg {
      width: 100px;
      height: 35px;    
      color: white;            
    }  
  }

  #header-h1 { 
    color: white;
    text-align: center;
    justify-content: center;
    margin: auto;
    padding: 0px; 
    font-size: 2.5rem;    
    line-height: 1.25;    
  }

  #list {
    justify-content: space-between;
    float: left;
    display: inline;
  }

  #list ul {
    display: flex;    
    float: left;
    padding: 0px 20px;
       
  }

  #list ul li {
    padding: 10px;
            
  }

  #list ul li a {    
    color: white;
    &:hover {
      background-color: #ffffff;
      color: var(--color-primary);
      padding: 8px;
      border-radius: 12px;
    }    
  } 
`