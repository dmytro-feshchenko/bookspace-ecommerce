import React from 'react';
import { render } from '@testing-library/react';
import { BasicBreadcrumbs } from './breadcrumbs.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBreadcrumbs />);
  const rendered = getByText('hello from Breadcrumbs');
  expect(rendered).toBeTruthy();
});
