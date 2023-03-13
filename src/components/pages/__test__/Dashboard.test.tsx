import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from '../../../context/appContext';
import { getDashboardInformation } from '../../../services/dashboard.services';
import MasterTemplate from '../../templates/MasterTemplate';
import Home from '../Home';

jest.mock('../../../services/dashboard.services');

const WrappedHome = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <MasterTemplate />
        <Home />
      </AppProvider>
    </BrowserRouter>
  );
};

describe('Home', () => {
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
  });

  describe('When session return valid data', () => {
    beforeEach(() => {
      (getDashboardInformation as jest.Mock).mockReturnValue({
        customerInformation: { firstName: 'TestName' },
      });
    });

    test('should call session api', async () => {
      render(<WrappedHome />);

      await waitFor(() => expect(getDashboardInformation).toBeCalled());

      await waitFor(() => {
        const userName = screen.queryByText('TestName!');
        expect(userName).toBeInTheDocument();
      });
    });
  });

  describe('When session return no data', () => {
    beforeEach(() => {
      (getDashboardInformation as jest.Mock).mockReturnValue({
        token: 'test-token',
      });
    });

    test('should call session api', async () => {
      render(<WrappedHome />);
      await waitFor(() => expect(getDashboardInformation).toBeCalled());

      await waitFor(() => {
        const userName = screen.queryByText('¡Hola!');
        expect(userName).toBeInTheDocument();
      });
    });
  });
});
