import React from 'react';
import { render, screen } from '@testing-library/react';
import RandomQuoteBox from './RandomQuoteBox';

test('should render a RandomQuoteBox', () => {
    render(<RandomQuoteBox />);
});

test('should render text', () => {
    const quoteBox = render(<RandomQuoteBox />);
    expect(quoteBox.container.querySelector('#text')).toBeInTheDocument();
});

test('should render author', () => {
    const quoteBox = render(<RandomQuoteBox />);
    expect(quoteBox.container.querySelector('#author')).toBeInTheDocument();
});

test('should have a new quote button', () => {
    render(<RandomQuoteBox />);
    expect(screen.getByText("New quote")).toBeInTheDocument();
});
