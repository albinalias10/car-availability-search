import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom'; // For extended matchers like toBeInTheDocument
import { HEADER_TITLE } from '../constants/constants';

describe('Header Component', () => {
  it('should render header title', () => {
    render(<Header />);
    
    // Check if the header title is displayed
    const headerTitle = screen.getByText(HEADER_TITLE);
    expect(headerTitle).toBeInTheDocument();
  });

  it('should render logo with correct alt text', () => {
    render(<Header />);
    
    // Check if logo image is rendered with the correct alt text
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
  });
});