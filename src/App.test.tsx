import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a RandomQuoteBox', () => {
  render(<App />);
  const quoteBox = document.getElementById('quote-box');
  expect(quoteBox).toBeInTheDocument();
});
