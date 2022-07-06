import styled from 'styled-components';

export const SubscribeStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  div #_one {
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;    
  }

  div #_two {
    max-width: 640px;
  }

  h1 {
    color: white;
    margin-top: 32px;
    font-size: 2.5rem;    
    line-height: 1.25;
    border: 1px solid red;
  } 
  
  p {
    color: white;
    border: 1px solid red;
  }
`