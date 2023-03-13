import { render, screen } from '@testing-library/react';
import { Company } from '../styles';

describe('My companies styles', () => {
  test('should render with marquee', () => {
    render(
      <Company marquee selected>
        <section>
          <div data-testid="div">Test</div>
        </section>
      </Company>
    );
    const div = screen.getByTestId('div');
    expect(div).toHaveStyle('text-overflow:ellipsis');
  });
});
