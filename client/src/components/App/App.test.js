import {render, screen} from '@testing-library/react';
import App from './App';

test('The Hungry Warrior', () => {
  render(<App />);
  const linkElement = screen.getByText(/Warrior/i);
  expect(linkElement).toBeInTheDocument();
});