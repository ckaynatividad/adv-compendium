import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { setupServer } from 'msw/node';
import Controls from '../components/Controls';
import Makeups from './Makeups';
import { rest } from 'msw';
import App from '../App';

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
