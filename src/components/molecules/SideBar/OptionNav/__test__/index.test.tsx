import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import OptionNav from '..';

const mockedUsedNavigate = jest.fn();
const mockSetOpen = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('<OptionNav />', () => {
  test('click option and call mock', () => {
    render(
      <BrowserRouter>
        <OptionNav title="nav" route="none" setOpen={mockSetOpen} open />
      </BrowserRouter>
    );
    const icon = screen.getByLabelText('icon-label');
    fireEvent.click(icon);
    expect(mockSetOpen).toBeCalled();
  });

  test('click option and call mock and validateCollapsedItem', () => {
    const validateCollapsedItemMock = jest.fn();
    render(
      <BrowserRouter>
        <OptionNav
          title="nav"
          validateCollapsedItem={validateCollapsedItemMock}
          route="none"
          setOpen={mockSetOpen}
          open
        />
      </BrowserRouter>
    );
    const icon = screen.getByLabelText('icon-label');
    fireEvent.click(icon);
    expect(validateCollapsedItemMock).toBeCalled();
    expect(mockSetOpen).toBeCalled();
  });

  test('click option when setOpen and validateCollapsedItem are undefined', () => {
    const validateCollapsedItemMock = jest.fn();
    render(
      <BrowserRouter>
        <OptionNav title="nav" route="account" open children />
      </BrowserRouter>
    );
    const icon = screen.getByLabelText('icon-label');
    fireEvent.click(icon);
    expect(mockSetOpen).not.toBeCalled();
    const childIcon = screen.getByTestId('submenu-dropdown-account-option');
    fireEvent.click(childIcon);
    expect(validateCollapsedItemMock).not.toBeCalled();
  });
});
