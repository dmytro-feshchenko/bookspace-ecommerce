import React from 'react';

export type BreadcrumbsProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Breadcrumbs({ text }: BreadcrumbsProps) {
  return (
    <div>
      {text}
    </div>
  );
}
