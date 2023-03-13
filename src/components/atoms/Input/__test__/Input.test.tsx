import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../index';
import Button from '../../Button';

describe('<Input />', () => {
  test('Verify showPassword change type input', () => {
    render(
      <Input
        id="test-input"
        placeholder="placeholder"
        showPassword={true}
        type={'password'}
      />
    );
    const input = screen.getByPlaceholderText('placeholder');
    expect('text').toBe(input.getAttribute('type'));
  });

  test('If errorMessage is correctly', () => {
    const message = 'Ha ocurrido un error!!!';
    render(
      <Input
        id="test-input"
        placeholder="placeholder"
        error={true}
        errorMessage={message}
      />
    );
    const p = screen.getByText(message);
    expect(p).toHaveTextContent(message);
  });

  test('Validate if onChange and onBlur is Called', () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const placeholder = 'placeholder';
    render(
      <Input
        id="test-input"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    );
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'QWERTY' } });
    expect(handleChange).toBeCalled();
    fireEvent.blur(input);
    expect(handleBlur).toBeCalled();
  });

  test('Input is Disabled', () => {
    const placeholder = 'placeholder';
    render(<Input id="test-input" placeholder={placeholder} disabled />);
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  test('Input is Success', () => {
    render(<Input id="test-input" success={true} />);
    const input = screen.getByTestId('test-input');
    expect(input).toHaveClass('success');
  });

  test('Label render', () => {
    const label = 'legend';
    render(<Input id="test-input" label={label} />);
    const input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveTextContent(label);
  });

  test('Input whit Icon render', () => {
    const icon = <Button variant="link">Boton</Button>;
    render(<Input id="test-input" icon={icon} />);
    const button = screen.getByText('Boton');
    expect(button).toBeInTheDocument();
  });

  test('Input whit variant render', () => {
    render(<Input id="test-input" variant="ligth" tooltip={'*'} />);
    const input = screen.getByTestId('test-input');
    expect(input).toHaveClass('containerInput ligth');
    const tooltip = screen.getByText('*');
    expect(tooltip).toBeInTheDocument();
  });
});
