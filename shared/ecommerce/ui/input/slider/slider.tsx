import React from 'react';

export type SliderProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Slider({ text }: SliderProps) {
  return (
    <div>
      {text}
    </div>
  );
}
