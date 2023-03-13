import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import Searcher from '..';

const WrapperSearcher = () => {
  const [enterprise, setEnterprise] = useState('');

  return (
    <Searcher
      enterpriseToSearch={enterprise}
      setEnterpriseToSearch={setEnterprise}
    />
  );
};

describe('<Searcher />', () => {
  test('Render component', () => {
    render(<WrapperSearcher />);
    const placeholders = screen.getAllByPlaceholderText(
      'Buscar por el nombre o RUT de la empresa'
    );
    expect(placeholders.length).toBe(1);
  });

  test('Render component and enter text', () => {
    render(<WrapperSearcher />);
    const input = screen.getByTestId('input-enterprise-search');
    expect(input).toHaveValue('');
    fireEvent.change(input, {
      target: { value: 'Empresa' },
    });
    expect(input).toHaveValue('Empresa');
  });
});
