import React from 'react';
import { render } from '@testing-library/react';
import { BasicStepper } from './stepper.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicStepper />);
  const rendered = getByText('hello from Stepper');
  expect(rendered).toBeTruthy();
});
