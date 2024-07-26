import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ButtonLayout from '../components/Button';

describe('ButtonLayout', () => {
    test('renders button with label', () => {
        render(<ButtonLayout label="Click Me" />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveTextContent('Click Me');
    });

    test('renders button with icon', () => {
        const TestIcon = () => <svg data-testid="test-icon"></svg>;
        render(<ButtonLayout icon={<TestIcon />} />);
        const iconElement = screen.getByTestId('test-icon');
        expect(iconElement).toBeInTheDocument();
    });

    test('renders button with label and icon', () => {
        const TestIcon = () => <svg data-testid="test-icon"></svg>;
        render(<ButtonLayout label="Click Me" icon={<TestIcon />} />);
        const buttonElement = screen.getByRole('button');
        const iconElement = screen.getByTestId('test-icon');
        expect(buttonElement).toHaveTextContent('Click Me');
        expect(iconElement).toBeInTheDocument();
    });

    test('passes additional props to button', () => {
        render(<ButtonLayout label="Click Me" data-testid="button" disabled />);
        const buttonElement = screen.getByTestId('button');
        expect(buttonElement).toBeDisabled();
    });

    test('handles button click', () => {
        const handleClick = jest.fn();
        render(<ButtonLayout label="Click Me" onClick={handleClick} />);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
