import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../components/NavBar';
import { LOGO_ALT } from '../constants/texts';

jest.mock('../assets/logo.png', () => 'mocked_logo.png');

describe('NavBar', () => {
    test('renders navigation bar', () => {
        render(<NavBar />);
        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });

    test('renders logo image with correct alt text', () => {
        render(<NavBar />);
        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute('src', 'mocked_logo.png');
        expect(imgElement).toHaveAttribute('alt', LOGO_ALT);
    });
});
