import { render, screen } from '@testing-library/react';

import Signings from '../Signings';

describe('<Signings />', () => {
  test('Render component', () => {
    render(<Signings />);
    const signingsText = screen.queryByText('signings');
    expect(signingsText).toBeInTheDocument();
  });
});
