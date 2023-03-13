import { screen, render } from '@testing-library/react';
import ToolTip from '..';

describe('<ToolTip/>', () => {
  test('Render component', () => {
    render(<ToolTip text="render" />);

    const Render = screen.queryByText('render');
    expect(Render).toBeInTheDocument();
  });

  test('Render with position props', () => {
    render(<ToolTip b={1} t={1} l={1} r={1} text="render" />);
    const tooltip = screen.getByTestId('tooltip');
    expect(tooltip).toHaveStyle('top: 1px;');
    expect(tooltip).toHaveStyle('bottom: 1px;');
    expect(tooltip).toHaveStyle('left: 1px;');
    expect(tooltip).toHaveStyle('right: 1px;');
  });
});
