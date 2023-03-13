import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from '../../../context/appContext';
import { getDashboardInformation } from '../../../services/dashboard.services';

import MasterTemplate, { closeMenu } from '../MasterTemplate';
jest.mock('../../../services/dashboard.services');
const WrappedMasterTemplate = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <MasterTemplate />
      </AppProvider>
    </BrowserRouter>
  );
};

jest.useRealTimers();

describe('<MasterTemplate />', () => {
  const realLocation = window.location;
  beforeAll(() => {
    Reflect.deleteProperty(window, 'location');
    window.location = { ...realLocation, assign: jest.fn() };
  });

  afterAll(() => {
    window.location = realLocation;
  });

  beforeEach(() => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'accessToken=token',
    });
    (getDashboardInformation as jest.Mock).mockReturnValue({
      customerInformation: { firstName: 'TestName' },
    });
  });

  test('Render component, open and close modal', async () => {
    jest.setTimeout(20000);
    render(<WrappedMasterTemplate />);
    const saveCompanyTextFirst = screen.queryByText(
      'Guardar esta empresa como favorita'
    );
    expect(saveCompanyTextFirst).not.toBeInTheDocument();
    const btnChangeCompany = screen.getByText('Cambiar empresa');
    fireEvent.click(btnChangeCompany);
    const inputSearcher = screen.getByTestId('input-enterprise-search');
    await waitFor(() => expect(inputSearcher).toBeInTheDocument());

    const clickOutside = screen.getByTestId('background-modal');
    fireEvent.click(clickOutside);
    const saveCompanyTextThird = screen.queryByText(
      'Guardar esta empresa como favorita'
    );

    await waitFor(() => expect(saveCompanyTextThird).not.toBeInTheDocument());
  }, 20000);
});

describe('CloseMenu', () => {
  test('should call close menu', () => {
    let close = true;
    const setClose = () => (close = false);
    const res = closeMenu(setClose);
    res();
    expect(close).toBeFalsy();
  });
});
