import React from 'react';

export type SwitchProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Switch({ text }: SwitchProps) {
  return (
    <div>
      {text}
    </div>
  );
}
