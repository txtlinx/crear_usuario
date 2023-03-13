import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideBar from '..';

const WrappedSideBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <SideBar open={open} setOpen={setOpen} />
    </BrowserRouter>
  );
};

global.scrollTo = jest.fn();

describe('<SideBar />', () => {
  test('Render component', () => {
    render(<WrappedSideBar />);
    const switchButton = screen.getByTestId('switch-button-menu-sidebar');
    expect(switchButton).toBeInTheDocument();
  });

  test('Render component and press switch button to open sidebar', () => {
    render(<WrappedSideBar />);
    const switchButton = screen.getByTestId('switch-button-menu-sidebar');
    expect(switchButton).toBeInTheDocument();
    fireEvent.click(switchButton);
    const homeText = screen.getByText('Inicio');
    expect(homeText).toBeInTheDocument();
  });

  test('Render component and press in Payments to open second level', () => {
    render(<WrappedSideBar />);
    const switchButton = screen.getByTestId('switch-button-menu-sidebar');
    expect(switchButton).toBeInTheDocument();
    fireEvent.click(switchButton);
    const paymentText = screen.getByText('Pagos');
    expect(paymentText).toBeInTheDocument();
    const dropdownPayments = screen.getByTestId(
      'submenu-dropdown-/pagos-option'
    );
    expect(dropdownPayments).toBeInTheDocument();
    fireEvent.click(dropdownPayments);
    const transferText = screen.getByText('Transferencias');
    expect(transferText).toBeInTheDocument();
  });
});
