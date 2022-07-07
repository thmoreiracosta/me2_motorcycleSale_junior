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
    justify-content: center;
    align-items: center;
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
      color:#ccc;
    }    
  } 
`