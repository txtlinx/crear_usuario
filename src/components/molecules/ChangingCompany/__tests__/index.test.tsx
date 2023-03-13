import { render, screen } from '@testing-library/react';
import AppProvider from '../../../../context/appContext';
import useStore from '../../../../hooks/useStore';
import ChangingCompany from '../index';
jest.mock('../../../../hooks/useStore');

const Wrapper = () => (
  <AppProvider>
    <ChangingCompany />
  </AppProvider>
);
describe('<ChangingCompany/>', () => {
  beforeEach(() => {
    (useStore as jest.Mock).mockReturnValue([
      {
        changeCompany: {
          display: false,
        },
      },
      jest.fn(),
    ]);
  });

  test('Check render', () => {
    render(<Wrapper />);
  });

  test('Check not render', () => {
    render(<Wrapper />);

    const modal = screen.queryByTestId('container-changing-modal');

    expect(modal).toHaveStyle('display: none');
  });
});
