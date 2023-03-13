import { fireEvent, render, screen } from '@testing-library/react';
import AppProvider from '../../../../../context/appContext';
import MyCompanies from '..';
import useStore from '../../../../../hooks/useStore';
import { CompaniesExample } from '../MyCompanies-example';
jest.mock('../../../../../hooks/useStore');
const setSelectedCompanyMock = jest.fn();
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
const Wrapper = () => {
  return (
    <AppProvider>
      <MyCompanies
        enterpriseToSearch={''}
        setSelectedCompany={setSelectedCompanyMock}
      />
    </AppProvider>
  );
};

describe('<MyCompanies />', () => {
  test('Render component', () => {
    const { container } = render(<Wrapper />);
    expect(container).toBeInTheDocument();
  });

  test('if setSelectedCompany is called', async () => {
    render(<Wrapper />);
    const input = screen.getByTestId('enterprise-option-1-9');
    fireEvent.click(input);
    expect(setSelectedCompanyMock).toBeCalled();
  });
});
