import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import OptionUserData from '..';

window.scrollTo = jest.fn();

const optionsMock = [
  { text: 'Cambio de clave', to: '/' },
  { text: 'Dispositivos de seguridad', to: '' },
];

describe('<OptionUserData />', () => {
  test('Render component', () => {
    const { container } = render(
      <BrowserRouter>
        <OptionUserData
          text={'User Test'}
          icon={'user'}
          options={optionsMock}
        />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  test('Onclick in option-user expanded options', () => {
    render(
      <BrowserRouter>
        <OptionUserData
          text={'User Test'}
          icon={'user'}
          options={optionsMock}
        />
      </BrowserRouter>
    );
    const option = screen.getByLabelText('option-user');
    fireEvent.click(option);

    const section = screen.queryByText('User Test');
    expect(section).toBeInTheDocument();
  });
});
