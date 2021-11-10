import React from 'react';

export type ToggleProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Toggle({ text }: ToggleProps) {
  return (
    <div>
      {text}
    </div>
  );
}
