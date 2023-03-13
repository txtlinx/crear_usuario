import { render, screen } from '@testing-library/react';

import Transfers from '../Transfers';

describe('<Transfers />', () => {
  test('Render component', () => {
    render(<Transfers />);
    const transfersText = screen.getByText('Transferencias');
    expect(transfersText).toBeInTheDocument();
  });
});
