import { fireEvent, render, screen } from '@testing-library/react';

import SwitchBtn from '../SwitchBtn';

describe('<SwitchBtn />', () => {
  test('click option and call mock', () => {
    const setOpenMock = jest.fn();
    render(<SwitchBtn open={true} setOpen={setOpenMock} />);
    const btnSwitch = screen.getByTestId('switch-button-menu-sidebar');
    fireEvent.click(btnSwitch);
    expect(setOpenMock).toBeCalled();
  });
});
