import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App';

test('renders Modern Music Player Interface', () => {
  render(<App />);
  const linkElement = screen.getByText(/Modern Music Player Interface/i);
  expect(linkElement).toBeInTheDocument();
});

