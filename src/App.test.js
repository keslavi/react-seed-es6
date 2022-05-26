import { render, screen } from '@testing-library/react';
//import App from './App';  //app is called in router
import Router from './router'; 


test('app page with router loads', () => {
  render(<Router />);
  const el = screen.getByTestId('app');
  expect(el).toBeInTheDocument();
});

