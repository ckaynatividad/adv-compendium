import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('filtering renders', async () => {
  render(<App />);
  const filter = await screen.findByRole('combobox');
  userEvent.selectOptions(filter, 'pure anada');

  expect(screen.getByRole('option', { name: 'pure anada' }).selected).toBe(true);
});
