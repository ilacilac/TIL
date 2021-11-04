import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import styled from 'styled-components';

const GlobalStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #2b2b2b;
`;

const App = () => { 
  return (
    <GlobalStyle>
      <TodoTemplate />
    </GlobalStyle>
  );
};

export default App;
