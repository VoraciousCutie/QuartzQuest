import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders intro card with headers', () => {
    render(<App />);
    
    // Check for main title
    const mainTitle = screen.getByText(/🔮Quartz Quest🔮/i);
    expect(mainTitle).toBeInTheDocument();
    
    // Check for subtitle
    const subTitle = screen.getByText(/~ WIP ~/i);
    expect(subTitle).toBeInTheDocument();
  });

  test('renders image with correct alt text', () => {
    render(<App />);
    
    // Check if image is present with alt text
    const logoImage = screen.getByAltText(/Quartz Quest Logo/i);
    expect(logoImage).toBeInTheDocument();
  });
});