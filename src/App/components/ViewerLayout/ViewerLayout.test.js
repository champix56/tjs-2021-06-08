import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ViewerLayout from './ViewerLayout';

describe('<ViewerLayout />', () => {
  test('it should mount', () => {
    render(<ViewerLayout />);
    
    const viewerLayout = screen.getByTestId('ViewerLayout');

    expect(viewerLayout).toBeInTheDocument();
  });
});