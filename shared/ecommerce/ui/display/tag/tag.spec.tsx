import React from 'react';
import { render } from '@testing-library/react';
import { BasicTag } from './tag.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTag />);
  const rendered = getByText('hello from Tag');
  expect(rendered).toBeTruthy();
});
