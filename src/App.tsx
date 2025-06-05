import React from 'react';
import styled from '@emotion/styled';
import MontrealMap from './components/MontrealMap';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <AppContainer>
      <MontrealMap />
    </AppContainer>
  );
}

export default App; 