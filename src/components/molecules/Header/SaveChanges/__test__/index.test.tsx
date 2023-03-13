import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import SaveChange from '..';
import { colors } from '../../../../../consts/colors';
import AppProvider from '../../../../../context/appContext';
import useStore from '../../../../../hooks/useStore';
import { CompaniesExample } from '../../MyCompanies/MyCompanies-example';
import { saveFavoriteCompany } from '../../../../../services/changeCompany.services';
import { getDashboardInformation } from '../../../../../services/dashboard.services';

jest.mock('../../../../../hooks/useStore');
jest.mock('../../../../../services/changeCompany.services');
jest.mock('../../../../../services/dashboard.services');
const dispatchMock = jest.fn();
const setSelectedCompanyMock = jest.fn();
const Wrapper = () => {
  return (
    <AppProvider>
      <SaveChange
        selectedCompany={'asdasd'}
        setSelectedCompany={setSelectedCompanyMock}
      />
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
    dispatchMock,
  ]);
  (saveFavoriteCompany as jest.Mock).mockReturnValue([
    {
      status: 200,
    },
  ]);
  (getDashboardInformation as jest.Mock).mockReturnValue([
    {
      dashboard: {
        dashboardInformation: {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZEN1c3RvbWVyIjoiMjgxNDg1MjYtMSIsImlhdCI6MTY3ODI4NzUzNSwiZXhwIjoxNjc4Mjg3ODM1fQ.hh5BCt47fl6rZ5SsBc_GXNQ6KGQS3AWMYSwzg915q60',
          refreshToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZEN1c3RvbWVyIjoiMjgxNDg1MjYtMSIsImlhdCI6MTY3ODI4NzUzNSwiZXhwIjoxNjc4Mjg3ODM1fQ.hh5BCt47fl6rZ5SsBc_GXNQ6KGQS3AWMYSwzg915q60',
          customerInformation: {
            greetings: '!Hola, nico¡',
            rut: '28148526-1',
            firstName: 'nico',
            lastName: '',
            avatar: 'E!',
            idCompany: '97023000-9',
            type: 'A',
            companies: [
              {
                id: '23171827-3',
                name: 'Company Test - 01',
                isFavorite: false,
                rolUser: 'Apoderado Administrador',
              },
              {
                id: '97023000-9',
                name: 'DUMMY 1 SPA 3',
                isFavorite: true,
                rolUser: 'Apoderado Administrador',
              },
              {
                id: '60810000-8',
                name: 'EMPRESA DUMMY',
                isFavorite: false,
                rolUser: 'Apoderado Administrador',
              },
            ],
          },
          signaturesPending: {
            quantity: 19,
            expire: 75,
          },
          accountSummaries: {
            menu: [
              {
                name: 'Certificado de saldo',
                url: '/',
                code: 'CTACTE',
              },
              {
                name: 'Saldos y movimiento',
                url: '/',
                code: 'CTACTE',
              },
              {
                name: 'Saldos y últimos movimientos',
                url: '/',
                code: 'CTACTE',
              },
              {
                name: 'Cartola histórica',
                url: '/',
                code: 'CTACTE',
              },
              {
                name: 'Consultar documentos',
                url: '/',
                code: 'CTACTE',
              },
              {
                name: 'Consultar talonario',
                url: '/',
                code: 'CTACTE',
              },
              {
                name: 'Suscripción de cartola',
                url: '/',
                code: 'CTACTE',
              },
              {
                name: 'Ahorrar a cuenta Corriente',
                url: '/',
                code: 'LNACRE',
              },
              {
                name: 'Pagar linea de crédito',
                url: '/',
                code: 'LNACRE',
              },
              {
                name: 'Saldos y movimientos',
                url: '/',
                code: 'LNACRE',
              },
              {
                name: 'Cartola histórica',
                url: '/',
                code: 'LNACRE',
              },
              {
                name: 'Consultar documentos',
                url: '/',
                code: 'LNACRE',
              },
              {
                name: 'Consultar nueva numeración',
                url: '/',
                code: 'LNACRE',
              },
              {
                name: 'Ult. movimientos de intereses',
                url: '/',
                code: 'LNACRE',
              },
              {
                name: 'Cartola de intereses',
                url: '/',
                code: 'LNACRE',
              },
              {
                name: 'Configuración de pago',
                url: '/',
                code: 'LNACRE',
              },
              {
                name: 'Saldo y movimiento',
                url: '/',
                code: 'CTADOL',
              },
              {
                name: 'Cartola historica',
                url: '/',
                code: 'CTADOL',
              },
              {
                name: 'Cartola electrónica',
                url: '/',
                code: 'CTADOL',
              },
              {
                name: 'Consultar nueva numeración',
                url: '/',
                code: 'CTADOL',
              },
              {
                name: 'Suscripción de cartola',
                url: '/',
                code: 'CTADOL',
              },
            ],
            balances: [
              {
                accountType: 'CTACTE',
                nameProduct: 'Cuenta Corriente',
                titleAvailable: 'Saldo disponible',
                titleCountable: 'Saldo contable',
                state: 'ACTIVE',
                accountNumber: '1112223330',
                accountAliases: 'Pago Hogar',
                availableAmount: 1000000,
                availableCurrency: '$',
                countableAmount: 1000000,
                countableCurrency: '$',
                create: '1990-01-02',
                message: 'ACTIVE',
              },
              {
                accountType: 'LNACRE',
                nameProduct: 'Línea de Crédito',
                titleAvailable: 'Cupo disponible',
                titleCountable: 'Cupo utilizado',
                state: 'ACTIVE',
                accountNumber: '1112223331',
                accountAliases: 'Pago Hogar',
                availableAmount: 1000000,
                availableCurrency: '$',
                countableAmount: 1000000,
                countableCurrency: '$',
                create: '1990-01-02',
                message: 'ACTIVE',
              },
              {
                accountType: 'CTADOL',
                nameProduct: 'Cuenta Dolar',
                titleAvailable: 'Saldo disponible',
                titleCountable: 'Saldo contable',
                state: 'ACTIVE',
                accountNumber: '1112223332',
                accountAliases: 'Pago Hogar',
                availableAmount: 1000000,
                availableCurrency: 'USD',
                countableAmount: 1000000,
                countableCurrency: 'USD',
                create: '1990-01-02',
                message: 'ACTIVE',
              },
            ],
          },
          setShortcuts: {
            byDefault: [
              {
                name: 'saldos y ulitmos movimientos',
                id: 'SALDOS',
                state: true,
                link: 'transferencias a terceros',
                order: 0,
              },
              {
                name: 'crear nuevos usuarios',
                id: 'CREARNUEVOSUSUARIOS',
                state: true,
                link: 'pago de remuneraciones',
                order: 1,
              },
              {
                name: 'administrar usuarios',
                id: 'ADMINISTRARUSUARIO',
                state: true,
                link: 'portal comex',
                order: 2,
              },
              {
                name: 'confirming web',
                id: 'CONFIRMING',
                state: true,
                link: 'portal comex',
                order: 3,
              },
              {
                name: 'portal comex',
                id: 'COMEX',
                state: true,
                link: 'transferencias alto montos',
                order: 4,
              },
            ],
            active: [
              {
                name: 'transferencias alto montos',
                id: 'BOLETAS',
                state: true,
                link: 'boletas de garantia',
                order: 0,
              },
              {
                name: 'transferencias alto montos',
                id: 'BOLETAS',
                state: true,
                link: 'boletas de garantia',
                order: 0,
              },
              {
                name: 'transferencias alto montos',
                id: 'BOLETAS',
                state: true,
                link: 'boletas de garantia',
                order: 0,
              },
            ],
            all: [
              {
                name: 'saldos y ulitmos movimientos',
                id: 'SALDOS',
                state: false,
                link: 'pago de proveedores',
                order: 0,
              },
              {
                name: 'crear nuevos usuarios',
                id: 'CREARNUEVOSUSUARIOS',
                state: true,
                link: 'portal comex',
                order: 1,
              },
              {
                name: 'administrar usuarios',
                id: 'ADMINISTRARUSUARIO',
                state: true,
                link: 'confirming web',
                order: 2,
              },
              {
                name: 'confirming web',
                id: 'CONFIRMING',
                state: true,
                link: 'transferencias alto montos',
                order: 3,
              },
              {
                name: 'portal comex',
                id: 'COMEX',
                state: false,
                link: 'pago de proveedores',
                order: 4,
              },
              {
                name: 'transferencias a terceros',
                id: 'TRANSFERENCIA',
                state: false,
                link: 'portal comex',
                order: 5,
              },
              {
                name: 'transferencias alto montos',
                id: 'TRANSFERENCIAMONTOS',
                state: true,
                link: 'administrar usuarios',
                order: 6,
              },
              {
                name: 'boletas de garantia',
                id: 'BOLETAS',
                state: false,
                link: 'transferencias alto montos',
                order: 7,
              },
              {
                name: 'pago de proveedores',
                id: 'PAGOPROVEEDORES',
                state: true,
                link: 'pago de proveedores',
                order: 8,
              },
              {
                name: 'pago de remuneraciones',
                id: 'PAGOREMUNERACIONES',
                state: false,
                link: 'crear nuevos usuarios',
                order: 9,
              },
            ],
          },
          economicIndicators: {
            date: '2023-03-08T14:58:55.834Z',
            indicators: [
              {
                code: 'UF',
                value: 123.67,
                variation: 'up',
              },
              {
                code: 'UTM',
                value: 123.67,
                variation: 'down',
              },
              {
                code: 'Dólar',
                value: 123.67,
                variation: 'equals',
              },
            ],
          },
        },
        loading: false,
      },
    },
  ]);
});
describe('<SaveChange />', () => {
  test('Render component without company selected', () => {
    render(<Wrapper />);
    const save = screen.getByText('Guardar esta empresa como favorita');
    expect(save).toBeInTheDocument();
  });

  test('Render component with company selected', () => {
    render(<Wrapper />);
    const save = screen.getByText('Guardar esta empresa como favorita');
    expect(save).toBeInTheDocument();
  });

  test('if press Save button', async () => {
    render(<Wrapper />);
    const save = screen.getByText('Guardar esta empresa como favorita');
    expect(save).toBeInTheDocument();
    const checkbox = screen.getByTestId('favorite-company-checkbox');
    fireEvent.click(checkbox);
    const saveButton = screen.getByTestId('favorite-company-save-button');
    expect(saveButton).toHaveStyle('background-color: #FF5500');

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(checkbox).toHaveStyle(`background-color:${colors.neutral.shade2}`);
    });
    expect(dispatchMock).toBeCalledTimes(4);
  });
});
