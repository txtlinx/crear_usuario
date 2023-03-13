import { screen, render } from '@testing-library/react';
import ContainerUserData from '..';

describe('<ContainerUserData/>', () => {
  test('verify that the user data container is displayed', () => {
    render(
      <ContainerUserData showUserData={true}>
        <p>render</p>
      </ContainerUserData>
    );

    const Render = screen.queryByText('render');

    expect(Render).toBeInTheDocument();
  });
});
