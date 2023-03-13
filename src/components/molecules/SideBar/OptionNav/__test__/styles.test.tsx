import { render, screen } from '@testing-library/react';

import { OptionText } from '../styles';

describe('<OptionText />', () => {
  test('click option and call mock', () => {
    render(<OptionText data-testid="option-text" title="nav" marquee />);
    const element = screen.getByTestId('option-text');
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle('text-overflow: ellipsis');
  });
});
