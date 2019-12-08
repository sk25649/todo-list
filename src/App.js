import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Column } from './components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

class App extends Component {
  render() {
    return (
        <Container>
          <Column />
        </Container>
    );
  }
}

export default App;
