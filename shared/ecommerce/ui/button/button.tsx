import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export type ButtonProps = {
  /**
   * Button style modifications
   */
  variant?: 'primary' | 'text' | 'outlined',

  /**
   * Button type, the usage depends on elements structure or scenario.
   */
  type?: 'button' | 'submit' | 'reset'

  /** flag to explicitly toggle loader */
  loading?: boolean,

  /**
   * is button disabled?
   */
  disabled?: boolean,

  /** on click handler */
  onClick?: any,

  /** allow clicking on button even while loading. (i.e. make simultaneous triggers) */
  activeWhenLoading?: boolean,
} & HTMLAttributes<HTMLButtonElement>;

const defaultProps = {
  variant: 'primary',
  type: 'button',
  loading: false,
  disabled: false,
  activeWhenLoading: false,
}

/**
 * Wrapper based on plain HTML button tag
 * 
 * @param param0 
 * @returns 
 */
const BaseHtmlButton = ({ onClick, type, disabled, ...rest }: ButtonProps) => {
  return (
    <button
      type={type}
      // className={cs(styles.Button, className)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    />
  );
}

BaseHtmlButton.defaultProps = defaultProps;

/**
 * Primary button
 * @param param0 
 * @returns 
 */
const Button = ({ onClick, children, variant, ...rest }: ButtonProps) => {
  return (
    <BaseHtmlButton
      className={classNames(styles.button, styles[variant])}
      {...rest}>
      {children}
    </BaseHtmlButton>
  )
}

Button.defaultProps = defaultProps;

export { Button }