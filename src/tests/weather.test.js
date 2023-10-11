import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Weather from './Weather';

jest.mock('../Api', () => ({
    getWeather: jest.fn(() => Promise.resolve({ name: 'London', main: { temp: 10 }, weather: [{ description: 'Cloudy' }] })),
}));

describe('Weather', () => {
    it('should render the form and search button', () => {
        const { getByLabelText, getByRole } = render(<Weather />);
        expect(getByLabelText('Enter a city name:')).toBeInTheDocument();
        expect(getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });

    it('should display the weather data when the form is submitted', async () => {
        const { getByLabelText, getByRole, getByText } = render(<Weather />);
        const input = getByLabelText('Enter a city name:');
        const button = getByRole('button', { name: 'Search' });

        fireEvent.change(input, { target: { value: 'London' } });
        fireEvent.click(button);

        expect(getByText('Loading...')).toBeInTheDocument();

        await waitFor(() => {
            expect(getByText('London')).toBeInTheDocument();
            expect(getByText('Temperature: 10°C')).toBeInTheDocument();
            expect(getByText('Weather: Cloudy')).toBeInTheDocument();
        });
    });

    it('should display an error message when the form is submitted with an invalid city name', async () => {
        const { getByLabelText, getByRole, getByText } = render(<Weather />);
        const input = getByLabelText('Enter a city name:');
        const button = getByRole('button', { name: 'Search' });

        fireEvent.change(input, { target: { value: 'Invalid City' } });
        fireEvent.click(button);

        expect(getByText('Loading...')).toBeInTheDocument();

        await waitFor(() => {
            expect(getByText('Error fetching weather data. Please check the city name.')).toBeInTheDocument();
        });
    });
});