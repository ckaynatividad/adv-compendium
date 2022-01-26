import { render, screen } from '@testing-library/react';
import Controls from '../components/Controls';

import Quotes from './Quotes';

test('renders loading for list', () => {
  render(<Quotes />);
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

test('filtering renders', () => {
  render(<Controls />);

  const filter = screen.getByText(/filter/i);
  const button = screen.getByRole('button');
  const brand = screen.queryByText(/colourpop/i);

  expect(filter).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(brand).toBeInTheDocument();
});