import React from 'react';

export type BadgeProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Badge({ text }: BadgeProps) {
  return (
    <div>
      {text}
    </div>
  );
}
