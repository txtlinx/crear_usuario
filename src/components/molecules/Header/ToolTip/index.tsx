import { ToolTipStyle } from './styles';

const ToolTip = ({
  text,
  t,
  r,
  b,
  l,
  className,
}: {
  text: string;
  t?: number;
  l?: number;
  b?: number;
  r?: number;
  className?: string;
}) => {
  return (
    <ToolTipStyle
      data-testid="tooltip"
      className={`tooltip-${className}`}
      t={t}
      b={b}
      r={r}
      l={l}
    >
      <div>{text}</div>
    </ToolTipStyle>
  );
};

export default ToolTip;
