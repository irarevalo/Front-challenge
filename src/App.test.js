import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Gestion de empleados', () => {
  render(<App />);
  const linkElement = screen.getByText(/Agregar empleado:/i);
  expect(linkElement).toBeInTheDocument();
});
