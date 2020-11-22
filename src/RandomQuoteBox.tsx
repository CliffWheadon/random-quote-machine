import * as React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Renders a box with a random quote in it. The quote can be changed by clicking the button.
 */
class RandomQuoteBox extends React.Component {
    render() {
        return (
            <Jumbotron id={'quote-box'} className={'quote-box'}>
                <Container>
                    <Row><Col><p id={'text'} className={'text'}>Technically, this is a quote.</p></Col></Row>
                    <Row><Col><p id={'author'} className={'author'}>- Clifford Wheadon</p></Col></Row>
                    <Row>
                        <Col><Button id={'tweet-quote'} href={'www.google.com'}>Post to Twitter</Button></Col>
                        <Col><Button id={'new-quote'}>New quote</Button></Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default RandomQuoteBox;
