import { ChangeEvent } from 'react';
import { Label, Input, SwitchStyle } from './styles';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: number;
  text?: string;
  name: string;
};

const Switch = ({ onChange, value, text, name }: Props) => {
  return (
    <Label>
      <Input type="checkbox" onChange={onChange} value={value} name={name} />
      <SwitchStyle />
      <span>{text}</span>
    </Label>
  );
};

export default Switch;
