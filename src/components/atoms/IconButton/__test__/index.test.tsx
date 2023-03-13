import { render, screen, fireEvent } from '@testing-library/react';
import IconButton from '..';

describe('<IconButton />', () => {
  test('Render component', () => {
    const text = 'IconButton';
    render(<IconButton icon={'*'} text={text} />);
    const btn = screen.queryByText(text);
    expect(btn).toBeInTheDocument();
  });
  test('Clicking in IconButton', () => {
    const onClick = jest.fn();
    const text = 'IconButton';
    render(<IconButton icon={'*'} text={text} onClick={onClick} />);
    const btn = screen.getByText(text);
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onClick).toBeCalled();
  });
});
