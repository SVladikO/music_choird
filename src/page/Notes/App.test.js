import { render, screen } from '@testing-library/react';
import NotePage from './Note.page';

test('renders learn react link', () => {
  render(<NotePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
