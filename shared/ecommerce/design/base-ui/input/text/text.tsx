import React from 'react';

export type TextInputProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function TextInput({ text }: TextInputProps) {
  return (
    <div>
      {text}
    </div>
  );
}
