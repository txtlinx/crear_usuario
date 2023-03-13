import { MouseEvent, ReactNode } from 'react';

export type ButtonProps = {
  id?: string;
  color?: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'text' | 'contained' | 'outlined' | 'link' | undefined;
  size?: 'small' | 'medium' | 'large';
  level?: 'n1' | 'n2' | 'n3';
  disabledButton?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};
