import React from 'react';

export type TagProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Tag({ text }: TagProps) {
  return (
    <div>
      {text}
    </div>
  );
}
