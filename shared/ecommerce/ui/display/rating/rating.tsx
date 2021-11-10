import React from 'react';

export type RatingProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Rating({ text }: RatingProps) {
  return (
    <div>
      {text}
    </div>
  );
}
