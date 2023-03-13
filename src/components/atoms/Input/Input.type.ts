import { ChangeEvent, ReactNode } from 'react';

export type InputProps = {
  id?: string | undefined;
  name?: string;
  value?: string | undefined;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password';
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  showPassword?: boolean;
  tooltip?: ReactNode;
  icon?: ReactNode;
  maxLength?: number | undefined;
  variant?: 'dark' | 'ligth' | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
};
