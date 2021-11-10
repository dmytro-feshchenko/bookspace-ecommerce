import React from 'react';

export type RadioProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Radio({ text }: RadioProps) {
  return (
    <div>
      {text}
    </div>
  );
}
