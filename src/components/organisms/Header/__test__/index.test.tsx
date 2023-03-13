import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '..';
import { applicationPaths } from '../../../../config/path';
import AppProvider from '../../../../context/appContext';
import useStore from '../../../../hooks/useStore';
import { CompaniesExample } from '../../../molecules/Header/MyCompanies/MyCompanies-example';
jest.mock('../../../../hooks/useStore');
const setShowModalMock = jest.fn();
const setOpenMenuMock = jest.fn();
const WrappedHeader = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header
          openMenu={false}
          setOpenMenu={setOpenMenuMock}
          setShowModal={setShowModalMock}
          showModal={'open'}
        />
      </BrowserRouter>
    </AppProvider>
  );
};
beforeEach(() => {
  (useStore as jest.Mock).mockReturnValue([
    {
      dashboard: {
        dashboardInformation: {
          customerInformation: {
            companies: CompaniesExample,
          },
        },
        loading: false,
      },
    },
  ]);
});

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

global.scrollTo = jest.fn();

describe('<Header />', () => {
  test('Render menu and button', () => {
    render(<WrappedHeader />);
    const switchButton = screen.getByTestId('button-menu-header');
    fireEvent.click(switchButton);
    expect(switchButton).toBeInTheDocument();
  });

  test('Open company list and filter by text', async () => {
    render(<WrappedHeader />);

    const openModalCompanies = screen.getByText('Cambiar empresa');
    fireEvent.click(openModalCompanies);

    const filter = screen.getByTestId('input-enterprise-search');
    await waitFor(() => expect(filter).toBeInTheDocument());

    fireEvent.change(filter, { target: { value: 'agri' } });

    const resultsCompanies = screen.getAllByTestId('result-companies');

    expect(resultsCompanies.length).toBeGreaterThan(0);
  });

  test('Render header and press icon', () => {
    render(<WrappedHeader />);
    const logo = screen.getByTestId('logo-itau-mayorista');
    fireEvent.click(logo);
    expect(mockedUsedNavigate).toBeCalledWith(applicationPaths.home);
  });

  test('Press menu Hamburger is called', () => {
    render(<WrappedHeader />);
    const btn = screen.getByTestId('btn-hamburger');
    fireEvent.click(btn);
    expect(setOpenMenuMock).toBeCalled();
  });
});
