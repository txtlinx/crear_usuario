import React from 'react';
import { InputProps } from './Input.type';
import style from './Input.module.css';
const Input = ({
  id,
  name,
  value,
  label,
  placeholder,
  tooltip,
  icon,
  type,
  error,
  success,
  disabled,
  errorMessage,
  showPassword,
  maxLength,
  variant,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <div
      data-testid={id}
      className={`${style.containerInput} ${variant ? style[variant] : ''} ${
        disabled ? style.disabled : ''
      } ${success ? style.success : ''} ${error ? style.error : ''}`}
    >
      <fieldset>
        <legend>
          {label && label} {tooltip && tooltip}
        </legend>

        <input
          value={value}
          name={name}
          type={showPassword ? 'text' : type}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
        />
        {icon && icon}
      </fieldset>
      {error && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
