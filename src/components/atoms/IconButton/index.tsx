import React, { ReactNode, MouseEvent } from 'react';
import { ContainerIconButton } from './style';

type Props = {
  text: string;
  icon: ReactNode;
  onClick?: (event: MouseEvent) => void;
};

const IconButton = ({ text, icon, onClick }: Props) => {
  return (
    <ContainerIconButton onClick={onClick}>
      <button>{icon}</button>
      <span>{text}</span>
    </ContainerIconButton>
  );
};

export default IconButton;
