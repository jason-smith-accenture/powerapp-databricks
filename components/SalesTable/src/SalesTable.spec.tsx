import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';   
import {SalesTableView} from './SalesTable';
import React from 'react';

describe('SalesTableView', () => {
  it('renders "No sales data available." when data is empty', () => {
    render(<SalesTableView data="" />);
    expect(screen.getByText('No sales data available.')).toBeInTheDocument();
  });

  it('renders "Invalid sales data." when data is invalid JSON', () => {
    render(<SalesTableView data="invalid json" />);
    expect(screen.getByText('Invalid sales data.')).toBeInTheDocument();
  });

  it('renders the table when valid sales data is provided', () => {
    const validData = JSON.stringify([
      { id: 1, product: 'Product A', region: 'Region A', sales: 100 },
      { id: 2, product: 'Product B', region: 'Region B', sales: 200 },
    ]);
    render(<SalesTableView data={validData} />);
    expect(screen.getByText('Sales Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
  });
});