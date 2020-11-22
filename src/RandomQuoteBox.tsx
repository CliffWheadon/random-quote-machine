import * as React from 'react';

/**
 * Renders a box with a random quote in it. The quote can be changed by clicking the button.
 */
class RandomQuoteBox extends React.Component {
    render() {
        return (
            <div id={'quote-box'} className={'quote-box'}>
                <p id={'text'} className={'text'}>This is where a quote will go.</p>
                <p id={'author'} className={'author'}>Author Name</p>

                <a className={'button'} id={'tweet-quote'}></a>
                <a className={'button'} id={'new-quote'}>New quote</a>
            </div>
        );
    }
}

export default RandomQuoteBox;
