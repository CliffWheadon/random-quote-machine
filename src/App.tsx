import React from 'react';
import './App.css';
import RandomQuoteBox from './RandomQuoteBox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container>
        <Row className={'my-auto mx-auto'}><RandomQuoteBox /></Row>
    </Container>
  );
}

export default App;
