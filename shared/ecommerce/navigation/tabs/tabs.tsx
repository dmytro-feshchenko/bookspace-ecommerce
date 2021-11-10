import React from 'react';

export type TabsProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Tabs({ text }: TabsProps) {
  return (
    <div>
      {text}
    </div>
  );
}
