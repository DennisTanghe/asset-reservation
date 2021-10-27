import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the app', () => {
  const testRenderer = TestRenderer.create(<App />);
  const testInstance = testRenderer.root;

  expect(testInstance.type).toEqual(App);
})

test('renders company logo', () => {
  render(<App />);
  const companyLogo: HTMLElement = screen.getByAltText(/My Company/i);
  expect(companyLogo).toBeInTheDocument();
});
