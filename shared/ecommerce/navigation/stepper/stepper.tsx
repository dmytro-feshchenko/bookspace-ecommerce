import React from 'react';

export type StepperProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Stepper({ text }: StepperProps) {
  return (
    <div>
      {text}
    </div>
  );
}
