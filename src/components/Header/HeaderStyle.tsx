import styled from 'styled-components';

export const HeaderStyle = styled.div`
  width: 100%;
  padding-top: .45rem/* 20px */;
  padding-bottom: .45rem/* 20px */;
  align-items: center;  
  background-color: #153559;  
  display: flex;

  #container-logo {
    display: flex;
    height: 100%;
    width: 96%;
    align-items: center;
    justify-content: space-between;
  }

  #logo {
    display: flex;
    svg {
      width: 38px;
      height: 70px;    
      color: white;
      margin-left: 20px; 
      padding: 0.5rem; 
      display: flex;
    }  
    h2 {
      color: #dde192;
      margin-left: 10px;
      display: flex;
    }
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
    list-style-type: none;
  }

  #list ul li {
    padding: 10px;
    text-decoration: none;    
  }

  #list ul li a {
    text-decoration: none;
    color: white;
  }
 

 
`