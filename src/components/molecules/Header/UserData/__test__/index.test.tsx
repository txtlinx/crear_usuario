import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import UserData from '..';
import AppProvider from '../../../../../context/appContext';

describe('<UserData />', () => {
  test('Render component', () => {
    const { container } = render(
      <BrowserRouter>
        <AppProvider>
          <UserData />
        </AppProvider>
      </BrowserRouter>
    );

    expect(container).toBeInTheDocument();
  });
});
