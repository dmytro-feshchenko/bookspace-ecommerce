import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextInput } from './text-input.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTextInput />);
  const rendered = getByText('hello from TextInput');
  expect(rendered).toBeTruthy();
});
