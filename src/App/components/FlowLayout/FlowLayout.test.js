import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FlowLayout from './FlowLayout';

describe('<FlowLayout />', () => {
  test('it should mount', () => {
    render(<FlowLayout />);
    
    const flowLayout = screen.getByTestId('FlowLayout');

    expect(flowLayout).toBeInTheDocument();
  });
});