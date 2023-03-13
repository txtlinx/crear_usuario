import { render, screen } from '@testing-library/react';

import ContainerChangeCompany from '..';
import { StylesMotion, TopTriangle } from '../styles';

window.scrollTo = jest.fn();

describe('<ContainerChangeCompany />', () => {
  test('Render component', () => {
    render(
      <ContainerChangeCompany showChangeCompany={true}>
        <h1>Titulo</h1>
      </ContainerChangeCompany>
    );
    const titulo = screen.getByText('Titulo');
    expect(titulo).toHaveTextContent('Titulo');
  });

  test('if StylesMotion is true return config correct', () => {
    const res = StylesMotion(false);
    expect(res.ContainerChangeCompanyStyle.animate).toEqual({ height: 0 });
  });

  test('if TopTriangle is true return config correct', () => {
    render(<TopTriangle $userData={true} aria-label="test" />);
    const element = screen.getByLabelText('test');
    expect(element).toHaveStyle('left: 255px');
  });
});
