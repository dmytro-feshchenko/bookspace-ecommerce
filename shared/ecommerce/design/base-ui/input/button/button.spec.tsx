import React from 'react';
import { render } from '@testing-library/react';
import { PrimaryButton } from './button.composition';

// it('should render with the correct text', () => {
//   const { getByText } = render(<PrimaryButton />);
//   const rendered = getByText('hello from Button');
//   expect(rendered).toBeTruthy();
// });

describe('Button', () => {
  it('should render a test button', () => {
    const { getByText } = render(<PrimaryButton />);
    const testButton = getByText(/test button/i);
    expect(testButton).toBeInTheDocument();
  });
});
