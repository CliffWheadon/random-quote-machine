import React from 'react';
import { render, screen } from '@testing-library/react';
import RandomQuoteBox from './RandomQuoteBox';

test('should have a quote', () => {
    render(<RandomQuoteBox />);
    expect(screen.getByText('Technically, this is a quote.')).toBeInTheDocument();
});

test('should have an author', () => {
    render(<RandomQuoteBox />);
    expect(screen.getByText('Clifford Wheadon')).toBeInTheDocument();
});

test('should have a new quote button', () => {
    render(<RandomQuoteBox />);
    expect(screen.getByText("New quote")).toBeInTheDocument();
});
