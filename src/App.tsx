import React from 'react';
import './App.css';
import RandomQuoteBox from './RandomQuoteBox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container className={"QuoteBoxContainer"}>
        <Row className={"my-auto"}>
            <Col/>
            <Col xs={8}><RandomQuoteBox /></Col>
            <Col/>
        </Row>
    </Container>
  );
}

export default App;
