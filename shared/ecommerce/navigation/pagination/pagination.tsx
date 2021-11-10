import React from 'react';

export type PaginationProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Pagination({ text }: PaginationProps) {
  return (
    <div>
      {text}
    </div>
  );
}
