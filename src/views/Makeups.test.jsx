import Makeups from './Makeups';

import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders loading for list', () => {
  render(<Makeups />);
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

test('filtering renders', async () => {
  render(<App />);

  const filter = await screen.findByRole('combobox');
  userEvent.selectOptions(filter, 'pure anada');

  expect(screen.getByRole('option', { name: 'pure anada' }).selected).toBe(true);
});
