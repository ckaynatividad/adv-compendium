import Makeups from './Makeups';

import { render, screen } from '@testing-library/react';

test('renders loading for list', () => {
  render(<Makeups />);
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();
});

test('should render at least one item on list', async () => {
  render(<Makeups />);
  const listItem = await screen.findByText('glossier');
  expect(listItem).toBeInTheDocument();
});

test('should render 12 items on first page', async () => {
  render(<Makeups />);
  const listItem = await screen.findAllByRole('heading');
  expect(listItem).toHaveLength(12);
});
