import React from 'react';

export type CheckboxProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Checkbox({ text }: CheckboxProps) {
  return (
    <div>
      {text}
    </div>
  );
}
