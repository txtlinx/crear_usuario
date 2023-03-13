import style from './Button.module.css';

import { ButtonProps } from './Button.types';
const Button = ({
  id,
  onClick,
  disabledButton,
  variant,
  size,
  level,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`${style.btn} ${level ? style[level] : ''} ${
        variant ? style[variant] : ''
      } ${size ? style[size] : ''}`}
      data-testid={id}
      onClick={onClick}
      disabled={disabledButton}
    >
      {children}
    </button>
  );
};

export default Button;
