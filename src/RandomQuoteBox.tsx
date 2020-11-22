import * as React from 'react';
import './RandomQuoteBox.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons/faQuoteLeft';

/**
 * Renders a box with a random quote in it. The quote can be changed by clicking the button.
 */
class RandomQuoteBox extends React.Component {
    render() {
        return (
            <Jumbotron id={'quote-box'} className={'quote-box'}>
                <Container>
                    <Row>
                        <Col xs={1}>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                        </Col>
                        <Col>
                            <p id={'text'} className={'text'}>Technically, this is a quote.</p>
                        </Col>
                    </Row>
                    <Row className={'authorRow'}><p id={'author'} className={'author'}>- Clifford Wheadon</p></Row>
                    <Row>
                        <Col>
                            <Button id={'tweet-quote'} href={'www.google.com'}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </Button>
                        </Col>
                        <Col><Button id={'new-quote'}>New quote</Button></Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default RandomQuoteBox;
