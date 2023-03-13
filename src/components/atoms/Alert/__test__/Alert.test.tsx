import { fireEvent, render, screen } from '@testing-library/react';
import Alert from '../index';

describe('<Alert />', () => {
  test('Render component', () => {
    render(
      <Alert id="test-alert" onClose={jest.fn()} open={true}>
        {' '}
        Render Alert{' '}
      </Alert>
    );
    const alert = screen.getByTestId('test-alert');
    expect(alert).toBeInTheDocument();
  });
  test('Render Title', () => {
    const title = 'Esta es una test para el titulo';
    render(
      <Alert
        id="test-alert"
        type="danger"
        title={title}
        onClose={jest.fn()}
        open={true}
      >
        {' '}
        Render Alert{' '}
      </Alert>
    );
    const testTitle = screen.getByTestId('test-alert');
    expect(testTitle).toHaveTextContent(title);
  });
  test('Render component CLOSE', () => {
    const handleClick = jest.fn();
    render(
      <Alert id="test-alert" type="danger" onClose={handleClick} open={true}>
        {' '}
        Render Alert{' '}
      </Alert>
    );
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
