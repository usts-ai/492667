import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('rend sans erreur', () => {
  render(<App />);
});
