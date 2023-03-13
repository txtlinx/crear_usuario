import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../index';

describe('<Button />', () => {
  test('Render component', () => {
    render(<Button id="test-button"> Render Button </Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });

  test('Render component DISABLED', () => {
    render(
      <Button id="test-button" disabledButton>
        {' '}
        Render Buton{' '}
      </Button>
    );
    const button = screen.getByTestId('test-button');
    expect(button).toBeDisabled();
  });

  test('Render component CLICK', () => {
    const handleClick = jest.fn();
    render(
      <Button id="test-button" onClick={handleClick}>
        {' '}
        Render Button{' '}
      </Button>
    );
    const button = screen.getByTestId('test-button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  test('Render component SIZE', () => {
    render(
      <Button id="test-button" size="small">
        Render Button{' '}
      </Button>
    );
    const button = screen.getByTestId('test-button');
    expect(button).toHaveClass('btn small');
  });

  test('Render component without SIZE and variant', () => {
    render(<Button id="test-button">Render Button </Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toHaveClass('btn');
  });

  test('Render component CHILDREN', () => {
    render(<Button id="test-button" children={'ESTE ES UN BOTON'} />);
    const button = screen.getByTestId('test-button');
    expect(button).toHaveTextContent('ESTE ES UN BOTON');
  });
});
