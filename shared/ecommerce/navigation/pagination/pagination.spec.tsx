import React from 'react';
import { render } from '@testing-library/react';
import { BasicPagination } from './pagination.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPagination />);
  const rendered = getByText('hello from Pagination');
  expect(rendered).toBeTruthy();
});
