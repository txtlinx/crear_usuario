import { fireEvent, render, screen } from '@testing-library/react';

import ContainerOptionsHeader from '..';
import AppProvider from '../../../../../context/appContext';
import useStore from '../../../../../hooks/useStore';

import { closeSession } from '../../../../../utils/session';

jest.mock('../../../../../utils/session', () => ({
  closeSession: jest.fn(),
}));
jest.mock('../../../../../hooks/useStore');

const setShowChangeCompanyMock = jest.fn();
const setSelectedCompanyMock = jest.fn();
const setShowUserDataMock = jest.fn();
const setShowModalMock = jest.fn();

const WrappedContainerOptionsHeader = (props: any) => {
  return (
    <AppProvider>
      <ContainerOptionsHeader
        setShowChangeCompany={setShowChangeCompanyMock}
        showChangeCompany={false}
        setSelectedCompany={setSelectedCompanyMock}
        setShowUserData={setShowUserDataMock}
        showUserData={false}
        setShowModal={setShowModalMock}
        {...props}
      >
        <pre aria-label="pre">Render Container</pre>
      </ContainerOptionsHeader>
    </AppProvider>
  );
};

describe('<ContainerOptionsHeader />', () => {
  beforeEach(() => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'token-false=token',
    });

    (useStore as jest.Mock).mockReturnValue([
      {
        dashboard: {
          dashboardInformation: {
            customerInformation: {
              idCompany: '8646786-0',
              companies: [
                {
                  id: '8646786-0',
                  name: 'Fantasy Corporation - 1',
                  isFavorite: true,
                  rolUser: 'Apoderado Administrador',
                },
              ],
            },
          },
          loading: false,
        },
      },
    ]);
  });

  const realLocation = window.location;

  beforeAll(() => {
    Reflect.deleteProperty(window, 'location');
    window.location = { ...realLocation, assign: jest.fn() };
  });

  afterAll(() => {
    window.location = realLocation;
  });

  test('Render component', () => {
    render(
      <WrappedContainerOptionsHeader showUserData={false} showModal={''} />
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag).toHaveTextContent('Render Container');
  });

  test('Validate if setShowChangeCompany called', () => {
    render(
      <WrappedContainerOptionsHeader showUserData={false} showModal={''} />
    );
    const btnChangeCompany = screen.getByText('Cambiar empresa');
    fireEvent.click(btnChangeCompany);
    expect(setShowChangeCompanyMock).toBeCalled();
  });

  test('Validate if setSelectedCompanyMock called', () => {
    render(
      <WrappedContainerOptionsHeader showUserData={false} showModal={''} />
    );
    const btnChangeCompany = screen.getByText('Cambiar empresa');
    fireEvent.click(btnChangeCompany);
    expect(setShowChangeCompanyMock).toBeCalled();
  });

  test('Validate if setShowUserDataMock called', () => {
    render(
      <WrappedContainerOptionsHeader showUserData={false} showModal={''} />
    );
    const profile = screen.getByTestId('avatar');
    fireEvent.click(profile);
    expect(setShowUserDataMock).toBeCalled();
  });

  test('Validate if showUserData is true shows the styles correctly', () => {
    render(
      <WrappedContainerOptionsHeader showUserData={true} showModal={'open'} />
    );
    const profile = screen.getByLabelText('profile');
    expect(profile).toHaveStyle('border: 2px solid #FF5500');
  });

  test('Close Session from Header', () => {
    delete process.env.REACT_APP_DOMAIN_NAME;
    render(
      <WrappedContainerOptionsHeader showUserData={true} showModal={'open'} />
    );
    const btnCloseSession = screen.getByTestId('close-session');
    fireEvent.click(btnCloseSession);
    expect(closeSession).toBeCalled();
  });
});
