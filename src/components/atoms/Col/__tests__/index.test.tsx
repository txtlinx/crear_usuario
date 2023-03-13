import React from 'react';
import { render, screen } from '@testing-library/react';
import Col from '..';

const children = 'Test children';

test('render Col with mandatory props', () => {
  const { container } = render(<Col children={children} />);
  expect(container).toMatchSnapshot();
  const linkElement = screen.getByText(/Test children/i);
  expect(linkElement).toBeInTheDocument();
});
